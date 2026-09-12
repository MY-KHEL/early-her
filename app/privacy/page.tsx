import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/landing/PlaceholderPage";

export const metadata: Metadata = {
  title: "Privacy Policy | EarlyHer",
};

export default function PrivacyPage() {
  return (
    <PlaceholderPage title="Privacy Policy">
      <p>
        A full privacy policy is coming soon. EarlyHer is an informational and
        care navigation platform. Research-form responses are used only to help
        us understand what support would be useful.
      </p>
    </PlaceholderPage>
  );
}
