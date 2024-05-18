import { Card } from "@/design/components/card";
import { Heading2, Heading3, Paragraph } from "@/design/typography/typgoraphy";
import { toCurrencyString } from "@/lib/string";
import { cn } from "@/lib/utils";
import { Transaction as ITransaction, User } from "@/models";
import _ from "lodash";
import moment from "moment";

const Transaction = ({
  transaction,
  currentUser,
}: {
  transaction: ITransaction;
  currentUser: User;
}) => {
  const { title, payee, amount, splits } = transaction;

  const youLentAmount = _(splits)
    .filter((split) => split.payee.id !== currentUser.id)
    .sumBy((split) => split.amount);

  const youBorrowedAmount = _(splits)
    .filter((split) => split.payee.id === currentUser.id)
    .sumBy((split) => split.amount);

  return (
    <Card className="cursor-pointer flex-row justify-between">
      <div className="flex flex-col">
        <Paragraph className="font-bold">{title}</Paragraph>
        <Paragraph className="text-glass-secondary">
          {currentUser.id === payee.id ? "You" : payee.name} paid{" "}
          {toCurrencyString(amount)}
        </Paragraph>
      </div>
      <div
        className={cn("flex flex-col text-right text-danger", {
          "text-success": payee.id === currentUser.id,
        })}
      >
        {payee.id === currentUser.id ? (
          <>
            <Paragraph>You lent</Paragraph>
            <Paragraph className="font-bold">
              {toCurrencyString(youLentAmount)}
            </Paragraph>
          </>
        ) : (
          <>
            <Paragraph>You borrowed</Paragraph>
            <Paragraph className="font-bold">
              {toCurrencyString(youBorrowedAmount)}
            </Paragraph>
          </>
        )}
      </div>
    </Card>
  );
};

export const PageTransactions = ({
  transactions,
  currentUser,
}: {
  transactions: ITransaction[];
  currentUser: User;
}) => {
  const transactionsByMonth = _(transactions)
    .sortBy((transaction) => transaction.date)
    .groupBy((transactions) => transactions.date.unix());
  return (
    <div className="container flex flex-col gap-5 p-5 pb-40">
      <Heading2>Transactions</Heading2>
      {transactionsByMonth
        .map((transactions, timestamp) => {
          return (
            <div key={timestamp} className="flex flex-col gap-4">
              <Heading3>{moment(timestamp, "X").format("LL")}</Heading3>
              <div className="flex flex-col gap-2">
                {transactions.map((transaction) => (
                  <Transaction
                    key={transaction.id}
                    transaction={transaction}
                    currentUser={currentUser}
                  />
                ))}
              </div>
            </div>
          );
        })
        .value()}
    </div>
  );
};
