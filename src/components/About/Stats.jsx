import React from "react";

const Stats = () => {
  const years = new Date().getFullYear() - 2011;
  const syrups = 36;
  const flavors = 19;
  return (
    <div className="flex flex-col items-center p-10 sm:items-center sm:flex-row bg-secondary-background">
      <div className="justify-between max-sm:space-y-10 sm:w-full sm:flex xl:justify-evenly  px-[15%]">
        <div className="flex items-center max-sm:gap-x-3.5">
          <p className="text-5xl font-bold sm:text-3xl lg:text-5xl text-primary">
            {years}+
          </p>
          <div className="ml-2 font-light sm:text-xs lg:text-sm">
            YEARS OF <br /> SERVICE
          </div>
        </div>
        <div className="flex items-center max-sm:gap-x-2">
          <p className="text-5xl font-bold sm:text-3xl lg:text-5xl text-primary">
            {syrups}+
          </p>
          <div className="ml-2 font-light sm:text-xs lg:text-sm">
            HANDMADE SHAVED <br /> ICE SYRUPS
          </div>
        </div>
        <div className="flex items-center max-sm:gap-x-3.5">
          <p className="text-5xl font-bold sm:text-3xl lg:text-5xl text-primary">
            {flavors}+
          </p>
          <div className="ml-2 font-light sm:text-xs lg:text-sm">
            THRIFTY ICE <br /> CREAM FLAVORS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
