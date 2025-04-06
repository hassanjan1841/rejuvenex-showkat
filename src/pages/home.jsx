import Hero from "@/components/hero";

import StandardSection from "@/components/standard-section";
import Spacer from "@/components/spacer";
import PeptidesSection from "@/components/peptides-section";
import CategorySection from "@/components/category-section";
import CalculatorSection from "@/components/calculator-section";
import TestimonialSlider from "@/components/testimonials-slider";
import { AffiliateProgram } from "@/components/affiliate-program";
import { NewsletterSubscription } from "@/components/newsletter-subscription";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-sm:hidden">
        <Spacer height="120px" />
      </div>
      <StandardSection />
      <PeptidesSection />
      <CategorySection />
      <CalculatorSection />
      <TestimonialSlider />
      <AffiliateProgram />
      <div className="max-sm:hidden">
        <Spacer height="120px" />
      </div>
      <NewsletterSubscription />
      <div className="max-sm:hidden">
        <Spacer height="120px" />
      </div>
    </>
  );
}
