import { Paragraph } from "@/design/typography/typgoraphy";
import { Button } from "@/shadcn/ui/button";

export const PageButtons = () => {
  return (
    <div className="container flex flex-row gap-2 px-5">
      <Button variant={"secondary"} size={"lgRounded"} className={"w-full"}>
        <Paragraph className="font-bold">Back</Paragraph>
      </Button>
      <Button variant={"default"} size={"lgRounded"} className={"w-full"}>
        <Paragraph className="font-bold">Add Transaction</Paragraph>
      </Button>
    </div>
  );
};
