import Image from "next/image";
import React from "react";
import Thrifty from "/public/menu/thrifty.webp";

const Steps = ({ step }) => {
  return (
    <>
      <div className="flex w-full max-sm:flex-col">
        <div className="flex flex-col w-full">
          <div className="flex items-center">
            {step !== "" && (
              <div className="absolute font-medium border-8 border-primary border-xl text-primary text-lg rounded-full bg-white flex h-[55px] w-[55px] items-center justify-center">
                {step}
              </div>
            )}

            <div
              className={`flex justify-start w-full py-3  text-white rounded-t bg-primary font-montserrat  ${step !== "" ? "ml-5 pl-12" : "pl-5"}`}
            >
              CHOOSE TOPPINGS
            </div>
          </div>{" "}
          <div
            className={`flex border rounded-b max-sm:flex-col max-sm:p-8 sm:py-8 ${step !== "" ? "ml-5" : ""}`}
          >
            <ul className="xl:px-[10%] sm:px-[18%] grid max-xs:grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 lg:gap-x-[10%] w-full list-disc ">
              <li>Chocolate Sprinkles</li>
              <li>Chocolate Syrup</li>
              <li>Condensed Milk</li>
              <li>Fruity Pebbles</li>
              <li>Li Hing Powder</li>
              <li>Nuts</li>
              <li>Rainbow Sprinkles</li>
              <li>Strawberry Syrup</li>
              <li>Tamarind Sticks</li>
              <li>Whipped Cream</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="relative w-[60%] pt-[8%]">
            <Image
              src={Thrifty}
              alt="Thrify Logo"
              className="object-contain rounded"
              // sizes="50vw"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
