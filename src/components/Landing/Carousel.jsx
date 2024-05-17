"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ShavedIce from "/public/landing/ShavedIce.webp";
import ShavedIceCombos from "/public/landing/ShavedIceCombos.webp";
import Shakes from "/public/landing/Shakes.webp";
import Specialties from "/public/landing/Specialties.webp";
import IceCream from "/public/landing/IceCream.webp";
import BlueArrow from "/public/landing/BlueArrow.png";
import RedArrow from "/public/landing/RedArrow.png";
// import YellowArrow from "/public/landing/YellowArrow.png";
// import GreenArrow from "/public/landing/GreenArrow.png";
// import PurpleArrow from "/public/landing/PurpleArrow.png";
import Filters from "./Filters";
import HeroText from "./HeroText";
import { SlArrowDown } from "react-icons/sl";
import { motion } from "framer-motion";
import Link from "next/link";
const images = [
  { image: ShavedIce, alt: "Mika with Cat" },
  { image: ShavedIceCombos, alt: "Grad Pic" },
  { image: Shakes, alt: "Mika with Cat" },
  { image: Specialties, alt: "Grad Pic" },
  { image: IceCream, alt: "Grad Pic" },
];
const delay = 3000;
const swipeThreshold = 0;

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const timeoutRef = useRef(null);

  const handleSelection = (item) => {
    setIndex(item);
  };
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  function handleTouchStart(e) {
    setTouchStart(e.touches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.touches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > swipeThreshold) {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (touchEnd - touchStart > swipeThreshold) {
      setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="relative items-center justify-center hidden  w-11/12 h-[850px] min-[1920px]:h-[850px] xl:flex">
          {/* <div className="w-1/3"> */}
          <HeroText />
          {/* </div> */}
          <div className="flex justify-center w-full h-full ">
            <div className="relative flex justify-center items-center h-fit min-[1350px]:w-9/12 min-[1920px]:w-7/12 min-[2400px]:w-5/12 ">
              {index === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.08 } }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-full ">
                    <Image src={ShavedIce} alt="shaved ice" draggable={false} />
                  </div>
                </motion.div>
              )}
              {index === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.08 } }}
                  exit={{ opacity: 0 }}
                >
                  <Image src={ShavedIceCombos} alt="shaved ice " />
                </motion.div>
              )}
              {index === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.08 } }}
                  exit={{ opacity: 0 }}
                >
                  <Image src={IceCream} alt="shaved ice " />
                </motion.div>
              )}
              {index === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.08 } }}
                  exit={{ opacity: 0 }}
                >
                  <Image
                    src={Shakes}
                    alt="shaved ice "
                    // width="0"
                    // height="0"
                    // sizes="100vw"
                    // className="w-full h-auto"
                  />
                </motion.div>
              )}
              {index === 4 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.08 } }}
                  exit={{ opacity: 0 }}
                >
                  <Image src={Specialties} alt="shaved ice " />
                </motion.div>
              )}
            </div>
          </div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute bottom-8 "
          >
            <SlArrowDown className="stroke-[20px] text-primary text-4xl" />
          </motion.div>
          <Filters selectedMenuItem={index} onMenuItemClick={handleSelection} />
        </div>{" "}
      </div>

      {/* TABLET */}
      <div className="flex  justify-center pb-[6%] pt-[3%]">
        <div className="max-sm:hidden flex  items-start w-11/12  xl:hidden">
          <div className="  h-full w-6/12">
            <HeroText />
          </div>

          <div className="flex flex-col  h-full justify-between  w-9/12">
            <div className="pb-16 pl-16">
              <div className="flex justify-center ">
                {index === 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ delay: 0.08 }}
                  >
                    <Image src={ShavedIce} alt="shaved ice" draggable={false} />
                  </motion.div>
                )}
                {index === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ delay: 0.08 }}
                  >
                    <Image src={ShavedIceCombos} alt="shaved ice " />
                  </motion.div>
                )}
                {index === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ delay: 0.08 }}
                  >
                    <Image src={Shakes} alt="shaved ice " />
                  </motion.div>
                )}
                {index === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ delay: 0.08 }}
                  >
                    <Image src={ShavedIceCombos} alt="shaved ice " />
                  </motion.div>
                )}
                {index === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ delay: 0.08 }}
                  >
                    <Image src={Specialties} alt="shaved ice " />
                  </motion.div>
                )}
              </div>
              <Image
                src={
                  (index === 0 && BlueArrow) ||
                  (index === 1 && RedArrow) ||
                  (index === 2 && BlueArrow) ||
                  (index === 3 && RedArrow) ||
                  (index === 4 && BlueArrow)
                }
                alt="arrow"
                className=" absolute right-[40%] lg:right-[37%]  -rotate-[50deg] lg:-rotate-[50deg] -z-[100]"
              />
            </div>
            <div className="flex justify-end">
              <div
                className={`${(index === 0 && "bg-below-zero-blue-200 hover:bg-below-zero-blue-200/80") || (index === 1 && "bg-below-zero-red-200 hover:bg-below-zero-red-200/80") || (index === 2 && "bg-below-zero-yellow-200  hover:bg-below-zero-yellow-200/80") || (index === 3 && "bg-below-zero-purple-200 hover:bg-below-zero-purple-200/80") || (index === 4 && "bg-below-zero-green-200 hover:bg-below-zero-green-200/80")} rounded-md px-6 py-2 w-fit font-semibold transition-all duration-300 ease-in-out font-montserrat text-white text-center text-sm`}
              >
                <Link
                  href={
                    (index === 0 && "/menu?filter=shaved ice") ||
                    (index === 1 && "/menu?filter=shaved ice combos") ||
                    (index === 2 && "/menu?filter=ice cream") ||
                    (index === 3 && "/menu?filter=shakes") ||
                    (index === 4 && "/menu?filter=house specalties")
                  }
                >
                  SEE All{" "}
                  {(index === 0 && "SHAVED ICE") ||
                    (index === 1 && "COMBOS") ||
                    (index === 2 && "ICE CREAMS") ||
                    (index === 3 && "SHAKES") ||
                    (index === 4 && "SPECIALTIES")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="relative flex flex-col min-h-screen overflow-hidden sm:hidden">
        <HeroText />

        <div className="flex justify-center w-2/3 m-auto">
          <motion.div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="relative whitespace-nowrap transition-ease duration-[650ms] w-full"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {images.map((image, idx) => (
                <Image
                  key={idx}
                  src={image.image}
                  alt={image.alt}
                  className="inline-block w-full relative z-[10]"
                />
              ))}
            </div>
          </motion.div>
        </div>
        <div className="relative">
          <Image
            src={
              (index === 0 && BlueArrow) ||
              (index === 1 && RedArrow) ||
              (index === 2 && BlueArrow) ||
              (index === 3 && RedArrow) ||
              (index === 4 && BlueArrow)
            }
            alt="arrow"
            className="absolute left-6 min-[400px]:left-10 -rotate-[25deg] bottom-14  min-[400px]:bottom-20 -z-[100] w-8"
          />
          <div
            className={`${(index === 0 && "bg-below-zero-blue-200") || (index === 1 && "bg-below-zero-red-200") || (index === 2 && "bg-below-zero-yellow-200") || (index === 3 && "bg-below-zero-purple-200") || (index === 4 && "bg-below-zero-green-200")} rounded-md px-6 py-2 w-[55%] min-[380px]:w-1/2 font-semibold transition-all duration-300 ease-in-out font-montserrat text-white text-center m-auto text-sm my-14 min-[400px]:my-20`}
          >
            <Link
              href={
                (index === 0 && "/menu?filter=shaved ice") ||
                (index === 1 && "/menu?filter=shaved ice combos") ||
                (index === 2 && "/menu?filter=ice cream") ||
                (index === 3 && "/menu?filter=shakes") ||
                (index === 4 && "/menu?filter=house specalties")
              }
            >
              SEE All{" "}
              {(index === 0 && "SHAVED ICE") ||
                (index === 1 && "COMBOS") ||
                (index === 2 && "ICE CREAMS") ||
                (index === 3 && "SHAKES") ||
                (index === 4 && "SPECIALTIES")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
