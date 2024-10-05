import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import KABOLogo from "/public/KABOLogo.svg";
import BelowZeroLogo from "/public/BelowZeroLogo.svg";
import BelowZeroIcon from "/public/BelowZeroIcon.svg";
import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa";
import { storeInfo } from "../../public/data/store_info";
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
            <span className="">{storeInfo.address}</span>
            {storeInfo.city_state}
          </div>

          <div className="flex flex-col w-full">
            <span className="mb-2 font-semibold">STORE HOURS</span>
            <span>{storeInfo.hours}</span>
          </div>

          <div className="flex flex-col w-full">
            <span className="mb-2 font-semibold">CONTACT</span>
            <Link
              target="_blank"
              href={`tel:${storeInfo.phoneNumber}`}
              className="text-black no-underline"
            >
              {storeInfo.phoneNumber}
            </Link>
            <Link
              target="_blank"
              href={`mailto:${storeInfo.email}`}
              className="text-black no-underline"
            >
              {storeInfo.email}
            </Link>
            <div className="flex pt-2 text-2xl font-medium gap-x-3">
              <Link
                aria-label="Instagram"
                href={storeInfo.instagram}
                target="_blank"
                className="transition-all duration-300 ease-in-out hover:text-black/60"
              >
                <FaInstagram />
              </Link>
              <Link
                aria-label="Yelp"
                href={storeInfo.yelp}
                className="transition-all duration-300 ease-in-out hover:text-black/60"
              >
                <FaYelp />
              </Link>
              <Link
                aria-label="Facebook"
                href={storeInfo.facebook}
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
