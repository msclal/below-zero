import { MotionDiv } from "@/components/MotionDiv";
import Gallery from "@/components/About/Gallery";
import Quote from "@/components/About/Quote";
import Stats from "@/components/About/Stats";
import Story from "@/components/About/Story";

export const metadata = {
  title: "About | Below Zero: Shaved Ice",
  description: "Get to know more about Below Zero's history.",
};

const AboutPage = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-lg:hidden">
        <div className="text-4xl font-medium text-white bg-primary p-6  lg:pl-[10%] xl:pl-[16%] 2xl:pl-[21%] mb-[14pt] rounded-r-2xl w-fit">
          ABOUT
        </div>
      </div>
      <div className="flex justify-center w-full lg:hidden mb-[3%]">
        <div className="w-11/12 text-lg font-medium text-center text-white rounded-sm bg-primary">
          ABOUT
        </div>
      </div>
      <div className="space-y-10 sm:mb-28 sm:space-y-20">
        <Quote />
        <Story />
        <Stats />
        <Gallery />
      </div>
    </MotionDiv>
  );
};

export default AboutPage;
