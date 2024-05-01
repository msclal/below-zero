import React from "react";
import Image from "next/image";
import Banner from "@/public/menu/shaved_ice_banner.png";
import Step1 from "@/public/menu/step1.png";

const ShavedIce = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative w-full h-full mb-10">
        <Image
          src={Banner}
          alt="Shaved Ice Banner"
          priority={true}
          fill
          draggable={false}
          className="object-fill bg-secondary-background rounded-xl"
        />
      </div>
      <div>
        <p className="mb-3 text-3xl font-semibold">SHAVED ICE</p>
        <p>
          Provide not only the best product, but an excellent customer service.
          We stand for quality, values and the charm that only
        </p>
      </div>
      <div className="relative w-full h-full">
        <Image
          src={Step1}
          alt="Shaved Ice Banner"
          priority={true}
          fill
          draggable={false}
          className="object-fill bg-secondary-background rounded-xl"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={Step1}
          alt="Shaved Ice Banner"
          priority={true}
          fill
          draggable={false}
          className="object-fill bg-secondary-background rounded-xl"
        />
      </div>
    </div>
  );
};

export default ShavedIce;
