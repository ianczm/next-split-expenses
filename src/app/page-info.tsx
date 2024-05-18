import { Card } from "@/design/components/card";
import { Chip } from "@/design/components/chip";
import { Divider } from "@/design/components/divider";
import {
  Heading1,
  Heading3,
  Paragraph,
  TextUI,
} from "@/design/typography/typgoraphy";
import { Group } from "@/models";

export const PageInfo = ({ group }: { group: Group }) => {
  const { date, title, users } = group;

  return (
    <div className="container flex flex-col gap-5 p-5 pt-40">
      <Heading3>{date.format("LL")}</Heading3>
      <Heading1 className="whitespace-pre-wrap">{title}</Heading1>
      <div className={"flex gap-1"}>
        {users.map((user) => (
          <Chip key={user.id} className="cursor-pointer">
            <TextUI>{user.name}</TextUI>
          </Chip>
        ))}
      </div>
      <Card className="cursor-pointer">
        <div className="flex flex-col">
          {/* Todo: Allow multiple people to owe/receive from */}
          <Paragraph>
            You owe <b>Charlotte</b>{" "}
            <strong className={"font-bold text-danger"}>RM 145.15</strong>
          </Paragraph>
          <Paragraph>
            <b>Dylan</b> owes you{" "}
            <strong className={"font-bold text-success"}>RM 23.81</strong>
          </Paragraph>
        </div>
        <Divider className="bg-glass-tertiary/30" />
        <div className="flex flex-col">
          <Paragraph>
            Your net is{" "}
            <strong className={"font-bold text-danger"}>RM 121.34</strong>
          </Paragraph>
        </div>
      </Card>
    </div>
  );
};
