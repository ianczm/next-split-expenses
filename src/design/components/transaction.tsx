import { toCurrencyString } from "@/lib/string";
import { cn } from "@/lib/utils";
import { Transaction as ITransaction, Split, User } from "@/models";
import _ from "lodash";
import { Paragraph } from "../typography/typgoraphy";
import { Card } from "./card";

function computeBorrowed(payee: User, splits: Split[], currentUser: User) {
  if (payee.id === currentUser.id) {
    return 0;
  } else {
    return _(splits)
      .filter((split) => split.payee.id === currentUser.id)
      .sumBy((split) => split.amount);
  }
}

function computeLent(payee: User, splits: Split[], currentUser: User) {
  if (payee.id !== currentUser.id) {
    return 0;
  } else {
    return _(splits)
      .filter((split) => split.payee.id !== currentUser.id)
      .sumBy((split) => split.amount);
  }
}

export const Transaction = ({
  transaction,
  currentUser,
}: {
  transaction: ITransaction;
  currentUser: User;
}) => {
  const { title, payee, amount, splits } = transaction;

  const borrowed = computeBorrowed(payee, splits, currentUser);
  const lent = computeLent(payee, splits, currentUser);

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
        className={cn("flex flex-col text-right text-glass-secondary", {
          "text-success": lent > 0,
          "text-danger": borrowed > 0,
        })}
      >
        {lent > 0 ? (
          <>
            <Paragraph>You lent</Paragraph>
            <Paragraph className="font-bold">
              {toCurrencyString(lent)}
            </Paragraph>
          </>
        ) : borrowed > 0 ? (
          <>
            <Paragraph>You borrowed</Paragraph>
            <Paragraph className="font-bold">
              {toCurrencyString(borrowed)}
            </Paragraph>
          </>
        ) : (
          <>
            <Paragraph>You were not involved</Paragraph>
            <Paragraph className="font-bold">0.00</Paragraph>
          </>
        )}
      </div>
    </Card>
  );
};
