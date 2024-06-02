import React from "react";
import Image from "next/image";
import Snowcones from "/public/catering/snowcones.png";

const Exclusive = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden bg-secondary-background gap-y-10 sm:flex-row py-14 md:py-0 xl:py-10">
      <div className="w-full px-5 sm:px-10 lg:px-5 xl:w-1/3 sm:w-1/2">
        <p className="mb-3 text-4xl font-semibold">Catering Exclusive</p>
        <p className="font-light text-text-subtext">
          Elevate your catering experience with our exclusive flower cup, adding
          a touch of elegance to every event. Designed to complement our
          delicious treats, this unique serving option enhances both
          presentation and taste, ensuring your guests are treated to an
          unforgettable culinary journey.
        </p>
      </div>
      <div className="flex w-full sm:w-1/2 sm:h-full">
        <div className="w-full h-[275px] sm:h-[400px] xl:h-[475px] relative max-sm:left-0 sm:-right-16 xl:-right-48">
          <Image
            src={Snowcones}
            sizes="auto"
            alt="Below Zero Cup"
            fill
            draggable={false}
            className="object-cover bg-secondary-background sm:object-contain rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
