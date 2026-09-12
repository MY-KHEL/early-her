import Link from "next/link";
import { SectionHead } from "./SectionHead";
import { Wrap } from "./Wrap";

const journeys = [
  {
    icon: "🔍",
    tone: "pink",
    title: "I noticed a change",
    body: "Get guidance on what to do when you've noticed something different.",
    href: "/#try",
    cta: "Explore →",
  },
  {
    icon: "🧬",
    tone: "green",
    title: "I'm worried about my family history",
    body: "Learn about factors that may affect your breast health risk and questions you can discuss with a healthcare professional.",
    href: "/#try",
    cta: "Learn more →",
  },
  {
    icon: "📚",
    tone: "pink",
    title: "I want to learn about my breast health",
    body: "Learn about breast health awareness, common changes and when to seek professional advice.",
    href: "/#resources",
    cta: "Learn →",
  },
  {
    icon: "📍",
    tone: "green",
    title: "I need help finding care",
    body: "Find relevant healthcare resources and facilities near you.",
    href: "/#find-care",
    cta: "Find care →",
  },
] as const;

export function Journeys() {
  return (
    <section className="bg-cream py-[72px] min-[641px]:py-28" id="for-women">
      <Wrap>
        <SectionHead eyebrow="WHERE ARE YOU STARTING?" title="Whatever brought you here, start there.">
          Breast health questions aren&apos;t one size fits all. EarlyHer is
          designed to meet you where you are.
        </SectionHead>
        <div className="grid grid-cols-1 gap-5 min-[641px]:grid-cols-2 min-[981px]:grid-cols-4">
          {journeys.map((item) => (
            <div
              key={item.title}
              className="rounded-md border border-line bg-cream px-[22px] py-7 transition-[box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className={`mb-5 flex size-[46px] items-center justify-center rounded-full ${
                  item.tone === "pink"
                    ? "bg-pink-tint text-pink-600"
                    : "bg-green-tint text-green-700"
                }`}
              >
                {item.icon}
              </div>
              <h3 className="mb-[9px] text-base leading-snug font-bold">
                {item.title}
              </h3>
              <p className="mb-[18px] text-[13.5px] leading-[1.6] text-ink-soft">
                {item.body}
              </p>
              <Link href={item.href} className="text-[13px] font-bold text-ink">
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
