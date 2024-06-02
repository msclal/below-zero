import React from "react";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import CateringImage from "/public/catering/catering.webp";

const Info = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-start w-11/12 py-8 pr-5 justify-evenly xl:justify-center gap-y-10 lg:flex-row gap-x-16 xl:gap-x-14 lg:gap-x-10">
        <div className="w-full h-[475px] sm:w-[400px] sm:h-[575px] relative max-lg:m-auto">
          <Image
            src={CateringImage}
            alt="Below Zero Catering"
            priority={true}
            fill
            draggable={false}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="w-full space-y-10 xl:w-1/3 lg:w-1/2">
          <div className="space-y-2.5 text-4xl font-semibold block sm:hidden lg:block">
            <p>CATERING</p>
            <p>FUNDRAISING</p>
            <p>CORPORATE EVENTS</p>
            <p>WEDDINGS</p>
            <p>SPECIAL EVENTS</p>
          </div>
          <div className="space-y-2.5 text-4xl font-semibold max-sm:hidden lg:hidden">
            <p>
              {
                "CATERING, FUNDRAISING, CORPORATE EVENTS, WEDDINGS, SPECIAL EVENTS"
              }
            </p>
          </div>
          <p className="font-light text-text-subtext">
            Our catering services extend beyond mere food provision; they{"'"}re
            a testament to our commitment to excellence. Whether it{"'"}s a
            corporate event demanding sophistication or a joyous wedding
            celebration, we tailor our offerings to meet your unique needs.
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
      </div>
    </div>
  );
};

export default Info;
