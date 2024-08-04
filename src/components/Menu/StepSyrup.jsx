// import Image from "next/image";
// import Thrifty from "/public/thrifty.webp";
import React from "react";

const Steps = ({ step }) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          {step !== "" && (
            <div className="absolute font-medium border-8 border-primary border-xl text-primary text-lg rounded-full bg-white flex h-[55px] w-[55px] items-center justify-center">
              {step}
            </div>
          )}
          <div className="flex justify-start w-full py-3 pl-12 ml-5 text-white rounded-tr max-sm:hidden bg-primary font-montserrat">
            CHOOSE UP TO THREE SHAVED ICE FLAVORS
          </div>
          <div className="flex justify-start w-full py-3 pl-12 ml-5 text-white rounded-tr sm:hidden bg-primary font-montserrat">
            CHOOSE UP TO 3 FLAVORS
          </div>
        </div>{" "}
        <div className="border ml-5 max-lg:space-y-[8%] rounded-b flex max-lg:flex-col max-lg:items-center max-lg:p-8 pr-8 sm:py-8">
          <div className="lg:ml-[5%] max-lg:w-full w-6/12 ">
            <p className="pb-3 text-lg font-medium">Non-Dairy</p>
            <div className="flex max-sm:flex-wrap sm:space-x-[8%]">
              <ul className="grid text-nowrap gap-x-[20%] lg:pr-[5%] sm:grid-cols-2 2xl:grid-cols-3  max-sm:mr-[7%] list-disc">
                <li className="">Bahama Mama</li>
                <li>Banana</li>
                <li>Blueberry</li>
                <li>Blue Gum</li>
                <li>Caramel</li>
                <li>Cherry</li>
                <li>Cola</li>
                <li>Coconut</li>
                <li>Guava</li>
                <li>Grape</li>
                <li>Hawaiian</li>
                <li>Lemon</li>
                <li>Lime</li>
                <li>Margarita</li>
                <li>Orange</li>
                <li>Pineapple</li>
                <li>Pomegrante</li>
                <li>Praline</li>
                <li>Raspberry</li>
                <li>Rootbeer</li>
                <li>S{"'"}mores</li>
                <li>Sour Apple</li>
                <li>Tamarindo</li>
              </ul>
            </div>
          </div>
          <div className="flex w-6/12 max-lg:w-full lg:pl-[5%]">
            <div className="w-full max-lg:w-full ">
              <p className="pb-3 text-lg font-medium">With Dairy</p>
              <div className="flex">
                <ul className="w-full list-disc text-nowrap">
                  <li>Cake Batter</li>
                  <li>Cookie Dough</li>
                  <li>Cotton Candy</li>
                  <li>Dulce de Leche</li>
                  <li>Pink Gum</li>
                </ul>
              </div>
            </div>
            <div className="w-full max-lg:w-full">
              <p className="pb-3 text-lg font-medium ">Sugar Free</p>
              <div className="flex">
                <ul className="w-full list-disc text-nowrap">
                  <li>Blue Raspberry</li>
                  <li>Mango</li>
                  <li>Pina Colada</li>
                  <li>Strawberry</li>
                  <li>Tiger{"'"}s Blood</li>
                  <li>Vanilla</li>
                  <li>Watermelon</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
