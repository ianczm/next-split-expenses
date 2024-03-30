import Image from "next/image";
import { PageButtons } from "./page-buttons";
import { PageInfo } from "./page-info";
import { PageTransactions } from "./page-transactions";

export default function Home() {
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
        <PageInfo />
        <PageTransactions />
      </div>
      <div className="fixed bottom-0 w-full bg-gradient-to-t from-dark-900 from-20% pb-8 pt-20">
        <PageButtons />
      </div>
    </main>
  );
}
