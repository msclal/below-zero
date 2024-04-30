// import Image from "next/image";
// import Thrifty from "/public/thrifty.webp";
import React from "react";

const Steps = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <div class="absolute font-medium border-8 border-primary border-xl text-primary text-lg rounded-full bg-white flex h-[55px] w-[55px] items-center justify-center">
            3
          </div>
          <div className="text-white ml-5 bg-primary rounded-tr pl-12 w-full font-montserrat py-3 flex justify-start">
            CHOOSE UP TO THREE SHAVED ICE FLAVORS
          </div>
        </div>{" "}
        <div className="border ml-5 rounded-b flex max-sm:flex-col max-sm:p-8 pr-8 sm:py-8">
          <div className="ml-[5%] w-8/12 ">
            <p className="font-medium text-lg pb-3">Non-Dairy</p>
            <div className="flex max-sm:flex-col space-x-[1%]">
              <div className="w-full">
                <li>Bahama Mama</li>
                <li>Banana</li>
                <li>Blueberry</li>
                <li>Blue Gum</li>
                <li>Caramel</li>
                <li>Cherry</li>
                <li>Cola</li>
                <li>Coconut</li>
              </div>
              <div className="w-full">
                <li>Guava</li>
                <li>Grape</li>
                <li>Hawaiian</li>
                <li>Lemon</li>
                <li>Lime</li>
                <li>Margarita</li>
                <li>Orange</li>
                <li>Pineapple</li>
              </div>
              <div className="w-full">
                <li>Pomegrante</li>
                <li>Praline</li>
                <li>Raspberry</li>
                <li>Rootbeer</li>
                <li>S&#39;mores</li>
                <li>Sour Apple</li>
                <li>Tamarindo</li>
              </div>
            </div>
          </div>
          <div className="w-3/12">
            <p className="font-medium text-lg pb-3">With Dairy</p>
            <div className="flex">
              <div className="w-full">
                <li>Cake Batter</li>
                <li>Cookie Dough</li>
                <li>Cotton Candy</li>
                <li>Dulce de Leche</li>
                <li>Pink Gum</li>
              </div>
            </div>
          </div>
          <div className="w-3/12">
            <p className="font-medium text-lg pb-3">Sugar Free</p>
            <div className="flex">
              <div className="w-full">
                <li>Blue Raspberry</li>
                <li>Mango</li>
                <li>Pina Colada</li>
                <li>Strawberry</li>
                <li>Tiger&#39;s Blood</li>
                <li>Vanilla</li>
                <li>Watermelon</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
