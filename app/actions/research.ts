"use server";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

export type ResearchState = {
  ok: boolean;
  error?: string;
};

const COUNTRIES = [
  "Nigeria",
  "Ghana",
  "Kenya",
  "South Africa",
  "Other",
] as const;

export async function submitResearch(
  _prev: ResearchState,
  formData: FormData,
): Promise<ResearchState> {
  const firstName = String(formData.get("firstName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();
  const help = formData
    .getAll("help")
    .map((value) => String(value).trim())
    .filter(Boolean);

  if (!firstName || !email) {
    return { ok: false, error: "Please enter your first name and email." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (!COUNTRIES.includes(country as (typeof COUNTRIES)[number])) {
    return { ok: false, error: "Please choose a country." };
  }

  const payload = {
    firstName,
    email,
    country,
    help,
    submittedAt: new Date().toISOString(),
  };

  console.log("[research]", payload);

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "research-submissions.json"),
      `${JSON.stringify(payload)}\n`,
      "utf8",
    );
  } catch (error) {
    console.error("[research] failed to persist submission", error);
  }

  return { ok: true };
}
