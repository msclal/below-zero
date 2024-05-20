import React from "react";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import CateringImage from "/public/services/catering.png";

const Info = () => {
  return (
    <div className="flex flex-col items-start p-5 justify-evenly xl:justify-center gap-y-10 sm:flex-row gap-x-16 xl:gap-x-14 sm:gap-x-10">
      <div className="w-full h-[475px] sm:w-[400px] sm:h-[575px] relative">
        <Image
          src={CateringImage}
          alt="Below Zero Catering"
          priority={true}
          fill
          sizes="auto"
          draggable={false}
          className="object-cover rounded-xl"
        />
      </div>
      <div className="w-full space-y-10 xl:w-1/3 sm:w-1/2">
        <div className="space-y-2.5 text-4xl font-semibold">
          <p>CATERING</p>
          <p>FUNDRAISING</p>
          <p>CORPORATE EVENTS</p>
          <p>WEDDINGS</p>
          <p>SPECIAL EVENTS</p>
        </div>
        <p className="sm:text-sm xl:text-base">
          Our Shaved Ice story begun upon visiting Hawaii. We fell in love not
          only with the beauty of {"it's"} beaches and hospitable people, but
          with this refreshing, fluffy and mouth melting deliciousness that
          every one was talking about.
          <br />
          <br />
          It was love at the first sight! We said to ourselves how come we
          {" don't"} see much of it in the states.
          <br />
          <br />
          Of course, you {"can't"} find what you are not loo for. So we started
          on a quest to find the right product with the same quality but there
          {" wasn't"}
        </p>
        <div>
          <Link href={"/contact"}>
            <Button>{"LET'S"} CONNECT</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
