import Hero from "@/components/Home/hero";

import StandardSection from "@/components/Home/standard-section";
import Spacer from "@/components/spacer";
import PeptidesSection from "@/components/Home/peptides-section";
import CategorySection from "@/components/Home/category-section";
import CalculatorSection from "@/components/Home/calculator-section";
import TestimonialSlider from "@/components/Home/testimonials-slider";
import { AffiliateProgram } from "@/components/Home/affiliate-program";
import { NewsletterSubscription } from "@/components/Home/newsletter-subscription";
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
