export function PhoneMock() {
  return (
    <div className="relative flex min-h-[560px] items-start justify-center max-[980px]:min-h-0 max-[980px]:pt-6">
      <div className="relative w-80 rotate-[1.2deg] rounded-[40px] bg-ink p-3.5 shadow-lg">
        <div className="flex h-[600px] flex-col overflow-hidden rounded-[28px] bg-white">
          <div className="flex h-7 shrink-0 items-center justify-center">
            <span className="h-1.5 w-20 rounded-full bg-[#1e1e1e]" />
          </div>
          <div className="flex shrink-0 items-center gap-2.5 border-b border-line px-[18px] pt-1.5 pb-3.5">
            <div className="size-[30px] shrink-0 rounded-full bg-pink-600" />
            <div>
              <strong className="block text-sm">EarlyHer</strong>
              <span className="text-[11.5px] font-semibold text-green-600">
                ● Guidance, not diagnosis
              </span>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2.5 overflow-hidden px-4 pt-4 pb-2">
            <p className="max-w-[84%] self-start rounded-2xl rounded-bl bg-cream-2 px-3.5 py-2.5 text-[12.5px] leading-normal text-ink">
              What brings you here today?
            </p>
            <p className="max-w-[84%] self-end rounded-2xl rounded-br bg-green-600 px-3.5 py-2.5 text-[12.5px] leading-normal text-white">
              I noticed a small lump in my left breast a few weeks ago.
            </p>
            <p className="max-w-[84%] self-start rounded-2xl rounded-bl bg-cream-2 px-3.5 py-2.5 text-[12.5px] leading-normal text-ink">
              Thanks for sharing that. I&apos;ll ask a few questions to better
              understand your concern and help you decide what to do next.
            </p>
            <p className="max-w-[84%] self-start rounded-2xl rounded-bl bg-cream-2 px-3.5 py-2.5 text-[12.5px] leading-normal text-ink">
              How long have you noticed it?
            </p>
            <div className="mt-0.5 flex flex-col gap-2">
              <div className="rounded-xl border border-line bg-white px-3 py-[9px] text-xs font-semibold text-ink">
                Less than a week
              </div>
              <div className="rounded-xl border border-green-600 bg-green-tint px-3 py-[9px] text-xs font-semibold text-green-700">
                1 – 4 weeks
              </div>
              <div className="rounded-xl border border-line bg-white px-3 py-[9px] text-xs font-semibold text-ink">
                More than a month
              </div>
            </div>
          </div>
          <div className="shrink-0 px-[18px] pt-3 pb-[18px]">
            <div className="h-1.5 overflow-hidden rounded-full bg-line">
              <span className="block h-full w-[38%] rounded-full bg-linear-to-r from-green-600 to-pink-600" />
            </div>
            <div className="mt-[7px] text-[10.5px] font-semibold tracking-[0.03em] text-ink-faint">
              QUESTION 2 OF 5
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[66px] left-[-24px] w-[198px] rounded-2xl border border-line bg-white px-4 py-3.5 shadow-md max-[640px]:hidden">
        <div className="mb-1.5 text-[10.5px] font-bold tracking-[0.04em] text-ink-faint uppercase">
          Your next step
        </div>
        <div className="flex items-center gap-2 text-[13px] leading-snug font-semibold">
          <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-pink-tint text-sm">
            🩺
          </span>
          Clinical assessment recommended
        </div>
      </div>
      <div className="absolute right-[-18px] bottom-[54px] w-[198px] rounded-2xl border border-line bg-white px-4 py-3.5 shadow-md max-[640px]:hidden">
        <div className="mb-1.5 text-[10.5px] font-bold tracking-[0.04em] text-ink-faint uppercase">
          Care near you
        </div>
        <div className="flex items-center gap-2 text-[13px] leading-snug font-semibold">
          <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-green-tint text-sm">
            📍
          </span>
          Find appropriate care →
        </div>
      </div>
    </div>
  );
}
