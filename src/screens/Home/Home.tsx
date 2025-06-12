import React from "react";
import { BlogSection } from "./sections/BlogSection";
import { ExpertiseSection } from "./sections/ExpertiseSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { PortfolioSection } from "./sections/PortfolioSection/PortfolioSection";
import { TestimonialSection } from "./sections/TestimonialSection";

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-dark">
      <NavigationSection />
      <HeroSection />
      <ExpertiseSection />
      <PortfolioSection />
      <MainContentSection />
      <BlogSection />
      <TestimonialSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
};
