import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/landing/PlaceholderPage";

export const metadata: Metadata = {
  title: "Terms of Use | EarlyHer",
};

export default function TermsPage() {
  return (
    <PlaceholderPage title="Terms of Use">
      <p>
        Formal terms of use are coming soon. By using EarlyHer you agree that
        the site provides health information and care navigation support only.
        It does not diagnose breast cancer or replace a healthcare professional.
      </p>
    </PlaceholderPage>
  );
}
