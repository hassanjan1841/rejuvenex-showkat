import React from "react";
import { Outlet } from "react-router";
import { Footer } from "./footer";
import Navbar from "./navbar";
import BackgroundEffects from "@/components/Home/background-effects";

import heroBackImg from "@/assets/asset-37.webp";
import heroBackImgMobile from "@/assets/mobile-hero.webp";
import { NewsletterSubscription } from "./Home/newsletter-subscription";
const Layout = () => {
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
        <Outlet />

        <NewsletterSubscription />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
