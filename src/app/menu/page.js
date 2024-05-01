"use client";
import React, { useState } from "react";
import IceCream from "@/components/Menu/StepIceCream";
import Syrups from "@/components/Menu/StepSyrup";
import Sizes from "@/components/Menu/StepSizes";
import Toppings from "@/components/Menu/StepToppings";
import MenuItems from "@/components/Menu/MenuItems";
import Banner from "/public/menu/banner.webp";

const specialties = [
  {
    picture: "/Specialties/BananaSplit.webp",
    name: "Banana Split",
    description: "",
  },
  {
    picture: "/Specialties/BrownieSundae.webp",
    name: "Brownie Sundae",
    description: "",
  },
  {
    picture: "/Specialties/Chamango.webp",
    name: "Chamango",
    description: "",
  },
  {
    picture: "/Specialties/ChurroSundae.webp",
    name: "Churro Sundae",
    description: "",
  },
  {
    picture: "/Specialties/CookieSlammer.webp",
    name: "Cookie Slammer",
    description: "",
  },
  {
    picture: "/Specialties/RootbeerFloat.webp",
    name: "Rootbeer Float",
    description: "",
  },
  {
    picture: "/Specialties/WaffleBowl.webp",
    name: "Waffle Bowl",
    description: "",
  },
  {
    picture: "/Specialties/WaffleCone.webp",
    name: "Waffle Cone",
    description: "",
  },
];

const shakes = [
  {
    picture: "/Shakes/Chocolate.webp",
    name: "Chocolate",
    description: "",
  },
  {
    picture: "/Shakes/Chocolate2.webp",
    name: "Chocolate",
    description: "",
  },
  {
    picture: "/Shakes/CookiesNCream.webp",
    name: "Cookies & Cream",
    description: "",
  },
  {
    picture: "/Shakes/CookiesNCream2.webp",
    name: "Cookies & Cream",
    description: "",
  },
  {
    picture: "/Shakes/CookiesNCream3.webp",
    name: "Cookies & Cream",
    description: "",
  },
  {
    picture: "/Shakes/SaltedCaramel.webp",
    name: "Salted Caramel",
    description: "",
  },
  {
    picture: "/Shakes/Strawberry.webp",
    name: "Strawberry",
    description: "",
  },
  {
    picture: "/Shakes/Strawberry2.webp",
    name: "Strawberry",
    description: "",
  },
  {
    picture: "/Shakes/Strawberry3.webp",
    name: "Strawberry",
    description: "",
  },
  {
    picture: "/Shakes/Vanilla.webp",
    name: "Vanilla",
    description: "",
  },
  {
    picture: "/Shakes/Vanilla2.webp",
    name: "Vanilla",
    description: "",
  },
];

const combos = [
  {
    picture: "/SnowConeCombos/BerryBerryGood.webp",
    name: "Berry Berry Good Good",
    description:
      "Strawberry, Raspberry, and Blueberry Shaved Ice with Vanilla Ice Cream",
  },
  {
    picture: "/SnowConeCombos/BigStick.webp",
    name: "Big Stick",
    description:
      "Cherry, Orange, and Pineapple Shaved Ice with Vanilla Ice Cream",
  },
  {
    picture: "/SnowConeCombos/BrandonGoingBananas.webp",
    name: "Brandon Going Bananas",
    description: "Banana and Vanilla Shaved Ice with Vanilla Ice Cream",
  },
  {
    picture: "/SnowConeCombos/CandyLand.webp",
    name: "Candy Land",
    description: "Blue Gum and Pink Gum Shaved Ice with Cotton Candy Ice Cream",
  },
  {
    picture: "/SnowConeCombos/CherryCola.webp",
    name: "Cherry Cola",
    description: "Cherry and Cola Shaved Ice with Vanilla Ice Cream",
  },
  {
    picture: "/SnowConeCombos/BrandonGoingBananas.webp",
    name: "Brandon Going Bananas",
    description: "Banana and Vanilla Shaved Ice with Vanilla Ice Cream",
  },
  {
    picture: "/SnowConeCombos/CookieMonster.webp",
    name: "Cookie Monster",
    description: "Cookie Dough Shaved Ice with Cookies n Cream Ice Cream",
  },
  {
    picture: "/SnowConeCombos/PinaColada.webp",
    name: "Pina Colada",
    description: "Pina Colada Shaved Ice with Coconut Pineapple Ice Cream",
  },
  {
    picture: "/SnowConeCombos/RootBeerFloat.webp",
    name: "Root Beer Float",
    description: "Root beer and Vanilla Shaved Ice with Vanilla Ice Cream ",
  },
  {
    picture: "/SnowConeCombos/Snickers.webp",
    name: "Snickers",
    description:
      "Caramel and Praline Shaved Ice with Chocolate Ice Cream and Caramel Toppings",
  },
  {
    picture: "/SnowConeCombos/StrawnanaShortcake.webp",
    name: "Strawnana Shortcake",
    description:
      "Strawberry, Banana, and Cake Batter Shaved Ice with Vanilla Ice Cream",
  },
  {
    picture: "/SnowConeCombos/TropicalStorm.webp",
    name: "Tropical Storm",
    description: "Mango and Coconut Shaved Ice with Vanilla Ice Cream",
  },
  {
    picture: "/SnowConeCombos/YummyLane.webp",
    name: "Yummy Lane",
    description: "Cotton Candy Shaved Ice with Birthday Cake Ice Cream",
  },
  {
    picture: "/SnowConeCombos/SweetNSour.webp",
    name: "Sweet N Sour",
    description: "Watermelon and Sour Apple Shaved Ice with Sherbet Ice Cream",
  },
  {
    picture: "/SnowConeCombos/HappyRainbow.webp",
    name: "Happy Rainbow",
    description:
      "Cherry, Blue Gum, and Banana Shaved Ice with Cotton Candy Ice Cream",
  },
];

