import IceCream from "@/components/Menu/StepIceCream";
import Syrups from "@/components/Menu/StepSyrup";
import Sizes from "@/components/Menu/StepSizes";
import Toppings from "@/components/Menu/StepToppings";
import React from "react";
import MenuItem from "@/components/Menu/MenuItem";
import CandyLand from "/public/SnowConeCombos/CandyLand.webp";
import Head from "next/head";
// import CandyLand from "/public/SizeLarge.webp";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Below Zero: Shaved Ice | Menu</title>
      </Head>
      <div className="flex flex-col items-center min-h-screen gap-y-10 lg:gap-y-20 pt-36">
        <div className="flex justify-end flex-col max-sm:w-10/12 sm:w-10/12 lg:w-7/12 space-y-[3%]">
          <Sizes />
          <IceCream />
          <Syrups />
          <Toppings />
          <MenuItem
            name="Candy Land"
            picture={CandyLand}
            description="Blue Gum and Pink Gum Shaved Ice with Cotton Candy Ice Cream"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
