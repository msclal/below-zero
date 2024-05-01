import Mission from "@/components/Landing/Mission";
import Rewards from "@/components/Landing/Rewards";
import Services from "@/components/Landing/Services";
import Video from "@/components/Landing/Video";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>Below Zero: Shaved Ice</title>
      </Head>
      <Services />
      <Rewards />
      <Video />
      <Mission />
    </>
  );
};

export default page;
