import { Card } from "@/design/components/card";
import { Heading2, Heading3, Paragraph } from "@/design/typography/typgoraphy";
import { cn } from "@/lib/utils";
import { Transaction as ITransaction, User } from "@/models";
import { ava, resortBooking } from "@/models/mocks";

const Transaction = ({
  transaction,
  currentUser,
}: {
  transaction: ITransaction;
  currentUser: User;
}) => {
  const { title, payee, amount, splits } = transaction;

  return (
    <Card className="cursor-pointer flex-row justify-between">
      <div className="flex flex-col">
        <Paragraph className="font-bold">{title}</Paragraph>
        <Paragraph className="text-glass-secondary">
          {currentUser.id === payee.id ? "You" : payee.name} paid {amount}
        </Paragraph>
      </div>
      <div
        className={cn("flex flex-col text-right text-success", {
          "text-danger": payee.id === currentUser.id,
        })}
      >
        {payee.id === currentUser.id ? (
          <>
            <Paragraph>You lent</Paragraph>
            <Paragraph className="font-bold">
              {amount -
                splits.reduce(
                  (prev, current) =>
                    current.payee.id === currentUser.id ? 0 : current.amount,
                  0,
                )}
            </Paragraph>
          </>
        ) : (
          <>
            <Paragraph>You borrowed</Paragraph>
            <Paragraph className="font-bold">
              {amount -
                splits.find((split) => split.payee.id === currentUser.id)
                  ?.amount!}
            </Paragraph>
          </>
        )}
      </div>
    </Card>
  );
};

export const PageTransactions = () => {
  return (
    <div className="container flex flex-col gap-5 p-5 pb-40">
      <Heading2>Transactions</Heading2>
      <div className="flex flex-col gap-4">
        <Heading3>March 1, 2024</Heading3>
        <div className="flex flex-col gap-2">
          <Transaction transaction={resortBooking} currentUser={ava} />
          <Transaction transaction={resortBooking} currentUser={ava} />
          <Transaction transaction={resortBooking} currentUser={ava} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Heading3>March 3, 2024</Heading3>
        <div className="flex flex-col gap-2">
          <Transaction transaction={resortBooking} currentUser={ava} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Heading3>March 7, 2024</Heading3>
        <div className="flex flex-col gap-2">
          <Transaction transaction={resortBooking} currentUser={ava} />
          <Transaction transaction={resortBooking} currentUser={ava} />
        </div>
      </div>
    </div>
  );
};
