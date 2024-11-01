"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { combos } from "../../../public/data/combos";
import { shakes } from "../../../public/data/shakes";
import { specialties } from "../../../public/data/specialties";
import { shavedice } from "../../../public/data/shavedice";
import IceCream from "@/components/Menu/StepIceCream";
import Syrups from "@/components/Menu/StepSyrup";
import Sizes from "@/components/Menu/StepSizes";
import Toppings from "@/components/Menu/StepToppings";
import MenuItems from "@/components/Menu/MenuItems";
import Menubar from "@/components/Menu/Menubar";
import Banner from "/public/menu/banner.webp";
import IceCreamBanner from "/public/menu/IceCream.webp";
import { BiSolidDownArrow } from "react-icons/bi";
import { MotionDiv } from "../MotionDiv";
import MenuItemsWithDialog from "@/components/Menu/MenuItemsWithDialog";

const Menu = () => {
  const [isClicked, setIsClicked] = useState("SHAVED ICE");
  const [subcategory, setSubcategory] = useState("ALL");
  const [toggle, setToggle] = useState(false);
  const componentRef = useRef(null);
  const handleClick = (item) => {
    setIsClicked(item);
    window.scrollTo(0, 0);
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
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{ opacity: 0 }}
      className="flex flex-col justify-center "
    >
      <div className="flex max-lg:flex-col ">
        {/* DESKTOP */}
        <div className="lg:w-5/12 ">
          <Menubar selectedMenuItem={isClicked} onMenuItemClick={handleClick} />
        </div>
        <div className="flex flex-col items-center w-full min-h-screen gap-y-10 lg:gap-y-20">
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
                    className="border-[1px] border-border text-black bg-primary-background flex font-outfit flex-col space-y-[7%] w-full px-7 py-3 my-5"
                  >
                    <div className="flex items-center justify-between w-full font-semibold text-black">
                      {isClicked}
                      <BiSolidDownArrow className="text-lg" />
                    </div>
                  </div>
                </motion.div>
              }
              {toggle && (
                <div className="absolute z-10 w-full top-5 lg:hidden">
                  <div className="flex flex-col w-full border-[1px] border-border text-text-subtext bg-primary-background font-outfit">
                    <div
                      className={`font-semibold text-black flex items-center justify-between w-full px-7 py-3 select-none`}
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      {isClicked}
                      <BiSolidDownArrow className="text-lg rotate-180" />
                    </div>
                    <div
                      className={`${isClicked === "SHAVED ICE" && `hidden`} px-7 py-3  hover:bg-border select-none`}
                      onClick={() => {
                        setToggle(false);
                        setIsClicked("SHAVED ICE");
                      }}
                    >
                      SHAVED ICE
                    </div>
                    <div
                      className={`${isClicked === "SHAVED ICE COMBOS" && `hidden`} px-7 py-3 hover:bg-border select-none`}
                      onClick={() => {
                        setToggle(false);
                        setIsClicked("SHAVED ICE COMBOS");
                      }}
                    >
                      SHAVED ICE COMBOS
                    </div>
                    <div
                      className={`${isClicked === "SHAKES" && `hidden`} px-7 py-3 hover:bg-border select-none`}
                      onClick={() => {
                        setToggle(false);
                        setIsClicked("SHAKES");
                      }}
                    >
                      SHAKES
                    </div>
                    <div
                      className={`${isClicked === "ICE CREAM" && `hidden`} px-7 py-3 hover:bg-border select-none`}
                      onClick={() => {
                        setToggle(false);
                        setIsClicked("ICE CREAM");
                      }}
                    >
                      ICE CREAM
                    </div>
                    <div
                      className={`${isClicked === "HOUSE SPECIALTIES" && `hidden`} px-7 py-3 hover:bg-border select-none`}
                      onClick={() => {
                        setToggle(false);
                        setIsClicked("HOUSE SPECIALTIES");
                      }}
                    >
                      HOUSE SPECIALTIES
                    </div>
                  </div>
                </div>
              )}
              <Image
                src={Banner}
                alt="Menu Banner"
                className="rounded"
                draggable={false}
              />
            </div>
            {isClicked === "SHAVED ICE" && (
              <div className="flex flex-col justify-center">
                <div className="pt-[2%]">
                  <div className="pb-3 text-2xl font-semibold max-lg:text-center max-lg:text-3xl max-lg:pb-5">
                    SHAVED ICE
                  </div>
                  <div className="font-light text-text-subtext lg:w-8/12 max-sm:pb-[7%]">
                    Indulge in the authentic taste of the islands with our
                    Hawaiian shaved ice, featuring finely shaved ice topped with
                    our housemade syrups, meticulously crafted for a burst of
                    refreshing flavor in every bite
                  </div>
                  <div className="flex w-full my-5 md:mt-8 gap-x-4 md:gap-x-5">
                    <p
                      className={`${subcategory === "ALL" ? `bg-below-zero-red-200 text-white border-below-zero-red-200` : `border-border text-text-subtext`} border-[1px] px-3 min-[395px]:px-6 py-1 font-medium w-fit rounded-3xl duration-300 transition-all ease-in-out cursor-pointer`}
                      onClick={() => setSubcategory("ALL")}
                    >
                      All
                    </p>
                    <p
                      className={`${subcategory === "BUILD YOUR OWN" ? `bg-below-zero-red-200 text-white border-below-zero-red-200` : `border-border text-text-subtext`} border-[1px] px-3 min-[395px]:px-6 py-1 font-medium w-fit rounded-3xl duration-300 transition-all ease-in-out cursor-pointer`}
                      onClick={() => setSubcategory("BUILD YOUR OWN")}
                    >
                      Build Your Own
                    </p>
                    <p
                      className={`${subcategory === "CLASSICS" ? `bg-below-zero-red-200 text-white border-below-zero-red-200` : `border-border text-text-subtext`} border-[1px] px-3 min-[395px]:px-6 py-1 font-medium w-fit rounded-3xl duration-300 transition-all ease-in-out cursor-pointer`}
                      onClick={() => setSubcategory("CLASSICS")}
                    >
                      Classics
                    </p>
                  </div>
                  <div className="space-y-[5%] pb-[32%] pt-[5%]">
                    {(subcategory === "ALL" ||
                      subcategory === "BUILD YOUR OWN") && (
                      <>
                        <p>
                          <span className="font-semibold">SHAVED ICE:</span>{" "}
                          BUILD YOUR OWN
                        </p>
                        <Sizes step="1" />
                        <IceCream step="2" thrifty="yes" />
                        <Syrups step="3" />
                      </>
                    )}
                    {(subcategory === "ALL" || subcategory === "CLASSICS") && (
                      <>
                        <p>
                          <span className="font-semibold">SHAVED ICE:</span>{" "}
                          CLASSICS
                        </p>
                        <MenuItems data={shavedice} />
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
            {isClicked === "SHAVED ICE COMBOS" && (
              <div className="flex flex-col justify-center">
                <div className="pt-[2%]">
                  <div className="pb-3 text-2xl font-semibold max-lg:text-center max-lg:text-3xl">
                    SHAVED ICE COMBOS
                  </div>
                  <div className="font-light text-text-subtext lg:w-8/12 ">
                    Experience the ultimate refreshment with our Hawaiian shaved
                    ice combos, where you can customize your creation or opt for
                    classic combinations. Enjoy the perfect harmony of finely
                    shaved ice, our housemade syrups, and ice cream
                  </div>
                </div>
                <div className="flex w-full my-5 md:mt-8 gap-x-4 md:gap-x-5">
                  <p
                    className={`${subcategory === "ALL" ? `bg-below-zero-red-200 text-white border-below-zero-red-200` : `border-border text-text-subtext`} border-[1px] px-3 min-[395px]:px-6 py-1 font-medium w-fit rounded-3xl duration-300 transition-all ease-in-out cursor-pointer`}
                    onClick={() => setSubcategory("ALL")}
                  >
                    All
                  </p>
                  <p
                    className={`${subcategory === "BUILD YOUR OWN" ? `bg-below-zero-red-200 text-white border-below-zero-red-200` : `border-border text-text-subtext`} border-[1px] px-3 min-[395px]:px-6 py-1 font-medium w-fit rounded-3xl duration-300 transition-all ease-in-out cursor-pointer`}
                    onClick={() => setSubcategory("BUILD YOUR OWN")}
                  >
                    Build Your Own
                  </p>
                  <p
                    className={`${subcategory === "CLASSICS" ? `bg-below-zero-red-200 text-white border-below-zero-red-200` : `border-border text-text-subtext`} border-[1px] px-3 min-[395px]:px-6 py-1 font-medium w-fit rounded-3xl duration-300 transition-all ease-in-out cursor-pointer`}
                    onClick={() => setSubcategory("CLASSICS")}
                  >
                    Classics
                  </p>
                </div>
                <div className="space-y-[5%] pb-[32%] pt-[5%]">
                  {(subcategory === "ALL" ||
                    subcategory === "BUILD YOUR OWN") && (
                    <>
                      <p>
                        <span className="font-semibold">COMBO:</span> BUILD YOUR
                        OWN
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
                  <div className="font-light text-text-subtext lg:w-8/12 max-sm:pb-[7%]">
                    Immerse yourself in the classic flavors of Thrifty ice
                    cream. Customize your scoops for your next taste adventure!
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
                    className="rounded-xl"
                    draggable={false}
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
                  <div className="font-light text-text-subtext lg:w-8/12 max-sm:pb-[7%]">
                    Treat yourself to our luscious shakes, lovingly crafted with
                    the rich goodness of Thrifty ice cream. Whether you
                    {"'"}re a fan of classic flavors or crave something
                    adventurous, our customizable shakes are sure to satisfy
                    your sweet cravings
                  </div>
                </div>
                <div className="space-y-[5%] pb-[28%] pt-[5%]">
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
                  <div className="font-light text-text-subtext lg:w-8/12 max-sm:pb-[7%]">
                    Discover our delectable house specialties, featuring
                    customer favorites like Chamango and Cookie Slammer. Each
                    crafted with care and bursting with flavor, they{"'"}re sure
                    to delight your taste buds
                  </div>
                </div>
                <div className="space-y-[5%] pb-[28%] pt-[5%]">
                  <MenuItemsWithDialog data={specialties} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Menu;
