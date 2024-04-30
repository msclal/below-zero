import Image from "next/image";
import Thrifty from "/public/thrifty.webp";
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
        <div className="border ml-5 rounded-b flex max-sm:flex-col  max-sm:p-8 sm:py-8 ">
          <div className="ml-[5%]">
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
          </div>
          <div className="ml-[5%]">
            <li>Cotton Candy</li>
            <li>Green Tea</li>
            <li>Mint n Chip</li>
            <li>Mango</li>
            <li>Pistachio</li>
            <li>Rainbow Sorbet</li>
            <li>Rocky Road</li>
            <li>Strawberry</li>
            <li>Vanilla</li>
          </div>
          <div className="sm:w-5/12 ">
            <Image
              src={Thrifty}
              alt="Landing"
              layout="responsive"
              className="rounded-xl"
              width="1"
              height="1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
