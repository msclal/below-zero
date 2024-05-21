import Gallery from "@/components/About/Gallery";
import Quote from "@/components/About/Quote";
import Stats from "@/components/About/Stats";
import Story from "@/components/About/Story";
import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="w-full max-lg:hidden">
        <div className="text-4xl font-medium text-white bg-primary p-6  lg:pl-[10%] xl:pl-[16%] 2xl:pl-[21%] mb-[14pt] rounded-r-2xl w-fit">
          ABOUT
        </div>
      </div>
      <div className="flex justify-center w-full lg:hidden mb-[3%]">
        <div className="w-11/12 text-lg font-medium rounded-sm text-center text-white bg-primary">
          ABOUT
        </div>
      </div>

      <div className="space-y-20 sm:mb-28 sm:space-y-28 ">
        <Quote />
        <Story />
        <Stats />
        <Gallery />
      </div>
    </div>
  );
};

export default About;
