"use client";
import React, { useEffect, useState, useRef } from "react";
import IceCream from "@/components/Menu/StepIceCream";
import Syrups from "@/components/Menu/StepSyrup";
import Sizes from "@/components/Menu/StepSizes";
import Toppings from "@/components/Menu/StepToppings";
import MenuItems from "@/components/Menu/MenuItems";
import Banner from "/public/menu/banner.webp";
import IceCreamBanner from "/public/menu/IceCream.webp";
import Menubar from "../../components/Menu/Menubar";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { BiSolidDownArrow } from "react-icons/bi";

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

const Contact = () => {
  const [isClicked, setIsClicked] = useState("SHAVED ICE");
  const [subcategory, setSubcategory] = useState("ALL");
  const [toggle, setToggle] = useState(false);
  const componentRef = useRef(null);
  const handleClick = (item) => {
    setIsClicked(item);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const filter = params.get("filter");
    if (filter) {
      setIsClicked(filter.toUpperCase());
    }
  }, []);

  return (
    <>
      <Head>
        <title>Below Zero: Shaved Ice | Menu</title>
      </Head>
      <div className="flex flex-col justify-center ">
        <div className="flex max-lg:flex-col ">
          <div className="lg:w-5/12 ">
            <Menubar
              selectedMenuItem={isClicked}
              onMenuItemClick={handleClick}
            />
          </div>
          <div className="flex flex-col items-center min-h-screen gap-y-10 lg:gap-y-20 w-fit lg:pr-[5%] ">
            <div className="flex flex-col space-y-[3%] lg:w-10/12 max-lg:w-11/12">
              {/* Mobile TABS */}
              <div ref={componentRef} className="relative">
                {
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.07 },
                    }}
                    exit={{ opacity: 0, y: 0 }}
                    className="z-10 w-full lg:hidden"
                  >
                    <div
                      onClick={() => setToggle(true)}
                      className="border-2 border-border text-black bg-primary-background flex font-outfit flex-col space-y-[7%] w-full px-7 py-3 my-5"
                    >
                      <div className="flex items-center justify-between w-full font-semibold text-black">
                        {isClicked}
                        <BiSolidDownArrow className="text-lg" />
                      </div>
                    </div>
                  </motion.div>
                }
                {toggle && (
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{ opacity: 0, y: 0 }}
                    className="absolute z-10 w-full top-5 lg:hidden"
                  >
                    <div className="border-2 border-border text-text-subtext bg-primary-background flex font-outfit flex-col space-y-[7%] w-full px-7 py-3 md:space-y-7">
                      <div
                        className={`font-semibold text-black flex items-center justify-between w-full`}
                        onClick={() => {
                          setToggle(false);
                          setIsClicked("SHAVED ICE");
                        }}
                      >
                        {isClicked}
                        <BiSolidDownArrow className="text-lg rotate-180" />
                      </div>
                      <div
                        className={`${isClicked === "SHAVED ICE" && `hidden`}`}
                        onClick={() => {
                          setToggle(false);
                          setIsClicked("SHAVED ICE");
                        }}
                      >
                        SHAVED ICE
                      </div>
                      <div
                        className={`${isClicked === "SHAVED ICE COMBOS" && `hidden`}`}
                        onClick={() => {
                          setToggle(false);
                          setIsClicked("SHAVED ICE COMBOS");
                        }}
                      >
                        SHAVED ICE COMBOS
                      </div>
                      <div
                        className={`${isClicked === "SHAKES" && `hidden`}`}
                        onClick={() => {
                          setToggle(false);
                          setIsClicked("SHAKES");
                        }}
                      >
                        SHAKES
                      </div>
                      <div
                        className={`${isClicked === "ICE CREAM" && `hidden`}`}
                        onClick={() => {
                          setToggle(false);
                          setIsClicked("ICE CREAM");
                        }}
                      >
                        ICE CREAM
                      </div>
                      <div
                        className={`${isClicked === "HOUSE SPECIALTIES" && `hidden`}`}
                        onClick={() => {
                          setToggle(false);
                          setIsClicked("HOUSE SPECIALTIES");
                        }}
                      >
                        HOUSE SPECIALTIES
                      </div>
                    </div>
                  </motion.div>
                )}
                <Image
                  src={Banner}
                  alt="Landing"
                  layout="responsive"
                  className="rounded"
                  width="1"
                  height="1"
                />
              </div>
              {isClicked === "SHAVED ICE" && (
                <div className="flex flex-col justify-center">
                  <div className="pt-[2%]">
                    <div className="pb-3 text-2xl font-semibold max-lg:text-center max-lg:text-3xl max-lg:pb-5">
                      SHAVED ICE
                    </div>
                    <div className="text-text-subtext font-extralight lg:w-8/12 xl:w-6/12">
                      provide not only the best product, but an excellent
                      customer service. We stand for quality, values and the
                      charm that only a family business can provide for 12 years
                    </div>
                  </div>
                  <div className="space-y-[5%] pb-[3%] pt-[5%]">
                    <Sizes step="1" />
                    <Syrups step="2" />
                  </div>
                </div>
              )}
              {isClicked === "SHAVED ICE COMBOS" && (
                <div className="flex flex-col justify-center">
                  <div className="pt-[2%]">
                    <div className="pb-3 text-2xl font-semibold max-lg:text-center max-lg:text-3xl">
                      SHAVED ICE COMBOS
                    </div>
                    <div className="text-text-subtext font-extralight lg:w-8/12 xl:w-6/12">
                      provide not only the best product, but an excellent
                      customer service. We stand for quality, values and the
                      charm that only a family business can provide for 12 years
                    </div>
                  </div>
                  <div className="flex w-full my-5 md:mt-8 gap-x-4 md:gap-x-5">
                    <p
                      className={`${subcategory === "ALL" ? `bg-below-zero-red-200 text-white border-below-zero-red-200` : `border-border text-text-subtext`} border-2 px-3 min-[395px]:px-6 py-1 font-medium w-fit rounded-3xl duration-300 transition-all ease-in-out cursor-pointer`}
                      onClick={() => setSubcategory("ALL")}
                    >
                      All
                    </p>
                    <p
                      className={`${subcategory === "BUILD YOUR OWN" ? `bg-below-zero-red-200 text-white border-below-zero-red-200` : `border-border text-text-subtext`} border-2 px-3 min-[395px]:px-6 py-1 font-medium w-fit rounded-3xl duration-300 transition-all ease-in-out cursor-pointer`}
                      onClick={() => setSubcategory("BUILD YOUR OWN")}
                    >
                      Build Your Own
                    </p>
                    <p
                      className={`${subcategory === "CLASSICS" ? `bg-below-zero-red-200 text-white border-below-zero-red-200` : `border-border text-text-subtext`} border-2 px-3 min-[395px]:px-6 py-1 font-medium w-fit rounded-3xl duration-300 transition-all ease-in-out cursor-pointer`}
                      onClick={() => setSubcategory("CLASSICS")}
                    >
                      Classics
                    </p>
                  </div>

                  {/* Combo Subcateogry */}
                  {/* <div className="flex w-full my-5 sm:hidden gap-x-4">
                    <div
                      className={`${subcategory === "ALL" ? `bg-below-zero-red-200 text-white border-below-zero-red-200` : `border-border text-text-subtext`} border-2 px-3 min-[395px]:px-6 py-1 font-medium w-fit rounded-3xl duration-300 transition-all ease-in-out`}
                      onClick={() => setSubcategory("ALL")}
                    >
                      All
                    </div>
                    <div
                      className={`${subcategory === "BUILD YOUR OWN" ? `bg-below-zero-red-200 text-white border-below-zero-red-200` : `border-border text-text-subtext`} border-2  px-3 min-[395px]:px-6 py-1 font-medium rounded-3xl duration-300 transition-all ease-in-out`}
                      onClick={() => setSubcategory("BUILD YOUR OWN")}
                    >
                      Build Your Own
                    </div>
                    <div
                      className={`${subcategory === "CLASSICS" ? `bg-below-zero-red-200 text-white border-below-zero-red-200` : `border-border text-text-subtext`} border-2  px-3 min-[395px]:px-6 py-1 font-medium rounded-3xl duration-300 transition-all ease-in-out`}
                      onClick={() => setSubcategory("CLASSICS")}
                    >
                      Classics
                    </div>
                  </div> */}
                  <div className="space-y-[5%] pb-[5%] pt-[5%]">
                    {(subcategory === "ALL" ||
                      subcategory === "BUILD YOUR OWN") && (
                      <>
                        <p>
                          <span className="font-semibold">COMBO:</span> BUILD
                          YOUR OWN
                        </p>
                        <Sizes step="1" />
                        <IceCream step="2" thrifty="yes" />
                        <Syrups step="3" />
                      </>
                    )}
                    {(subcategory === "ALL" || subcategory === "CLASSICS") && (
                      <>
                        <p>
                          <span className="font-semibold">COMBO:</span> CLASSICS
                        </p>
                        <MenuItems data={combos} />
                      </>
                    )}
                  </div>
                </div>
              )}
              {isClicked === "ICE CREAM" && (
                <div className="flex flex-col justify-center">
                  <div className="pt-[2%]">
                    <div className="pb-3 text-2xl font-semibold max-lg:text-center max-lg:text-3xl max-lg:pb-5">
                      ICE CREAM
                    </div>
                    <div className="text-text-subtext font-extralight lg:w-8/12 xl:w-6/12">
                      provide not only the best product, but an excellent
                      customer service. We stand for quality, values and the
                      charm that only a family business can provide for 12 years
                    </div>
                  </div>
                  <div className="space-y-[5%] pb-[3%] pt-[5%]">
                    <IceCream step="1" thrifty="no" />
                    <div className="flex">
                      <Toppings step="2" />
                    </div>
                  </div>
                  <div className="mt-[10%]">
                    <Image
                      src={IceCreamBanner}
                      alt="Thrifty Logo"
                      layout="responsive"
                      className="rounded-xl"
                      width="1"
                      height="1"
                    />
                  </div>
                </div>
              )}
              {isClicked === "SHAKES" && (
                <div className="flex flex-col justify-center">
                  <div className="pt-[2%]">
                    <div className="pb-3 text-2xl font-semibold max-lg:text-center max-lg:text-3xl max-lg:pb-5">
                      SHAKES
                    </div>
                    <div className="text-text-subtext font-extralight lg:w-8/12 xl:w-6/12">
                      provide not only the best product, but an excellent
                      customer service. We stand for quality, values and the
                      charm that only a family business can provide for 12 years
                    </div>
                  </div>
                  <div className="space-y-[5%] pb-[3%] pt-[5%]">
                    <div className="flex">
                      <Toppings step="" />
                    </div>
                    <MenuItems data={shakes} />
                  </div>
                </div>
              )}
              {isClicked === "HOUSE SPECIALTIES" && (
                <div className="flex flex-col justify-center">
                  <div className="pt-[2%]">
                    <div className="pb-3 text-2xl font-semibold max-lg:text-center max-lg:text-3xl max-lg:pb-5">
                      HOUSE SPECIALTIES
                    </div>
                    <div className="text-text-subtext font-extralight lg:w-8/12 xl:w-6/12">
                      provide not only the best product, but an excellent
                      customer service. We stand for quality, values and the
                      charm that only a family business can provide for 12 years
                    </div>
                  </div>
                  <div className="space-y-[5%] pb-[3%] pt-[5%]">
                    <MenuItems data={specialties} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
