import React from "react";

const Steps = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <div class="absolute font-medium border-8 border-primary border-xl text-primary text-lg rounded-full bg-white flex h-[55px] w-[55px] items-center justify-center">
            2
          </div>
          <div className="text-white ml-5 bg-primary rounded-tr pl-12 w-full font-montserrat py-3 flex justify-start">
            CHOOSE ONE ICE CREAM FLAVOR
          </div>
        </div>{" "}
        <div className="border ml-5 rounded-b flex flex-wrap max-sm:flex-col  max-sm:p-8 sm:py-8 ">
          <div className="ml-[5%]">
            <li>Chocolate Sprinkles</li>
            <li>Chocolate Syrup</li>
            <li>Condensed Milk</li>
            <li>Fruity Pebbles</li>
            <li>Ling Hing Powder</li>
            <li>Nutes</li>
            <li>Rainbow Sprinkles</li>
            <li>Strawberry Syrup</li>
            <li>Tamarind Sticks</li>
            <li>Whipped Cream</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
