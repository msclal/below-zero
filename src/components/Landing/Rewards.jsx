import React from "react";
import Image from "next/image";
import MobileCards from "/public/MobileRewards.webp";
import Button from "../Button";

const Rewards = () => {
  return (
    <div className="flex py-[5%] pt-36 justify-center">
      <div className="flex max-sm:flex-col w-10/12 justify-center max-sm:items-center space-x-[8%]">
        <div className="sm:hidden w-[100%] pb-[10%]">
          <Image
            src={MobileCards}
            alt="Landing"
            layout="responsive"
            className=""
            width="1"
            height="1"
          />
        </div>{" "}
        <div className="flex flex-col max-sm:w-full max-sm:items-center justify-center space-y-5 w-7/12">
          <div className="font-semibold text-4xl">Rewards Card</div>
          <div className="font-light text-text-subtext max-sm:text-center">
            Ask for a Rewards Card! Just for being a part of our shaved ice
            family, you&#39;ll earn points with every purchase. Accumulate
            enough points and watch as your favorite frosty treat becomes
            absolutely FREE. Find our location now!
          </div>
          <div className="w-fit">
            <Button>OUR LOCATION</Button>
          </div>
        </div>
        <div className="max-sm:hidden w-3/4 ">
          <Image
            src={MobileCards}
            alt="Landing"
            layout="responsive"
            className=""
            width="1"
            height="1"
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default Rewards;
