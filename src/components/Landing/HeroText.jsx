import React from "react";
import Link from "next/link";
import Button from "../Button";
import { FaStar, FaStarHalf } from "react-icons/fa";

const HeroText = () => {
  return (
    <>
      <div className="flex-col self-start  justify-between hidden min-[1350px]:w-6/12 h-full xl:flex">
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col">
            <p className="mb-5 text-text-subtext">HAWAIIAN SHAVED ICE</p>
            <p className="font-semibold text-6xl ">
              Taste <span className="text-primary">Paradise </span> with Every
              Bite
            </p>
          </div>
          <p className="text-text-subtext font-light">
            Provide not only the best product, but an excellent customer
            service. We stand for quality, values and the charm that only a
            family business can provide for 12 years
          </p>
          <Link href="/menu">
            <Button>SEE FULL MENU</Button>
          </Link>
        </div>
        <div className="absolute bottom-10">
          <div className="flex text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </div>
          <div>
            Visit our{" "}
            <Link
              href="https://www.yelp.com/biz/below-zero-shaved-ice-upland"
              target="_blank"
              className="underline transition-all duration-300 ease-in-out hover:text-black/60 underline-offset-2"
            >
              Yelp
            </Link>
          </div>
        </div>
      </div>
      {/* TABLET */}
      <div className="flex flex-col pt-5 pr-5 justify-between w-full h-full max-sm:hidden xl:hidden">
        <div className="flex flex-col space-y-[12%] ">
          <div className="flex flex-col">
            <p className="mb-5 text-text-subtext font-light text-sm">
              HAWAIIAN SHAVED ICE
            </p>
            <p className="text-5xl font-semibold lg:text-6xl ">
              Taste <span className="text-primary">Paradise </span> with Every
              Bite
            </p>
          </div>
          <p className="text-text-subtext font-light">
            Provide not only the best product, but an excellent customer
            service. We stand for quality, values and the charm that only a
            family business can provide for 12 years
          </p>
          <div className="text-sm">
            <Button>SEE FULL MENU</Button>
          </div>
        </div>
        <div className="mt-10 ">
          <div className="flex text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div>
            <span className="font-medium">4.3 </span>
            (Yelp rating)
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center p-5 text-center sm:hidden gap-y-7 min-[400px]:gap-y-3 mb-5 w-10/12 ">
          <div className="flex flex-col">
            <p className="text-text-subtext font-light">HAWAIIAN SHAVED ICE</p>
            <p className="text-5xl font-semibold ">
              Taste <span className="text-primary">Paradise </span> with Every
              Bite
            </p>
          </div>
          <p className="text-text-subtext font-light pt-2 pb-4">
            Provide not only the best product, but an excellent customer
            service. We stand for quality, values and the charm that only a
            family business can provide for 12 years
          </p>
          <div className="text-sm pb-4">
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