import Menubar from "../../components/Menu/Menubar";
import Head from "next/head";
import Image from "next/image";

const Contact = () => {
  const [isClicked, setIsClicked] = useState("SHAVED ICE");
  const handleClick = (item) => {
    setIsClicked(item);
  };
  return (
    <>
      <Head>
        <title>Below Zero: Shaved Ice | Menu</title>
      </Head>
      <div className="flex justify-center">
        <div className="flex pt-36 w-10/12 ">
          <div className="w-4/12">
            <Menubar
              selectedMenuItem={isClicked}
              onMenuItemClick={handleClick}
            />
          </div>

          <div className="flex flex-col items-center min-h-screen gap-y-10 lg:gap-y-20 w-full">
            <div className="flex justify-end flex-col w-full space-y-[3%] max-sm:w-10/12 sm:w-10/12 lg:w-10/12">
              <Image
                src={Banner}
                alt="Landing"
                layout="responsive"
                className="rounded"
                width="1"
                height="1"
              />
              {isClicked === "SHAVED ICE" && (
                <div className="flex flex-col justify-center">
                  <div className="pt-[2%]">
                    <div className="font-semibold text-2xl">SHAVED ICE</div>
                    <div className="text-text-subtext font-extralight w-6/12">
                      provide not only the best product, but an excellent
                      customer service. We stand for quality, values and the
                      charm that only
                    </div>
                  </div>
                  <div className="space-y-[5%] pb-[3%] pt-[5%]">
                    <Sizes />
                    <Syrups />
                  </div>
                </div>
              )}
              {isClicked === "SHAVED ICE COMBOS" && (
                <div className="flex flex-col justify-center">
                  <div className="pt-[2%]">
                    <div className="font-semibold text-2xl">
                      SHAVED ICE COMBOS
                    </div>
                    <div className="text-text-subtext font-extralight w-6/12">
                      provide not only the best product, but an excellent
                      customer service. We stand for quality, values and the
                      charm that only
                    </div>
                  </div>
                  <div className="space-y-[5%] pb-[3%] pt-[5%]">
                    <Sizes />
                    <IceCream />
                    <Syrups />
                    <MenuItems data={combos} />
                  </div>
                </div>
              )}
              {isClicked === "ICE CREAM" && (
                <div className="flex flex-col justify-center">
                  <div className="pt-[2%]">
                    <div className="font-semibold text-2xl">ICE CREAM</div>
                    <div className="text-text-subtext font-extralight w-6/12">
                      provide not only the best product, but an excellent
                      customer service. We stand for quality, values and the
                      charm that only
                    </div>
                  </div>
                  <div className="space-y-[5%] pb-[3%] pt-[5%]">
                    <IceCream />
                    <Toppings />
                  </div>
                </div>
              )}
              {isClicked === "SHAKES" && (
                <div className="flex flex-col justify-center">
                  <div className="pt-[2%]">
                    <div className="font-semibold text-2xl">SHAKES</div>
                    <div className="text-text-subtext font-extralight w-6/12">
                      provide not only the best product, but an excellent
                      customer service. We stand for quality, values and the
                      charm that only
                    </div>
                  </div>
                  <div className="space-y-[5%] pb-[3%] pt-[5%]">
                    <Toppings />
                    <MenuItems data={shakes} />
                  </div>
                </div>
              )}
              {isClicked === "HOUSE SPECIALTIES" && (
                <div className="flex flex-col justify-center">
                  <div className="pt-[2%]">
                    <div className="font-semibold text-2xl">
                      HOUSE SPECIALTIES
                    </div>
                    <div className="text-text-subtext font-extralight w-6/12">
                      provide not only the best product, but an excellent
                      customer service. We stand for quality, values and the
                      charm that only
                    </div>
                  </div>
                  <div className="space-y-[5%] pb-[3%] pt-[5%]">
                    <MenuItems data={specialties} />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* max-sm:w-10/12 sm:w-10/12 lg:w-7/12 */}
        </div>
      </div>
    </>
  );
};

export default Contact;
