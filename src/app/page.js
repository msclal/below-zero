import Mission from "@/components/Landing/Mission";
import Rewards from "@/components/Landing/Rewards";
import Services from "@/components/Landing/Services";
import Video from "@/components/Landing/Video";
import React from "react";

const page = () => {
  return (
    <>
      <Services />
      <Rewards />
      <Video />
      <Mission />
    </>
  );
};

export default page;
