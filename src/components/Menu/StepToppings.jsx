import React from "react";

const Steps = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <div className="absolute font-medium border-8 border-primary border-xl text-primary text-lg rounded-full bg-white flex h-[55px] w-[55px] items-center justify-center">
            2
          </div>
          <div className="flex justify-start w-full py-3 pl-12 ml-5 text-white rounded-tr bg-primary font-montserrat">
            CHOOSE TOPPINGS
          </div>
        </div>{" "}
        <div className="flex flex-wrap ml-5 border rounded-b max-sm:flex-col max-sm:p-8 sm:py-8 ">
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
