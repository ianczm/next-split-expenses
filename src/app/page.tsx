"use client";

import { useUserSession } from "@/frontend/store/user-session";
import { computeSimplifiedAccounts } from "@/lib/accounts";
import { Group, SimplifiedAccounts, User } from "@/models";
import { sabahMocks } from "@/models/mocks/sabah";
import _ from "lodash";
import Image from "next/image";
import { PageButtons } from "./page-buttons";
import { PageInfo } from "./page-info";
import { PageTransactions } from "./page-transactions";

function groupSimplifiedAccounts(
  banker: User,
  group: Group,
): SimplifiedAccounts {
  const partitions = _(computeSimplifiedAccounts(group, banker))
    .partition((account) => account.to.id === banker.id)
    .value();
  return {
    receivables: partitions[0],
    payables: partitions[1],
  };
}

export default function Home() {
  const currentUser = sabahMocks.users["ian"];
  const group = sabahMocks.group;

  const setCurrentUser = useUserSession((session) => session.setCurrentUser);
  setCurrentUser(currentUser);

  const accounts = groupSimplifiedAccounts(currentUser, group);

  return (
    <main>
      <div className="fixed left-0 top-0 -z-10 h-full w-full after:block after:h-full after:w-full after:bg-gradient-to-t after:from-dark-900 after:to-dark-900/20">
        <Image
          src="/images/travel.jpg"
          width={0}
          height={0}
          sizes="100vw"
          alt="Background image"
          className="absolute -z-10 h-full w-full object-cover"
        />
      </div>
      <div>
        <PageInfo group={group} accounts={accounts} />
        <PageTransactions transactions={group.transactions} />
      </div>
      <div className="fixed bottom-0 w-full bg-gradient-to-t from-dark-900 from-40% pb-8 pt-20">
        <PageButtons />
      </div>
    </main>
  );
}
