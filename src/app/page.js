import { MotionDiv } from "@/components/MotionDiv";
import Mission from "@/components/Landing/Mission";
import Rewards from "@/components/Landing/Rewards";
import Services from "@/components/Landing/Services";
import Video from "@/components/Landing/Video";
import Carousel from "@/components/Landing/Carousel";

export const metadata = {
  title: "Below Zero: Shaved Ice",
  description: "The best shaved ice in Upland!",
};

const LandingPage = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <Carousel />
      <Services />
      <Rewards />
      <Video />
      <Mission />
    </MotionDiv>
  );
};

export default LandingPage;
