import { SectionHead } from "./SectionHead";
import { Wrap } from "./Wrap";

const features = [
  {
    icon: "🗺️",
    title: "Local care pathways",
    body: "Help women understand where to go next within their local healthcare system.",
  },
  {
    icon: "💬",
    title: "Accessible information",
    body: "Simple, clear explanations instead of complicated medical language.",
  },
  {
    icon: "🌍",
    title: "Local context",
    body: "Designed with African healthcare realities, communities and resources in mind.",
  },
  {
    icon: "🌱",
    title: "Built to grow",
    body: "Starting with a web experience and evolving with the women and healthcare professionals who use it.",
  },
];

export function Resources() {
  return (
    <section className="bg-cream py-[72px] min-[641px]:py-28" id="resources">
      <Wrap>
        <SectionHead eyebrow="BUILT FOR AFRICAN WOMEN" title="Designed for the realities of African women.">
          Healthcare doesn&apos;t look the same everywhere. EarlyHer is being
          designed around the realities of accessing breast health information
          and care in African communities.
        </SectionHead>
        <div className="grid grid-cols-1 gap-5 min-[641px]:grid-cols-2 min-[981px]:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="pt-[26px] pr-1">
              <div className="mb-[18px] flex size-[42px] items-center justify-center rounded-[11px] border border-line bg-white text-green-700">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-[15.5px] font-bold">{feature.title}</h3>
              <p className="text-[13.5px] leading-[1.6] text-ink-soft">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
