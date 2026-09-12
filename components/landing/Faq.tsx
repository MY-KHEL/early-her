import { SectionHead } from "./SectionHead";
import { Wrap } from "./Wrap";

const faqs = [
  {
    q: "Does EarlyHer diagnose breast cancer?",
    a: "No. EarlyHer is designed to provide breast health information and care navigation support. It does not diagnose breast cancer.",
  },
  {
    q: "What can I use EarlyHer for?",
    a: "You can use EarlyHer to learn about breast health, share a concern, answer relevant questions, understand possible next steps and find appropriate healthcare resources.",
  },
  {
    q: "Is EarlyHer a replacement for a doctor?",
    a: "No. EarlyHer does not replace a doctor, screening service or diagnostic test. If you have a health concern, you should seek appropriate professional medical advice.",
  },
  {
    q: "Who is EarlyHer for?",
    a: "EarlyHer is being designed with African women in mind, starting with the needs and healthcare realities of women in Nigeria.",
  },
  {
    q: "Can I use EarlyHer if I don't have symptoms?",
    a: "Yes. EarlyHer can also provide breast health education and help you understand questions you may want to discuss with a healthcare professional.",
  },
  {
    q: "Where is EarlyHer available?",
    a: "EarlyHer is currently being developed and tested. Our initial focus is Nigeria, with the goal of making the experience useful across African communities over time.",
  },
];

export function Faq() {
  return (
    <section className="bg-white py-[72px] min-[641px]:py-28">
      <Wrap>
        <SectionHead title="Questions you might have" center />
        <div className="mx-auto max-w-[760px]">
          {faqs.map((item, index) => (
            <details
              key={item.q}
              className="group border-b border-line"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between py-6 pr-1 text-base font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="ml-5 shrink-0 text-[22px] font-normal text-ink-faint transition-transform duration-200 group-open:rotate-45 group-open:text-pink-600">
                  +
                </span>
              </summary>
              <div className="max-w-[640px] px-1 pb-[26px] text-[14.5px] leading-[1.7] text-ink-soft">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
