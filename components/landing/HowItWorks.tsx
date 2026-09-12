import { SectionHead } from "./SectionHead";
import { Wrap } from "./Wrap";

const steps = [
  {
    num: "STEP 01",
    icon: "💬",
    title: "Tell us what's worrying you",
    body: "Share what you've noticed or what you'd like to understand about your breast health.",
  },
  {
    num: "STEP 02",
    icon: "✅",
    title: "Answer a few relevant questions",
    body: "EarlyHer uses AI to ask follow up questions based on what you share.",
  },
  {
    num: "STEP 03",
    icon: "🧭",
    title: "Understand your next step",
    body: "Receive clear, easy to understand guidance about what you may want to do next.",
  },
  {
    num: "STEP 04",
    icon: "📍",
    title: "Find appropriate care",
    body: "Explore relevant healthcare facilities and resources based on your location and needs.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-cream py-[72px] min-[641px]:py-28" id="how-it-works">
      <Wrap>
        <SectionHead eyebrow="HOW EARLYHER WORKS" eyebrowVariant="green" title="From concern to care.">
          EarlyHer helps you move through the next step without having to figure
          everything out alone.
        </SectionHead>
        <div className="grid grid-cols-1 gap-5 min-[641px]:grid-cols-2 min-[981px]:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-md border border-line bg-white px-[22px] py-7"
            >
              <div className="mb-4 text-xs font-bold tracking-[0.06em] text-pink-600">
                {step.num}
              </div>
              <div className="mb-[18px] flex size-11 items-center justify-center rounded-xl bg-green-tint text-green-700">
                {step.icon}
              </div>
              <h3 className="mb-[9px] text-[16.5px] font-bold">{step.title}</h3>
              <p className="text-[13.5px] leading-[1.6] text-ink-soft">
                {step.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-9 max-w-[580px] text-[12.5px] leading-[1.6] text-ink-faint">
          EarlyHer does not provide a medical diagnosis. Guidance is intended to
          support, not replace, professional healthcare.
        </p>
      </Wrap>
    </section>
  );
}
