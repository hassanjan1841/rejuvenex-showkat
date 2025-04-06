import { Link } from "react-router";
import cardsImage from "@/assets/asset 41.webp";
import card1 from "@/assets/asset 9.webp";
import card2 from "@/assets/asset 10.webp";
import card3 from "@/assets/asset 11.webp";
import { CircleArrowRight } from "lucide-react";

export default function CategorySection() {
  return (
    <section className="py-16 bg-[#000a14]">
      <div className="container mx-auto px-4">
        <div className="text-center sm:mb-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            Explore our premium-quality compounds, designed to support
            cutting-edge research with precision, and reliability.
          </p>
        </div>

        <div className="flex  items-center justify-evenly rounded-lg shadow-lg relative h-full min-h-[300px] w-full   overflow-hidden">
          <div className="absolute   rounded-lg overflow-hidden">
            <img src={cardsImage} alt="" />
          </div>
          <CategoryCard
            title="Skin Health and Anti-aging"
            icon={card1}
            position="left"
            href="/categories/skin-health"
            backgroundImage={cardsImage}
            imageSize={150}
          />

          <CategoryCard
            title="Energy and vitality"
            icon={card2}
            position="center"
            href="/categories/energy"
          />

          <CategoryCard
            title="Hormonal and reproductive support"
            icon={card3}
            position="right"
            href="/categories/hormonal"
          />
        </div>
      </div>
      <div className="text-center w-full flex justify-center pt-20 ">
        <Link
          to="/explore"
          className="bg-[#fff] hover:bg-[#000] hover:text-white text-black text-center w-fit px-5 py-2 flex items-center rounded-full transition-all "
        >
          Explore Now
          <CircleArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
}

function CategoryCard({ title, icon, href, className, imageSize }) {
  // Define the shape based on position

  return (
    <Link
      href={href}
      className="group flex justify-center items-center max-w-[150px] sm:max-w-[200px]"
    >
      {/* Image with neon effect */}
      <div className="relative text-center flex items-center flex-col justify-center w-full">
        <img
          src={icon}
          alt={title}
          className="object-cover filter drop-shadow-[0_0_5px_rgba(74,158,255,0.7)] inline-block w-[40%] sm:w-[30%] md:w-[40%] lg:w-[60%]"
        />
        <h3 className="text-[10px] sm:text-md md:text-lg font-bold text-center mb-4 max-sm:w-[70%]">
          {title}
        </h3>

        <div className="w-48 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
      </div>
    </Link>
  );
}
