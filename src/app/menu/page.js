import IceCream from "@/components/Menu/StepIceCream";
import Syrups from "@/components/Menu/StepSyrup";
import Sizes from "@/components/Menu/StepSizes";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center min-h-screen gap-y-10 lg:gap-y-20 pt-36">
      <div className="flex justify-end flex-col max-sm:w-10/12 sm:w-10/12 lg:w-7/12 space-y-[3%]">
        <Sizes />
        <IceCream />
        <Syrups />
      </div>
    </div>
  );
};

export default Contact;
