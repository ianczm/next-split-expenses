import { Paragraph } from "@/design/typography/typgoraphy";

export const PageButtons = () => {
  return (
    <div className="flex flex-row gap-2">
      <button className="border-accent-400 text-accent-400 w-full rounded-full border px-5 py-4">
        <Paragraph className="font-bold">Back</Paragraph>
      </button>
      <button className="bg-accent-400 w-full rounded-full px-5 py-4">
        <Paragraph className="font-bold">Add Transaction</Paragraph>
      </button>
    </div>
  );
};
