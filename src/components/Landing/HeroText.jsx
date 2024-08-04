import React from "react";
import Link from "next/link";
import Button from "../Button";
import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa";

const HeroText = () => {
  return (
    <>
      <div className="flex-col self-start justify-between hidden min-[1350px]:w-6/12 h-full xl:flex">
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col">
            <p className="mb-5 text-sm text-text-subtext">
              HAWAIIAN SHAVED ICE
            </p>
            <p className="text-6xl font-semibold ">
              Taste <span className="text-primary">Paradise </span> with Every
              Bite
            </p>
          </div>
          <p className="font-light text-text-subtext">
            Providing not only the best product, but an excellent customer
            service. We stand for quality, values, and charm that only a family
            business can provide for 12 years
          </p>
          <Link href="/menu">
            <Button>SEE FULL MENU</Button>
          </Link>
        </div>
        <div className="absolute bottom-10">
          <div className="pb-4 font-light text-center">SEE MORE FROM US</div>
          <div className="flex w-1/2 text-4xl font-medium gap-x-5 max-sm:justify-center">
            <Link
              aria-label="Instagram"
              href="https://www.instagram.com/belowzeroshavedice/?hl=en"
              target="_blank"
              className="transition-all duration-300 ease-in-out hover:text-black/60"
            >
              <FaInstagram />
            </Link>
            <Link
              aria-label="Yelp"
              href="https://www.yelp.com/biz/below-zero-shaved-ice-upland"
              target="_blank"
              className="transition-all duration-300 ease-in-out hover:text-black/60"
            >
              <FaYelp />
            </Link>
            <Link
              aria-label="Facebook"
              href="https://www.facebook.com/p/Below-Zero-Shaved-Ice-100065604604709/"
              target="_blank"
              className="transition-all duration-300 ease-in-out hover:text-black/60"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>
      {/* TABLET */}
      <div className="flex flex-col justify-between w-full h-full pt-5 pr-5 max-sm:hidden xl:hidden">
        <div className="flex flex-col space-y-[12%] ">
          <div className="flex flex-col">
            <p className="mb-5 text-sm font-light text-text-subtext">
              HAWAIIAN SHAVED ICE
            </p>
            <p className="text-5xl font-semibold lg:text-6xl ">
              Taste <span className="text-primary">Paradise </span> with Every
              Bite
            </p>
          </div>
          <p className="font-light text-text-subtext">
            Providing not only the best product, but an excellent customer
            service. We stand for quality, values, and the charm that only a
            family business can provide for 12 years
          </p>
          <div className="text-base">
            <Button>SEE FULL MENU</Button>
          </div>
        </div>
        <div className="mt-10 ">
          <div className="pb-4 font-light">SEE MORE FROM US</div>
          <div className="flex text-4xl font-medium gap-x-5 max-sm:justify-center">
            <Link
              aria-label="Instagram"
              href="https://www.instagram.com/belowzeroshavedice/?hl=en"
              target="_blank"
              className="transition-all duration-300 ease-in-out hover:text-black/60"
            >
              <FaInstagram />
            </Link>
            <Link
              aria-label="Yelp"
              href="https://www.yelp.com/biz/below-zero-shaved-ice-upland"
              target="_blank"
              className="transition-all duration-300 ease-in-out hover:text-black/60"
            >
              <FaYelp />
            </Link>
            <Link
              aria-label="Facebook"
              href="https://www.facebook.com/p/Below-Zero-Shaved-Ice-100065604604709/"
              target="_blank"
              className="transition-all duration-300 ease-in-out hover:text-black/60"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="flex justify-center ">
        <div className="flex flex-col items-center justify-center p-5 text-center sm:hidden gap-y-7 min-[400px]:gap-y-3 mb-5 w-10/12 ">
          <div className="flex flex-col">
            <p className="font-light text-text-subtext">HAWAIIAN SHAVED ICE</p>
            <p className="text-5xl font-semibold ">
              Taste <span className="text-primary">Paradise </span> with Every
              Bite
            </p>
          </div>
          <p className="pt-2 pb-4 font-light text-text-subtext">
            Providing not only the best product, but an excellent customer
            service. We stand for quality, values, and charm that only a family
            business can provide for 12 years
          </p>
          <div className="pb-4 text-base">
            <Link href="/menu">
              <Button>SEE FULL MENU</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroText;
