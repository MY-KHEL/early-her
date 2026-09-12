"use client";

import { useActionState } from "react";
import { submitResearch, type ResearchState } from "@/app/actions/research";
import { Button } from "./Button";

const initialState: ResearchState = { ok: false };

const helpOptions = [
  "Knowing what symptoms to look out for",
  "Knowing whether I should see a doctor",
  "Finding an affordable healthcare facility",
  "Knowing where to get screening",
  "Understanding my family history/risk",
  "Knowing what to expect at the hospital",
  "Other",
];

const fieldClass =
  "rounded-[10px] border border-line bg-white px-[13px] py-[11px] text-[13.5px] text-ink focus:border-green-600 focus:shadow-[0_0_0_3px_var(--green-tint)] focus:outline-none";

export function ResearchForm() {
  const [state, action, pending] = useActionState(submitResearch, initialState);

  return (
    <div
      id="research-form"
      className="rounded-lg bg-white p-[34px] shadow-md"
    >
      {state.ok ? (
        <div className="px-2.5 py-10 text-center">
          <h4 className="mb-2.5 text-lg font-bold">Thank you for sharing.</h4>
          <p className="text-[13.5px] leading-[1.6] text-ink-soft">
            Your response helps shape how EarlyHer is built. We&apos;ll be in
            touch as things move forward.
          </p>
        </div>
      ) : (
        <form action={action}>
          {state.error ? (
            <p className="mb-4 text-[13.5px] font-semibold text-pink-600">
              {state.error}
            </p>
          ) : null}
          <div className="mb-3.5 grid grid-cols-1 gap-3.5 min-[641px]:grid-cols-2">
            <label className="flex flex-col gap-[7px]">
              <span className="text-[12.5px] font-semibold text-ink-soft">
                First name
              </span>
              <input
                name="firstName"
                type="text"
                placeholder="Ada"
                required
                className={fieldClass}
              />
            </label>
            <label className="flex flex-col gap-[7px]">
              <span className="text-[12.5px] font-semibold text-ink-soft">
                Email
              </span>
              <input
                name="email"
                type="email"
                placeholder="ada@email.com"
                required
                className={fieldClass}
              />
            </label>
          </div>
          <label className="mb-0 flex flex-col gap-[7px]">
            <span className="text-[12.5px] font-semibold text-ink-soft">
              Country
            </span>
            <select name="country" defaultValue="Nigeria" className={fieldClass}>
              <option>Nigeria</option>
              <option>Ghana</option>
              <option>Kenya</option>
              <option>South Africa</option>
              <option>Other</option>
            </select>
          </label>
          <p className="mt-[22px] mb-3.5 text-[13.5px] font-semibold">
            What would make it easier for you to take action when you&apos;re
            worried about your breast health?
          </p>
          <div className="mb-[26px] flex flex-wrap gap-[9px]">
            {helpOptions.map((option) => (
              <label key={option} className="relative">
                <input
                  type="checkbox"
                  name="help"
                  value={option}
                  className="peer absolute size-0 opacity-0"
                />
                <span className="inline-flex cursor-pointer items-center rounded-full border border-line px-[15px] py-[9px] text-[12.5px] font-semibold text-ink-soft transition-all duration-150 peer-checked:border-green-600 peer-checked:bg-green-600 peer-checked:text-white peer-focus-visible:shadow-[0_0_0_3px_var(--green-tint)]">
                  {option}
                </span>
              </label>
            ))}
          </div>
          <Button
            type="submit"
            disabled={pending}
            className="w-full disabled:opacity-70"
          >
            {pending ? "Sharing…" : "Share your experience"}
          </Button>
        </form>
      )}
    </div>
  );
}
