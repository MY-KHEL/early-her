import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderPage } from "@/components/landing/PlaceholderPage";

export const metadata: Metadata = {
  title: "Contact | EarlyHer",
};

export default function ContactPage() {
  return (
    <PlaceholderPage title="Contact Us">
      <p>
        Contact details are coming soon. If you would like to help us build
        EarlyHer, please{" "}
        <Link href="/#research-form" className="font-semibold text-green-700 underline">
          share your experience
        </Link>{" "}
        on the homepage.
      </p>
    </PlaceholderPage>
  );
}
