import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { FindCare } from "@/components/landing/FindCare";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Journeys } from "@/components/landing/Journeys";
import { Nav } from "@/components/landing/Nav";
import { Research } from "@/components/landing/Research";
import { Resources } from "@/components/landing/Resources";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Journeys />
        <FindCare />
        <Resources />
        <Research />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
