import React from "react";
import Link from "next/link";
import Button from "../Button";
import { FaStar, FaStarHalf } from "react-icons/fa";

const HeroText = () => {
  return (
    <>
      <div className="flex-col self-start justify-between hidden w-1/3 h-full p-10 xl:flex">
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col">
            <p className="mb-5 text-text-subtext">HAWAIIAN SHAVED ICE</p>
            <p className="font-semibold text-7xl ">
              Taste <span className="text-primary">Paradise </span> with Every
              Bite
            </p>
          </div>
          <p className="text-text-subtext">
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
      <div className="flex flex-col self-end justify-between w-1/2 h-full p-10 max-sm:hidden xl:hidden">
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col">
            <p className="mb-5 text-text-subtext">HAWAIIAN SHAVED ICE</p>
            <p className="text-5xl font-semibold lg:text-7xl ">
              Taste <span className="text-primary">Paradise </span> with Every
              Bite
            </p>
          </div>
          <p className="text-text-subtext">
            Provide not only the best product, but an excellent customer
            service. We stand for quality, values and the charm that only a
            family business can provide for 12 years
          </p>
          <Button>SEE FULL MENU</Button>
        </div>
        <div className="">
          <div className="flex text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div>
            <span className="font-bold">4.3</span>
            (Yelp rating)
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="flex flex-col items-center justify-center p-5 text-center sm:hidden gap-y-7 min-[400px]:gap-y-3 mb-5">
        <div className="flex flex-col">
          <p className="text-text-subtext">HAWAIIAN SHAVED ICE</p>
          <p className="text-4xl font-semibold ">
            Taste <span className="text-primary">Paradise </span> with Every
            Bite
          </p>
        </div>
        <p className="text-text-subtext">
          Provide not only the best product, but an excellent customer service.
          We stand for quality, values and the charm that only a family business
          can provide for 12 years
        </p>
        <div className="text-sm">
          <Link href="/menu">
            <Button>SEE FULL MENU</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroText;
