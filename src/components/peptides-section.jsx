import { Weight, Scale, BarChart2, Flower2, Clock, Brain } from "lucide-react";
import { Link } from "react-router";
import weightImage from "@/assets/asset 2.webp";
import scaleImge from "@/assets/asset 4.webp";
import barChartImage from "@/assets/asset 5.webp";
import flowerImage from "@/assets/asset 6.webp";
import clockImage from "@/assets/asset 7.webp";
import brainImage from "@/assets/asset 8.webp";

export default function PeptidesSection() {
  return (
    <section className="py-16 bg-[#000a14]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Peptides for Scientific Exploration
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PeptideCard
            name="Tesamorelin"
            icon={
              <img src={weightImage} alt="Tesamorelin" className="w-28 h-28" />
            }
            gradient={true}
            href="/peptides/tesamorelin"
          />

          <PeptideCard
            name="GLP-1"
            icon={<img src={scaleImge} alt="glp-1" className="w-28 h-28" />}
            href="/peptides/glp-1"
            gradient={true}
          />

          <PeptideCard
            name="AOD-9604"
            icon={<img src={barChartImage} alt="glp-1" className="w-28 h-28" />}
            href="/peptides/aod-9604"
            gradient={true}
          />

          <PeptideCard
            name="GLP-2"
            icon={<img src={flowerImage} alt="glp-1" className="w-28 h-28" />}
            href="/peptides/glp-2"
            gradient={true}
          />

          <PeptideCard
            name="Ipamorelin"
            icon={<img src={clockImage} alt="glp-1" className="w-28 h-28" />}
            href="/peptides/ipamorelin"
            gradient={true}
          />

          <PeptideCard
            name="Melanotan-1 (MT-1)"
            icon={<img src={brainImage} alt="glp-1" className="w-28 h-28" />}
            href="/peptides/melanotan-1"
            gradient={true}
          />
        </div>
      </div>
    </section>
  );
}
function PeptideCard({ name, icon, gradient = false, href }) {
  return (
    <Link href={href} className="block group">
      <div className="rounded-2xl p-8 flex flex-col justify-between  bg-white text-[#000a14] group-hover:bg-gradient-to-br group-hover:from-[#6a11cb] group-hover:to-[#2575fc] group-hover:text-white hover:shadow-xl hover:shadow-purple-500/20 transform hover:scale-[1.02]">
        <div className="flex justify-between items-start">
          <div
            className={` group-hover:scale-110 group-hover:brightness-[0] group-hover:invert-[1]`}
          >
            {icon}
          </div>
          <div className="w-6 h-6  group-hover:translate-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${gradient ? "text-current" : "text-black"}`}
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-4 transition-all duration-300 group-hover:translate-x-1">
          {name}
        </h3>
      </div>
    </Link>
  );
}
