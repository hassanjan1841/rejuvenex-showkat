import { Link } from "react-router";
import {
  Check,
  Truck,
  Microscope,
  Handshake,
  HeadphonesIcon,
} from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen ">
      <div className="relative bg-[#FFFFFF0D] border-t border-l border-r border-gray-700 shadow shadow-gray-500 backdrop-blur-sm rounded-t-xl px-6 pt-6 md:py-10 mt-20 w-[80%] mx-auto">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/molecular-bg.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            About Rejuvenexx
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-200">
            Why choose Rejuvenexx as your premium research compound supplier?
          </p>
        </div>
      </div>
      {/* About Us Section */}
      <section className="pb-16 ">
        <div className="container mx-auto px-4 w-[80%] relative bg-[#FFFFFF0D] border-b border-l border-r border-gray-700 shadow shadow-gray-500 backdrop-blur-sm rounded-b-xl p-6 md:py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Trusted Source for Research Compounds
          </h2>

          <p className="text-lg mb-8">
            Welcome to <span className="font-semibold">Rejuvenexx</span>, where
            cutting-edge research meets uncompromising quality. We offer{" "}
            <span className="font-semibold">
              high-quality research compounds
            </span>{" "}
            and{" "}
            <span className="font-semibold">advanced scientific solutions</span>{" "}
            designed exclusively for{" "}
            <span className="font-semibold">
              laboratory and educational purposes
            </span>
            .
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Commitment to Quality & Compliance
          </h3>

          <p className="text-lg mb-8">
            At <span className="font-semibold">Rejuvenexx</span>, we prioritize{" "}
            <span className="font-semibold">
              purity, accuracy, and compliance
            </span>
            . Every product undergoes{" "}
            <span className="font-semibold">rigorous third-party testing</span>{" "}
            to ensure{" "}
            <span className="font-semibold">
              consistency and high standards
            </span>
            . Our compounds are strictly intended for{" "}
            <span className="font-semibold">research use only</span> and are{" "}
            <span className="font-semibold">
              not for human consumption, medical, or therapeutic applications
            </span>
            .
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Supporting Scientific Advancements
          </h3>

          <p className="text-lg mb-4">We aim to provide researchers with:</p>

          <ul className="mb-8 space-y-2">
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-2 shrink-0 mt-0.5" />
              <span className="text-lg">Comprehensive product data</span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-2 shrink-0 mt-0.5" />
              <span className="text-lg">Detailed research information</span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-2 shrink-0 mt-0.5" />
              <span className="text-lg">Exceptional customer support</span>
            </li>
          </ul>

          <p className="text-lg mb-8">
            Whether you're conducting{" "}
            <span className="font-semibold">
              in vitro studies, analytical research, or scientific exploration
            </span>
            , our carefully curated catalog is designed to support your work.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            The Peptide Calculator – Precision at Your Fingertips
          </h3>

          <p className="text-lg mb-8">
            To simplify your research, we offer{" "}
            <span className="font-semibold">The Peptide Calculator</span>—a
            reliable tool for accurately determining compound dosages. With just
            a few inputs, you can calculate precise amounts for optimal research
            results.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Advance Your Research with Confidence
          </h3>

          <p className="text-lg mb-4">
            Researchers and professionals trust{" "}
            <span className="font-semibold">Rejuvenexx</span> for:
          </p>

          <ul className="mb-8 space-y-2">
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-2 shrink-0 mt-0.5" />
              <span className="text-lg">Premium research-grade compounds</span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-2 shrink-0 mt-0.5" />
              <span className="text-lg">Comprehensive product insights</span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-2 shrink-0 mt-0.5" />
              <span className="text-lg">Unmatched support and reliability</span>
            </li>
          </ul>

          <p className="text-lg mb-8">
            Explore our{" "}
            <span className="font-semibold">diverse collection</span> today and
            take your research to the next level!
          </p>
        </div>
      </section>
      {/* Our Approach Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            OUR APPROACH
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="rounded-lg overflow-hidden bg-gradient-to-b hover:bg-gradient-to-t hover:cursor-pointer  from-[#9d52c0]  to-[#1392D0]">
              <div className="p-8">
                <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Efficient and Reliable Shipping
                </h3>
                <p className="text-center">
                  We pride ourselves on offering quick and reliable shipping,
                  ensuring you receive your products in a timely manner with
                  excellent customer service.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg overflow-hidden bg-gradient-to-b hover:bg-gradient-to-t hover:cursor-pointer  from-[#9d52c0]  to-[#1392D0]">
              <div className="p-8">
                <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Microscope className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Rigorous Lab Testing for Quality Assurance
                </h3>
                <p className="text-center">
                  Each batch undergoes stringent third-party lab testing,
                  guaranteeing a minimum of 99% purity for unmatched quality.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg overflow-hidden bg-gradient-to-b hover:bg-gradient-to-t hover:cursor-pointer  from-[#9d52c0]  to-[#1392D0]">
              <div className="p-8">
                <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Guaranteed Authenticity
                </h3>
                <p className="text-center">
                  Our products are carefully researched and continuously
                  improved, with a strong emphasis on efficacy and authenticity
                  to ensure the best results.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-lg overflow-hidden bg-gradient-to-b hover:bg-gradient-to-t hover:cursor-pointer  from-[#9d52c0]  to-[#1392D0]">
              <div className="p-8">
                <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HeadphonesIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  24/7 Customer Support
                </h3>
                <p className="text-center">
                  Our dedicated chat support is available around the clock,
                  providing you with assistance whenever you need it, ensuring a
                  seamless experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
