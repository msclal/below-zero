import Mission from "@/components/Landing/Mission";
import Rewards from "@/components/Landing/Rewards";
import Services from "@/components/Landing/Services";
import Video from "@/components/Landing/Video";

import Carousel from "../components/Landing/Carousel";

const Landing = () => {
  return (
    <>
      <Carousel />
      <Services />
      <Rewards />
      <Video />
      <Mission />
    </>
  );
};

export default Landing;
