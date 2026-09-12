import Link from "next/link";
import { SectionHead } from "./SectionHead";
import { Wrap } from "./Wrap";

const facilities = [
  {
    name: "Primary Health Centre",
    meta: "📍 2.1 km away",
    tag: "Breast health services",
  },
  {
    name: "Diagnostic Centre",
    meta: "📍 4.8 km away",
    tag: "Imaging available",
  },
  {
    name: "Specialist Hospital",
    meta: "📍 6.2 km away",
    tag: "Specialist care",
  },
];

export function FindCare() {
  return (
    <section className="bg-white py-[72px] min-[641px]:py-28" id="find-care">
      <Wrap>
        <SectionHead
          eyebrow="FROM INFORMATION TO ACTION"
          eyebrowVariant="green"
          title="Knowing what to do is only half the journey."
        >
          When you need professional care, finding the right place shouldn&apos;t
          become another obstacle.
        </SectionHead>
        <div className="grid items-stretch gap-7 min-[981px]:grid-cols-[1.1fr_0.9fr]">
          <div
            className="relative min-h-[420px] overflow-hidden rounded-lg shadow-md"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, rgba(26,122,74,0.14) 0%, rgba(26,122,74,0) 40%), radial-gradient(circle at 80% 70%, rgba(216,27,96,0.10) 0%, rgba(216,27,96,0) 45%), repeating-linear-gradient(0deg, rgba(23,36,29,0.05) 0 1px, transparent 1px 46px), repeating-linear-gradient(90deg, rgba(23,36,29,0.05) 0 1px, transparent 1px 46px), #EDE8DA",
            }}
          >
            <div className="absolute top-[18px] left-[18px] rounded-full bg-white px-3.5 py-[7px] text-[11px] font-bold text-ink-soft shadow-sm">
              📍 Lagos, Nigeria (prototype)
            </div>
            <div className="absolute top-[34%] left-[32%] flex size-[34px] rotate-[-45deg] items-center justify-center rounded-[50%_50%_50%_0] bg-green-600 shadow-sm">
              <span className="rotate-45 text-sm">🏥</span>
            </div>
            <div className="absolute top-[58%] left-[56%] flex size-[34px] rotate-[-45deg] items-center justify-center rounded-[50%_50%_50%_0] bg-pink-600 shadow-sm">
              <span className="rotate-45 text-sm">🩺</span>
            </div>
            <div className="absolute top-[22%] left-[68%] flex size-[34px] rotate-[-45deg] items-center justify-center rounded-[50%_50%_50%_0] bg-green-700 shadow-sm">
              <span className="rotate-45 text-sm">🔬</span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3.5">
            {facilities.map((facility) => (
              <div
                key={facility.name}
                className="flex items-center justify-between gap-3 rounded-[14px] border border-line bg-white px-5 py-[18px]"
              >
                <div>
                  <h4 className="mb-[5px] text-[14.5px] font-bold">
                    {facility.name}
                  </h4>
                  <div className="mb-[3px] text-xs text-ink-faint">
                    {facility.meta}
                  </div>
                  <div className="text-xs font-semibold text-green-700">
                    {facility.tag}
                  </div>
                </div>
                <Link
                  href="/#try"
                  className="shrink-0 text-[12.5px] font-bold whitespace-nowrap text-ink"
                >
                  View details →
                </Link>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-7 max-w-[580px] text-[12.5px] leading-[1.6] text-ink-faint">
          EarlyHer is working toward a trusted directory of relevant healthcare
          resources, starting with Nigeria.
        </p>
      </Wrap>
    </section>
  );
}
