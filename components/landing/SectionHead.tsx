import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

export function SectionHead({
  eyebrow,
  eyebrowVariant = "pink",
  title,
  children,
  center = false,
}: {
  eyebrow?: string;
  eyebrowVariant?: "pink" | "green" | "on-dark";
  title: string;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-14 max-w-[600px] ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? <Eyebrow variant={eyebrowVariant}>{eyebrow}</Eyebrow> : null}
      <h2 className={`text-[27px] font-bold min-[641px]:text-[33px] ${eyebrow ? "mt-[18px]" : ""}`}>
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-[16.5px] leading-[1.65] text-ink-soft">
          {children}
        </p>
      ) : null}
    </div>
  );
}
