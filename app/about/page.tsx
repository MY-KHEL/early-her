import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderPage } from "@/components/landing/PlaceholderPage";

export const metadata: Metadata = {
  title: "About | EarlyHer",
  description:
    "EarlyHer is a breast health navigator for African women, starting in Nigeria.",
};

export default function AboutPage() {
  return (
    <PlaceholderPage title="About EarlyHer">
      <p>
        EarlyHer is being built to help African women understand a breast health
        concern, know what to do next, and reach the right care sooner.
      </p>
      <p>
        This page is still being written. In the meantime, you can{" "}
        <Link href="/#try" className="font-semibold text-green-700 underline">
          share your experience
        </Link>{" "}
        and help shape the product.
      </p>
    </PlaceholderPage>
  );
}
