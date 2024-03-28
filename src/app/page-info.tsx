import { Card } from "@/design/components/card";
import { Chip } from "@/design/components/chip";
import { Divider } from "@/design/components/divider";
import {
  Heading1,
  Heading3,
  Paragraph,
  TextUI,
} from "@/design/typography/typgoraphy";

const participants = ["Ava", "Brandon", "Charlotte", "Dylan"];

export const PageInfo = () => {
  return (
    <div className="flex flex-col gap-5 p-5 pt-40">
      <Heading3>March 10, 2024</Heading3>
      <Heading1>
        Redang,
        <br />
        Malaysia
      </Heading1>
      <div className={"flex gap-1"}>
        {participants.map((name) => (
          <Chip key={name.toLowerCase()}>
            <TextUI>{name}</TextUI>
          </Chip>
        ))}
      </div>
      <Card>
        <div className="flex flex-col">
          <Paragraph>
            You owe <b>Charlotte</b>{" "}
            <strong className={"text-danger font-bold"}>RM 145.15</strong>
          </Paragraph>
          <Paragraph>
            <b>Dylan</b> owes you{" "}
            <strong className={"text-success font-bold"}>RM 23.81</strong>
          </Paragraph>
        </div>
        <Divider className="bg-glass-tertiary/30" />
        <div className="flex flex-col">
          <Paragraph>
            Your net is{" "}
            <strong className={"text-danger font-bold"}>RM 121.34</strong>
          </Paragraph>
        </div>
      </Card>
    </div>
  );
};
