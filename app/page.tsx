import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsStrip } from "@/components/TestimonialsStrip";
import { InfoSplit } from "@/components/InfoSplit";
import { LocationSection } from "@/components/LocationSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQSection } from "@/components/FAQSection";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PricingSection />
        <TestimonialsStrip />
        <InfoSplit />
        <LocationSection />
        <FeatureGrid />
        <ProcessSteps />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
