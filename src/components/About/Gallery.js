import React from "react";
import Image from "next/image";
import Sample from "@/about/sample.png";
import Link from "next/link";
const Gallery = () => {
  return (
    <div className="flex flex-col px-5 sm:items-center sm:justify-center gap-y-10">
      <div className="flex flex-col items-start sm:items-center">
        <p className="mb-3 text-3xl font-semibold">OUR PRODUCT</p>
        <p>
          Because of the fine grade of ice it creates typical of traditional
          Hawaiian shaved ice.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-1 sm:w-3/4 sm:grid-cols-4 lg:grid-cols-4">
        <Link
          href="https://www.instagram.com/belowzeroshavedice/?hl=en"
          target="_blank"
          className="relative w-full bg-secondary-background aspect-square"
        >
          <Image
            src={Sample}
            alt="shaved ice"
            priority={true}
            fill
            draggable={false}
            className="object-cover"
          />
        </Link>
        <Link
          href="https://www.instagram.com/belowzeroshavedice/?hl=en"
          target="_blank"
          className="relative w-full bg-secondary-background aspect-square"
        >
          <Image
            src={Sample}
            alt="shaved ice"
            priority={true}
            fill
            draggable={false}
            className="object-cover"
          />
        </Link>
        <Link
          href="https://www.instagram.com/belowzeroshavedice/?hl=en"
          target="_blank"
          className="relative w-full bg-secondary-background aspect-square"
        >
          <Image
            src={Sample}
            alt="shaved ice"
            priority={true}
            fill
            draggable={false}
            className="object-cover"
          />
        </Link>
        <Link
          href="https://www.instagram.com/belowzeroshavedice/?hl=en"
          target="_blank"
          className="relative w-full bg-secondary-background aspect-square"
        >
          <Image
            src={Sample}
            alt="shaved ice"
            priority={true}
            fill
            draggable={false}
            className="object-cover"
          />
        </Link>
        <Link
          href="https://www.instagram.com/belowzeroshavedice/?hl=en"
          target="_blank"
          className="relative w-full bg-secondary-background aspect-square"
        >
          <Image
            src={Sample}
            alt="shaved ice"
            priority={true}
            fill
            draggable={false}
            className="object-cover"
          />
        </Link>
        <Link
          href="https://www.instagram.com/belowzeroshavedice/?hl=en"
          target="_blank"
          className="relative w-full bg-secondary-background aspect-square"
        >
          <Image
            src={Sample}
            alt="shaved ice"
            priority={true}
            fill
            draggable={false}
            className="object-cover"
          />
        </Link>
        <Link
          href="https://www.instagram.com/belowzeroshavedice/?hl=en"
          target="_blank"
          className="relative hidden w-full sm:block bg-secondary-background aspect-square"
        >
          <Image
            src={Sample}
            alt="shaved ice"
            priority={true}
            fill
            draggable={false}
            className="object-cover"
          />
        </Link>
        <Link
          href="https://www.instagram.com/belowzeroshavedice/?hl=en"
          target="_blank"
          className="relative hidden w-full sm:block bg-secondary-background aspect-square"
        >
          <Image
            src={Sample}
            alt="shaved ice"
            priority={true}
            fill
            draggable={false}
            className="object-cover"
          />
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
