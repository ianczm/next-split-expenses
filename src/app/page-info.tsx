import { Card } from "@/design/components/card";
import { Chip } from "@/design/components/chip";
import { Divider } from "@/design/components/divider";
import {
  Heading1,
  Heading3,
  Paragraph,
  TextUI,
} from "@/design/typography/typgoraphy";
import { toCurrencyString } from "@/lib/string";
import { cn } from "@/lib/utils";
import { Group, SimplifiedAccounts } from "@/models";
import { ava, brandon, charlotte, dylan } from "@/models/mocks";
import { sumBy } from "lodash";

export const PageInfo = ({ group }: { group: Group }) => {
  const { date, title, users } = group;

  const simplifiedAccounts: SimplifiedAccounts = {
    receivables: [
      {
        to: ava,
        from: charlotte,
        amount: 10,
      },
      {
        to: ava,
        from: brandon,
        amount: 10,
      },
    ],
    payables: [
      {
        to: dylan,
        from: ava,
        amount: 5,
      },
    ],
  };

  const receivables = sumBy(
    simplifiedAccounts.receivables,
    (transaction) => transaction.amount,
  );
  const payables = sumBy(
    simplifiedAccounts.payables,
    (transaction) => transaction.amount,
  );
  const net = receivables - payables;

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
          <div>
            <Paragraph>You owe to</Paragraph>
            <div className="pl-4">
              {simplifiedAccounts.payables.map((transaction) => (
                <Paragraph key={transaction.to.id}>
                  <b>{transaction.to.name}</b>{" "}
                  <strong className={"font-bold text-danger"}>
                    {toCurrencyString(transaction.amount)}
                  </strong>
                </Paragraph>
              ))}
            </div>
          </div>
        </div>
        <Divider className="bg-glass-tertiary/30" />
        <div className="flex flex-col">
          <div>
            <Paragraph>You receive from</Paragraph>
            <div className="pl-4">
              {simplifiedAccounts.receivables.map((transaction) => (
                <Paragraph key={transaction.from.id}>
                  <b>{transaction.from.name}</b>{" "}
                  <strong className={"font-bold text-success"}>
                    {toCurrencyString(transaction.amount)}
                  </strong>
                </Paragraph>
              ))}
            </div>
          </div>
        </div>
        <Divider className="bg-glass-tertiary/30" />
        <div className="flex flex-col">
          <Paragraph>
            Your net is{" "}
            <strong
              className={cn("font-bold text-danger", {
                "text-success": net > 0,
              })}
            >
              {toCurrencyString(net)}
            </strong>
          </Paragraph>
        </div>
      </Card>
    </div>
  );
};
