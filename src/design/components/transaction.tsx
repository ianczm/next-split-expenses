import { toCurrencyString } from "@/lib/string";
import { cn } from "@/lib/utils";
import { Transaction as ITransaction, Split, User } from "@/models";
import _ from "lodash";
import { Paragraph } from "../typography/typgoraphy";
import { Card } from "./card";

function computeBorrowed(splits: Split[], currentUser: User) {
  return _(splits)
    .filter((split) => split.payee.id === currentUser.id)
    .sumBy((split) => split.amount);
}

function computeLent(splits: Split[], currentUser: User) {
  return _(splits)
    .filter((split) => split.payee.id !== currentUser.id)
    .sumBy((split) => split.amount);
}

export const Transaction = ({
  transaction,
  currentUser,
}: {
  transaction: ITransaction;
  currentUser: User;
}) => {
  const { title, payee, amount, splits } = transaction;

  const borrowed = computeBorrowed(splits, currentUser);
  const lent = computeLent(splits, currentUser);

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
          "text-glass-secondary": borrowed === 0,
        })}
      >
        {payee.id === currentUser.id ? (
          <>
            <Paragraph>You lent</Paragraph>
            <Paragraph className="font-bold">
              {toCurrencyString(lent)}
            </Paragraph>
          </>
        ) : (
          <>
            <Paragraph>You borrowed</Paragraph>
            <Paragraph className="font-bold">
              {toCurrencyString(borrowed)}
            </Paragraph>
          </>
        )}
      </div>
    </Card>
  );
};
