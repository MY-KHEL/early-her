import Link from "next/link";
import { ButtonLink } from "./Button";
import { Eyebrow } from "./Eyebrow";
import { ResearchForm } from "./ResearchForm";
import { Wrap } from "./Wrap";

export function Research() {
  return (
    <section className="bg-pink-tint-2 py-[72px] min-[641px]:py-28" id="try">
      <Wrap className="grid items-start gap-14 min-[981px]:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>HELP US BUILD IT</Eyebrow>
          <h2 className="mt-[18px] mb-[18px] text-[27px] font-bold min-[641px]:text-[32px]">
            Help us build EarlyHer.
          </h2>
          <p className="mb-3.5 max-w-[440px] text-base leading-[1.7] text-ink-soft">
            We&apos;re building EarlyHer with women, not just for women.
          </p>
          <p className="mb-3.5 max-w-[440px] text-base leading-[1.7] text-ink-soft">
            We&apos;re currently learning how women experience breast health
            concerns, what makes it difficult to seek care, and what kind of
            support would actually be useful.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-[18px]">
            <ButtonLink href="/#research-form">
              Share your experience →
            </ButtonLink>
            <Link
              href="/#research-form"
              className="border-b border-ink pb-0.5 text-sm font-semibold text-ink"
            >
              Join EarlyHer updates
            </Link>
          </div>
        </div>
        <ResearchForm />
      </Wrap>
    </section>
  );
}
