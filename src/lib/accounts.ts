import { Group, InternalTransaction, User } from "@/models";

type SimplifiedAccountsResult = Omit<InternalTransaction, "date">[];

function setWhoPaysWhoAmount(
  map: Map<string, Map<string, number>>,
  from: User,
  to: User,
  transformAmount: (previous: number) => number,
): void {
  if (!map.has(from.id)) {
    map.set(from.id, new Map());
  }
  const previous = map.get(from.id)?.get(to.id) ?? 0;
  map.get(from.id)?.set(to.id, transformAmount(previous));
}

export function computeSimplifiedAccounts(
  group: Group,
  banker: User,
): SimplifiedAccountsResult {
  const transactions = group.transactions;

  const whoPaysWho = new Map<string, Map<string, number>>();
  const addAmount = (from: User, to: User, amount: number) => {
    return setWhoPaysWhoAmount(
      whoPaysWho,
      from,
      to,
      (previous) => previous + amount,
    );
  };

  /* Create a table of money to be paid from someone to someone */
  transactions.forEach((transaction) =>
    transaction.splits.map((split) => {
      const to = transaction.payee;
      const from = split.payee;
      const amount = split.amount;
      addAmount(from, to, amount);
    }),
  );

  /* Others to banker = what should be paid by each person - what they owe themselves */
  const othersToBanker = new Map<string, number>();
  whoPaysWho.forEach((payeePayables, payeeId) => {
    let totalPayables = 0;
    payeePayables.forEach((owing) => (totalPayables += owing));
    const ownPayables = payeePayables.get(payeeId) ?? 0;
    const netPayables = totalPayables - ownPayables;
    othersToBanker.set(payeeId, netPayables);
  });

  /* Banker to others = what should be received by each person - what they owe themselves */
  const bankerToOthers = new Map<string, number>();
  whoPaysWho.forEach((recipientPayables, recipientId) => {
    let totalReceivables = 0;
    whoPaysWho.forEach((payeePayables, payeeId) => {
      totalReceivables += payeePayables.get(recipientId) ?? 0;
    });
    const ownReceivables = recipientPayables.get(recipientId) ?? 0;
    const netReceivables = totalReceivables - ownReceivables;
    bankerToOthers.set(recipientId, netReceivables);
  });

  /* Final payment = What others pay banker - what banker pays others */
  const finalPayments = new Map<string, number>();
  othersToBanker.forEach((bankerReceivables, payeeId) => {
    const bankerPayables = bankerToOthers.get(payeeId) ?? 0;
    const net = bankerReceivables - bankerPayables;
    finalPayments.set(payeeId, net);
  });

  /* Banker should not pay anything to himself */
  /* Todo: Banker could be selected in a smarter way */
  finalPayments.set(banker.id, 0);

  /* Generate the result list */
  const results: SimplifiedAccountsResult = [];
  finalPayments.forEach((amount, payeeId) => {
    const payee = group.users.find((user) => user.id === payeeId)!;
    if (amount >= 0) {
      results.push({
        to: banker,
        from: payee,
        amount: amount,
      });
    } else {
      results.push({
        to: payee,
        from: banker,
        amount: amount,
      });
    }
  });

  /* Debug */
  console.dir(
    {
      whoPaysWho,
      othersToBanker,
      bankerToOthers,
      finalPayments,
    },
    { depth: 20 },
  );
  return results;
}
