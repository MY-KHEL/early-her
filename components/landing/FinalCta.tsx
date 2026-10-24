import { ButtonLink } from "./Button";
import { Wrap } from "./Wrap";

export function FinalCta() {
  return (
    <section className="bg-navy py-[72px] text-white min-[641px]:py-28">
      <Wrap className="mx-auto max-w-[600px] text-center">
        <h2 className="mb-[18px] text-[28px] font-bold min-[641px]:text-4xl">
          Don&apos;t stay stuck wondering what to do next.
        </h2>
        <p className="mb-[34px] text-[16.5px] leading-[1.65] text-white/72">
          EarlyHer is being built to make breast health guidance and care
          navigation simpler, clearer and more accessible.
        </p>
        <div className="mb-[26px] flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="https://app.early-her.com">Try EarlyHer →</ButtonLink>
          <ButtonLink href="/#research-form" variant="ghost" onDark>
            Help us build it →
          </ButtonLink>
        </div>
        <p className="mx-auto max-w-[580px] text-center text-[12.5px] leading-[1.6] text-white/50">
          EarlyHer provides information and navigation support. It does not
          diagnose breast cancer.
        </p>
      </Wrap>
    </section>
  );
}
