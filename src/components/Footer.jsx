import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import KABOLogo from "/public/KABOLogo.svg";
import BelowZeroLogo from "/public/BelowZeroLogo.svg";
import BelowZeroIcon from "/public/BelowZeroIcon.svg";
import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Marquee
        autoFill
        speed={75}
        className="py-2.5 text-5xl xl:text-8xl font-semibold sm:p-5 bg-primary font-outfit absolute -z-[10] text-white"
      >
        BELOW ZERO SHAVED ICE
        <div className="w-3/4 px-4 mx-auto sm:px-10 sm:w-4/5 xl:w-full">
          <Image src={BelowZeroIcon} alt="Below Zero Icon" draggable={false} />
        </div>
      </Marquee>

      {/* FOOOTER */}
      <div className="flex flex-col sm:items-center sm:justify-center bg-secondary-background py-[4%] max-sm:pl-[8%]">
        <div className="max-sm:w-[40%] sm:w-[20%] lg:w-[13%] max-sm:py-[5%]">
          <Image src={BelowZeroLogo} alt="Below Zero logo" draggable={false} />
        </div>

        <div className="flex max-sm:flex-col max-sm:items-start max-sm:space-y-[6%] sm:space-x-[5%] sm:w-10/12 lg:w-8/12 text-black mt-[3%] mb-[7%] text-base">
          <div className="flex flex-col w-full">
            <span className="mb-2 font-semibold">LOCATION</span>
            <span className="">583 E. Foothill Blvd. Suite #6</span>
            Upland, CA 91786
          </div>

          <div className="flex flex-col w-full">
            <span className="mb-2 font-semibold">STORE HOURS</span>
            <span>Monday: Closed </span>
            <span>Mon-Sat: 12PM - 6:30PM</span>
            <span>Sunday: 12PM - 6PM</span>
          </div>

          <div className="flex flex-col w-full">
            <span className="mb-2 font-semibold">CONTACT</span>
            <Link
              target="_blank"
              href={"tel:9099209230"}
              className="text-black no-underline"
            >
              (909) 920-9230
            </Link>
            <Link
              target="_blank"
              href="mailto:belowzeroshavedice@yahoo.com"
              className="text-black no-underline"
            >
              belowzeroshavedice@yahoo.com
            </Link>
            <div className="flex pt-2 text-2xl font-medium gap-x-3">
              <Link
                href="https://www.instagram.com/belowzeroshavedice/?hl=en"
                target="_blank"
                className="transition-all duration-300 ease-in-out hover:text-black/60"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.yelp.com/biz/below-zero-shaved-ice-upland"
                target="_blank"
                className="transition-all duration-300 ease-in-out hover:text-black/60"
              >
                <FaYelp />
              </Link>
              <Link
                href="https://www.facebook.com/p/Below-Zero-Shaved-Ice-100065604604709/"
                target="_blank"
                className="transition-all duration-300 ease-in-out hover:text-black/60"
              >
                <FaFacebook />
              </Link>
            </div>
          </div>
        </div>
        <Link
          target="_blank"
          href="mailto:kabo.blueprint@gmail.com"
          className="flex text-primary text-xs justify-center max-sm:pt-[10%] max-sm:pb-[5%]"
        >
          <p className="flex items-center">MADE BY</p>
          <div className="w-[40px] mx-2">
            <Image
              src={KABOLogo}
              alt="KABO Logo"
              layout="responsive"
              draggable={false}
              className=""
              width="1"
              height="1"
            />
          </div>
          <div className="border-l-[1px] border-primary">
            <div className="ml-2">
              <p>A</p>
              <p>FREELANCE</p>
              <p>WEB STUDIO</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Footer;
