import { Zap, Target, HeadphonesIcon, ShieldCheck } from "lucide-react";

export default function StandardSection() {
  return (
    <section className="py-16 ">
      <div className=" ">
        <div className="text-center mb-28 sm:w-[80%] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Setting the Standard in Research Quality
          </h2>
          <p className="max-w-4xl mx-auto text-gray-300">
            At Rejuvenexx, we are committed to providing our customers with
            high-quality compounds and research products that are pure, potent,
            stable, and safe. Each product undergoes rigorous analytical testing
            to ensure its authenticity and reliability.
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#9370DB] to-[#8A2BE2] p-8 md:p-12 md:py-28">
          <div className="flex flex-wrap justify-evenly gap-6">
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Fast Shipping"
              description="Orders placed before 2 PM (M-F) are shipped the same day."
            />

            <FeatureCard
              icon={<Target className="w-6 h-6" />}
              title="Third-Party Tested"
              description="Our lab verifies compound sequential signatures for guaranteed quality."
            />

            <FeatureCard
              icon={<HeadphonesIcon className="w-6 h-6" />}
              title="Dedicated Customer Support"
              description="Contact us via call or text for quick assistance."
            />

            <FeatureCard
              icon={<ShieldCheck className="w-6 h-6" />}
              title="100% Secure Payment"
              description="Your transactions are fully secured for a worry-free purchase."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="h-[200px] w-[350px] flex items-center bg-[#3a2a5a] rounded-sm p-6 shadow-lg">
      <div className="flex items-start gap-2">
        <div className="flex items-center">{icon}</div>
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-semibold ">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
