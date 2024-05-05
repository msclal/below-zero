import Mission from "@/components/Landing/Mission";
import Rewards from "@/components/Landing/Rewards";
import Services from "@/components/Landing/Services";
import Video from "@/components/Landing/Video";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import IceCreamBanner from "/public/IceCreamBanner.webp";

const page = () => {
  return (
    <>
      <Marquee autoFill speed={30}>
        <div className="">
          <Image
            src={IceCreamBanner}
            alt="Landing"
            layout="responsive"
            className=""
          />
        </div>
      </Marquee>

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
