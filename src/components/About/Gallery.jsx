import React from "react";
import Image from "next/image";
import Image1 from "/public/about/Gallery1.webp";
import Image2 from "/public/about/Gallery2.webp";
import Image3 from "/public/about/Gallery3.webp";
import Image4 from "/public/about/Gallery4.webp";
import Link from "next/link";
import { storeInfo } from "../../../public/data/store_info";

const Gallery = () => {
  return (
    <div className="flex flex-col px-5 sm:items-center sm:justify-center gap-y-10">
      <div className="flex flex-col items-start sm:items-center">
        <p className="mb-3 text-3xl font-semibold">OUR PRODUCT</p>
        <p className="font-light text-text-subtext sm:text-center">
          Because of our fine grade ice, we create the traditional Hawaiian
          shaved ice.
          <br className="max-sm:hidden" /> See more on our{" "}
          <Link
            aria-label="Instagram"
            target="_blank"
            href={storeInfo.instagram}
            className="font-medium text-black underline"
          >
            Instagram
          </Link>
        </p>
      </div>
      <div className="max-sm:w-full max-sm:pb-[25%] sm:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-7/12">
        <div className="grid grid-cols-2 gap-1">
          <Image src={Image1} alt="shaved ice" draggable={false} />
          <Image src={Image2} alt="shaved ice" draggable={false} />
          <Image src={Image3} alt="shaved ice" draggable={false} />
          <Image src={Image4} alt="shaved ice" draggable={false} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
