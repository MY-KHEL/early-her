import Link from "next/link";
import { ButtonLink } from "./Button";
import { Eyebrow } from "./Eyebrow";
import { PhoneMock } from "./PhoneMock";
import { Wrap } from "./Wrap";

export function Hero() {
  return (
    <header className="relative overflow-hidden pt-[76px] pb-16 before:pointer-events-none before:absolute before:-top-[180px] before:-right-[220px] before:size-[640px] before:rounded-full before:bg-[radial-gradient(circle_at_30%_30%,var(--pink-tint)_0%,rgba(251,231,238,0)_68%)] before:content-['']">
      <Wrap className="relative grid items-center gap-14 min-[981px]:grid-cols-2 min-[981px]:gap-14">
        <div>
          <Eyebrow>BUILT FOR AFRICAN WOMEN</Eyebrow>
          <h1 className="mt-[22px] mb-5 text-[34px] font-bold min-[981px]:text-[44px]">
            Worried about a change in your breast?{" "}
            <em className="not-italic text-green-700">Know what to do next.</em>
          </h1>
          <p className="mb-8 max-w-[480px] text-[17.5px] leading-[1.6] text-ink-soft">
            Breast changes caught late often mean lower recovery rates and
            higher mortality. EarlyHer is a breast health navigator that helps
            you understand a concern, know what to do next, and reach the right
            care sooner.
          </p>
          <div className="mb-[26px] flex flex-wrap items-center gap-4">
            <ButtonLink href="https://app.early-her.com">Try EarlyHer →</ButtonLink>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center gap-1.5 border-b border-ink pb-0.5 text-[14.5px] font-semibold text-ink"
            >
              See how it works
            </Link>
          </div>
          <p className="max-w-[440px] border-l-2 border-line pl-3.5 text-[12.5px] leading-[1.6] text-ink-faint">
            EarlyHer provides health information and care navigation support. It
            does not diagnose breast cancer or replace a healthcare
            professional.
          </p>
        </div>
        <PhoneMock />
      </Wrap>
    </header>
  );
}
