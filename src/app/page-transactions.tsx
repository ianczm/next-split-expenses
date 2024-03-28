import { Card } from "@/design/components/card";
import { Heading2, Heading3, Paragraph } from "@/design/typography/typgoraphy";

const Transaction = () => {
  return (
    <Card className="flex-row justify-between">
      <div className="flex flex-col">
        <Paragraph className="font-bold">Resort Booking</Paragraph>
        <Paragraph className="text-glass-secondary">
          You paid RM 5,419.00
        </Paragraph>
      </div>
      <div className="text-danger flex flex-col text-right">
        <Paragraph>You lent</Paragraph>
        <Paragraph className="font-bold">RM 3,296.00</Paragraph>
      </div>
    </Card>
  );
};

export const PageTransactions = () => {
  return (
    <div className="flex flex-col gap-5 p-5 pb-40">
      <Heading2>Transactions</Heading2>
      <div className="flex flex-col gap-4">
        <Heading3>March 1, 2024</Heading3>
        <div className="flex flex-col gap-2">
          <Transaction />
          <Transaction />
          <Transaction />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Heading3>March 3, 2024</Heading3>
        <div className="flex flex-col gap-2">
          <Transaction />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Heading3>March 7, 2024</Heading3>
        <div className="flex flex-col gap-2">
          <Transaction />
          <Transaction />
        </div>
      </div>
    </div>
  );
};
