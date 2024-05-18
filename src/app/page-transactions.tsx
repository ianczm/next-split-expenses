"use client";

import { Transaction } from "@/design/components/transaction";
import { Heading2, Heading3 } from "@/design/typography/typgoraphy";
import { useUserSession } from "@/frontend/store/user-session";
import { Transaction as ITransaction } from "@/models";
import _ from "lodash";
import moment from "moment";

export const PageTransactions = ({
  transactions,
}: {
  transactions: ITransaction[];
}) => {
  const transactionsByMonth = _(transactions)
    .sortBy((transaction) => transaction.date)
    .groupBy((transactions) => transactions.date.unix());

  const currentUser = useUserSession((session) => session.currentUser);

  return (
    <div className="container flex flex-col gap-5 p-5 pb-40">
      <Heading2>Transactions</Heading2>
      {transactionsByMonth
        .map((transactions, timestamp) => (
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
        ))
        .value()}
    </div>
  );
};
