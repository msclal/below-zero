import React from "react";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import CateringImage from "/public/services/catering.webp";

const Info = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-11/12 items-start py-8 pr-5 justify-evenly xl:justify-center gap-y-10 sm:flex-row gap-x-16 xl:gap-x-14 sm:gap-x-10">
        <div className="w-full h-[475px] sm:w-[400px] sm:h-[575px] relative">
          <Image
            src={CateringImage}
            alt="Below Zero Catering"
            priority={true}
            fill
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
          <p className="sm:text-sm xl:text-base text-text-subtext font-light">
            Our catering services extend beyond mere food provision;
            they`&#39;`re a testament to our commitment to excellence. Whether
            it`&#39;`s a corporate event demanding sophistication or a joyous
            wedding celebration, we tailor our offerings to meet your unique
            needs.
            <br />
            <br />
            Fundraising becomes a breeze with our delectable treats as
            irresistible incentives for your supporters. From intimate
            gatherings to grand affairs, our team ensures every event is infused
            with charm and flavor, leaving a lasting impression on all who
            attend.
          </p>
          <div>
            <Link href={"/contact"}>
              <Button>{"LET'S"} CONNECT</Button>
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Info;
