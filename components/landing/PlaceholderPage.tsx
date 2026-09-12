import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Wrap } from "./Wrap";

export function PlaceholderPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-cream py-20">
        <Wrap className="max-w-[720px]">
          <h1 className="mb-5 text-[34px] font-bold min-[641px]:text-[40px]">
            {title}
          </h1>
          <div className="space-y-4 text-base leading-[1.7] text-ink-soft">
            {children}
          </div>
        </Wrap>
      </main>
      <Footer />
    </>
  );
}
