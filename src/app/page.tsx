import Image from "next/image";
import { PageButtons } from "./page-buttons";
import { PageInfo } from "./page-info";
import { PageTransactions } from "./page-transactions";

export default function Home() {
  return (
    <main>
      <div className="after:from-dark-900 after:to-dark-900/20 fixed left-0 top-0 -z-10 h-full w-full after:block after:h-full after:w-full after:bg-gradient-to-t">
        <Image
          src="/images/travel.jpg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          layout="fill"
          objectFit="cover"
          alt="Background image"
          className="-z-10"
        />
      </div>
      <div>
        <PageInfo />
        <PageTransactions />
      </div>
      <div className="from-dark-900 fixed bottom-0 w-full bg-gradient-to-t from-50% px-5 pb-8 pt-20">
        <PageButtons />
      </div>
    </main>
  );
}
