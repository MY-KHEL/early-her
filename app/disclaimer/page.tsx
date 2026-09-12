import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/landing/PlaceholderPage";

export const metadata: Metadata = {
  title: "Medical Disclaimer | EarlyHer",
};

export default function DisclaimerPage() {
  return (
    <PlaceholderPage title="Medical Disclaimer">
      <p>
        EarlyHer is an informational and care navigation platform and is not a
        substitute for professional medical advice, diagnosis or treatment.
      </p>
      <p>
        EarlyHer provides health information and care navigation support. It
        does not diagnose breast cancer or replace a healthcare professional.
        If you have a health concern, seek appropriate professional medical
        advice.
      </p>
    </PlaceholderPage>
  );
}
