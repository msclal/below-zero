import React from "react";
import Image from "next/image";
import RewardCards from "/public/Rewards.png";

const Rewards = () => {
  return (
    <div className="pt-36 flex">
      <div>
        <div className="font-semibold text-3xl">Rewards Card</div>
        <div className="font-light text-text-subtext">
          Ask for a Rewards Card! Just for being a part of our shaved ice
          family, you&#39;ll earn points with every purchase. Accumulate enough
          points and watch as your favorite frosty treat becomes absolutely
          FREE. Find our location now!
        </div>
      </div>
      <div className="w-4/12">
        <Image
          src={RewardCards}
          alt="Landing"
          layout="responsive"
          className=""
          width="1"
          height="1"
        />
      </div>{" "}
    </div>
  );
};

export default Rewards;
