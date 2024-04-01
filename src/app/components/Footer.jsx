import Image from "next/image";
import React from "react";
import KABOLogo from "/public/KABOLogo.svg";
import BelowZeroLogo from "/public/BelowZeroLogo.svg";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#F3F6FA] py-[4%]">
        <div className="w-[13%]">
          <Image
            src={BelowZeroLogo}
            alt="Landing"
            layout="responsive"
            className=""
            width="1"
            height="1"
          />
        </div>

        <div className="flex space-x-[5%] w-8/12 text-black mt-[3%] mb-[7%]">
          <div className="flex flex-col w-full">
            <span className="font-semibold mb-2">LOCATION</span>
            <span className="">583 E. Foothill Blvd. Suite #6</span>
            Upland, CA 91786
          </div>
          <div className="flex flex-col w-full">
            <span className="font-semibold mb-2">STORE HOURS</span>
            <span>Tuesday-Saturday: 12:00PM-6:30PM</span>Sunday 12:00PM - 6:00PM
          </div>
          <div className="flex flex-col w-full">
            <span className="font-semibold mb-2">CONTACT</span>
            <span className="">
              (909) 920-9230 belowzeroshavedice@yahoo.com
            </span>
          </div>
        </div>
        <div className="flex text-[#1C56A6] text-xs justify-center">
          <p className="flex items-center">MADE BY</p>
          <div className="w-[3%] mx-2">
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
