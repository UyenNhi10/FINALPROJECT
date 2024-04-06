import React from "react";
import dynamic from "next/dynamic";
const CategorySlider = dynamic(
  () => import("../Elements/Slider/CategorySlider"),
  {
    ssr: false,
  }
);
import CounterSection from "./CounterSection";
import HeroSectionTwo from "./HeroSectionTwo";
import AboutSection from "./AboutSection";

const HomeMain = () => {
  return (
    <main>
      <HeroSectionTwo />
      <AboutSection />
      <CategorySlider />
    </main>
  );
};

export default HomeMain;
