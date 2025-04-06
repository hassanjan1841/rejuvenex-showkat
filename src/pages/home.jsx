import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import BackgroundEffects from "@/components/background-effects";
import heroBackImg from "@/assets/asset-37.webp";
import heroBackImgMobile from "@/assets/mobile-hero.webp";
import StandardSection from "@/components/standard-section";
import Spacer from "@/components/spacer";
import PeptidesSection from "@/components/peptides-section";
import CategorySection from "@/components/category-section";
import CalculatorSection from "@/components/calculator-section";
import TestimonialSlider from "@/components/testimonials-slider";
import { AffiliateProgram } from "@/components/affiliate-program";
import { NewsletterSubscription } from "@/components/newsletter-subscription";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <BackgroundEffects />

      <div className="max-sm:hidden absolute z-0 right-0 flex justify-end ">
        <img
          src={heroBackImg}
          alt="hero background image "
          className="inline-block"
        />
      </div>

      <div className="sm:hidden absolute z-0 right-0 flex justify-end ">
        <img
          src={heroBackImgMobile}
          alt="hero background image "
          className="bg-center bg-contain bg-no-repeat w-full h-full"
        />
      </div>
      <div className="relative z-10  ">
        <Navbar />
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
        <Footer />
      </div>
    </div>
  );
}
