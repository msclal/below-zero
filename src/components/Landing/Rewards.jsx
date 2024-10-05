import React from "react";
import Image from "next/image";
import MobileCards from "/public/landing/MobileRewards.webp";
import Button from "../Button";
import Link from "next/link";

const Rewards = () => {
  return (
    <div className="flex max-lg:py-[15%]  py-[7%] justify-center">
      <div className="flex justify-center max-sm:flex-col max-sm:w-10/12 sm:w-10/12 lg:w-8/12 max-sm:items-center">
        <div className="sm:hidden w-[100%] pb-[10%]">
          <Image src={MobileCards} alt="Rewards Card" draggable={false} />
        </div>
        <div className="flex flex-col justify-center w-7/12 space-y-5 max-sm:w-full max-sm:items-center sm:pr-16">
          <div className="text-4xl font-semibold">Rewards Card</div>
          <div className="font-light text-text-subtext max-sm:text-center">
            Ask for a Rewards Card! Just for being a part of our shaved ice
            family, you{"'"}ll earn points with every purchase. Find our
            location now! Please note, we do not combine rewards cards.
          </div>
          <Link href="/contact" className="w-fit">
            <Button>OUR LOCATION</Button>
          </Link>
        </div>
        <div className="w-3/4 max-sm:hidden ">
          <Image src={MobileCards} alt="Rewards Card" draggable={false} />
        </div>
      </div>
    </div>
  );
};

export default Rewards;
