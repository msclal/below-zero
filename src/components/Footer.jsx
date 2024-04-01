import Image from "next/image";
import React from "react";
import KABOLogo from "/public/KABOLogo.svg";
import Link from "next/link";
import BelowZeroLogo from "/public/BelowZeroLogo.svg";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:items-center sm:justify-center bg-[#F3F6FA] py-[4%] max-sm:pl-[8%]">
        <div className="max-sm:w-[40%] sm:w-[20%] lg:w-[13%] max-sm:py-[5%]">
          <Image
            src={BelowZeroLogo}
            alt="Landing"
            layout="responsive"
            className=""
            width="1"
            height="1"
          />
        </div>

        <div className="flex max-sm:flex-col max-sm:items-start max-sm:space-y-[6%] sm:space-x-[5%] sm:w-10/12 lg:w-8/12 text-black mt-[3%] mb-[7%] text-base">
          <div className="flex flex-col w-full">
            <span className="font-semibold mb-2">LOCATION</span>
            <span className="">583 E. Foothill Blvd. Suite #6</span>
            Upland, CA 91786
          </div>

          <div className="flex flex-col w-full">
            <span className="font-semibold mb-2">STORE HOURS</span>
            <span>Tuesday-Saturday: 12:00PM-6:30PM</span>
            Sunday: 12:00PM - 6:00PM
          </div>

          <div className="flex flex-col w-full">
            <span className="font-semibold mb-2">CONTACT</span>
            <Link
              target="_blank"
              href={"tel:9099209230"}
              className="no-underline text-black"
            >
              (909) 920-9230
            </Link>
            <Link
              target="_blank"
              href="mailto:belowzeroshavedice@yahoo.com"
              className="no-underline text-black"
            >
              {" "}
              belowzeroshavedice@yahoo.com
            </Link>
          </div>
        </div>
        <div className="flex text-[#1C56A6] text-xs justify-center max-sm:pt-[10%] max-sm:pb-[5%]">
          <p className="flex items-center">MADE BY</p>
          <div className="w-[40px] mx-2">
            <Image
              src={KABOLogo}
              alt="Landing"
              layout="responsive"
              className=""
              width="1"
              height="1"
            />
          </div>
          <div className="border-l-[1px] border-[#1C56A6]">
            <div className="ml-2">
              <p>A</p>
              <p>FREELANCE</p>
              <p>WEB STUDIO</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
