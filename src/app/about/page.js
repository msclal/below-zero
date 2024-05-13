import Gallery from "@/components/About/Gallery";
import Quote from "@/components/About/Quote";
import Stats from "@/components/About/Stats";
import Story from "@/components/About/Story";
import React from "react";

export const metadata = {
  title: "About | Below Zero: Shaved Ice",
  description: "Get to know more about Below Zero's history.",
};

const AboutPage = () => {
  return (
    <div className="pt-20 mb-20 space-y-20 sm:mb-28 sm:space-y-28">
      <Quote />
      <Story />
      <Stats />
      <Gallery />
    </div>
  );
};

export default AboutPage;
