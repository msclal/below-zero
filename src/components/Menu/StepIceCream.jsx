import Image from "next/image";
import Thrifty from "/public/menu/thrifty.webp";
import React from "react";

const Steps = ({ step, thrifty }) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          {step !== "" && (
            <div className="absolute font-medium border-8 border-primary border-xl text-primary text-lg rounded-full bg-white flex h-[55px] w-[55px] items-center justify-center">
              {step}
            </div>
          )}
          <div className="flex justify-start w-full py-3 pl-12 ml-5 text-white rounded-tr bg-primary font-montserrat">
            CHOOSE ONE ICE CREAM FLAVOR
          </div>
        </div>{" "}
        <div className="ml-5 border rounded-b max-sm:flex-col max-sm:p-8 sm:py-8">
          <ul className="grid sm:grid-cols-2 xl:grid-cols-3 px-[10%] xl:pl-[5%] list-disc ">
            <li>Birthday Cake</li>
            <li>Black Cherry</li>
            <li>Butter Pecan</li>
            <li>Chocolate</li>
            <li>Chocolate Chip</li>
            <li>Chocolate Malted Crunch</li>
            <li>Coconut Pineapple</li>
            <li>Coffee</li>
            <li>Cookies n Cream</li>
            <li>Cookie Dough</li>
            <li>Cotton Candy</li>
            <li>Green Tea</li>
            <li>Mint n Chip</li>
            <li>Mango</li>
            <li>Pistachio</li>
            <li>Rainbow Sorbet</li>
            <li>Rocky Road</li>
            <li>Strawberry</li>
            <li>Vanilla</li>
          </ul>

          {step === "yes" && (
            <div className="max-sm:mt-[15%] lg:w-3/12 mr-[9%]">
              <Image
                src={Thrifty}
                alt="Thrifty Logo"
                layout="responsive"
                className="rounded-xl"
                width="1"
                height="1"
                draggable={false}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Steps;
