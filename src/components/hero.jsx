import { ChevronRight } from "lucide-react";
import ProductDisplay from "@/components/product-display";
import { Link } from "react-router";

export default function Hero() {
  return (
    <main className="relative px-4 py-12 md:pt-32 md:py-20 flex flex-col md:flex-row items-start justify-between z-0 sm:w-[80%] mx-auto">
      <h1 className="lg:text-[60px] md:text-[40px] text-[35px] absolute max-sm:text-center  font-bold leading-tight ">
        <span className="relative z-20">Research-Grade Compounds for</span>
        <br />
        {/* <span className="text-2xl md:text-5xl">Scientific Advancements</span> */}
      </h1>
      <div className="relative  w-full mb-5 md:mb-0 z-10 max-sm:text-center mt-24">
        {/* <h1 className="lg:text-[60px] md:text-[40px] text-[35px]  font-bold leading-tight mb-4">
          <span className="relative z-20">Research-Grade Compounds for</span>
          <br />
          </h1> */}
        <span className="text-2xl md:text-5xl">Scientific Advancements</span>
        <p className="text-md mb-5 text-gray-300 max-w-xl max-sm:text-sm">
          Advance your scientific research with premium-quality compounds,
          specifically formulated for studies on anti-aging, weight management,
          muscle growth, tissue recovery, and more.
        </p>

        <div className="sm:hidden relative md:w-2/3 xl:pt-52  ">
          <ProductDisplay imageWidth={"md:w-full max-sm:w-96"} />
        </div>
        <Link
          href="/get-started"
          className="bg-[#ffc107] hover:bg-[#ffca2c] text-black font-medium px-8 py-3 rounded-full inline-flex items-center transition-all"
        >
          Get Started
          <ChevronRight className="ml-1 w-5 h-5" />
        </Link>
      </div>

      <div className="max-sm:hidden relative md:w-2/3 ">
        <ProductDisplay imageWidth={"w-full"} />
      </div>
    </main>
  );
}
