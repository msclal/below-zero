import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Image from "next/image";

import BlueArrow from "/public/landing/BlueArrow.png";
import RedArrow from "/public/landing/RedArrow.png";
const Filters = ({ selectedMenuItem, onMenuItemClick }) => {
  return (
    <div className="relative flex flex-col justify-between w-full min-[1350px]:w-5/12 h-full self-start font-outfit">
      <div className="flex flex-col">
        <motion.div
          className={`${selectedMenuItem === 0 && "bg-secondary-filter text-primary "} p-6 rounded-lgcursor-pointer transition-all duration-300 ease-in-out `}
          onClick={() => onMenuItemClick(0)}
        >
          <p className="mb-3 font-semibold">SHAVED ICE</p>
          <p className="text-sm font-light text-text-subtext">
            Hawaiian shaved ice with perfectly curated syrups made in-house
          </p>
        </motion.div>
        <motion.div
          className={`${selectedMenuItem === 1 && "bg-secondary-filter text-primary"} p-6 rounded-lg cursor-pointer transition-all duration-300 ease-in-out `}
          onClick={() => onMenuItemClick(1)}
        >
          <p className="mb-3 font-semibold">SHAVED ICE COMBO</p>
          <p className="text-sm font-light text-text-subtext">
            Hawaiian shaved ice with perfectly curated syrups made in-house
          </p>
        </motion.div>
        <motion.div
          className={`${selectedMenuItem === 2 && "bg-secondary-filter text-primary"} p-6 rounded-lg cursor-pointer transition-all duration-300 ease-in-out `}
          onClick={() => onMenuItemClick(2)}
        >
          <p className="mb-3 font-semibold">ICE CREAM</p>
          <p className="text-sm font-light text-text-subtext">
            Hawaiian shaved ice with perfectly curated syrups made in-house
          </p>
        </motion.div>
        <motion.div
          className={`${selectedMenuItem === 3 && "bg-secondary-filter text-primary"} p-6 rounded-lg cursor-pointer transition-all duration-300 ease-in-out `}
          onClick={() => onMenuItemClick(3)}
        >
          <p className="mb-3 font-semibold">SHAKES</p>
          <p className="text-sm font-light text-text-subtext">
            Hawaiian shaved ice with perfectly curated syrups made in-house
          </p>
        </motion.div>
        <motion.div
          className={`${selectedMenuItem === 4 && "bg-secondary-filter text-primary"} p-6 rounded-lg cursor-pointer transition-all duration-300 ease-in-out `}
          onClick={() => onMenuItemClick(4)}
        >
          <p className="mb-3 font-semibold">HOUSE SPECIALTIES</p>
          <p className="text-sm font-light text-text-subtext">
            Hawaiian shaved ice with perfectly curated syrups made in-house
          </p>
        </motion.div>
      </div>
      <Image
        src={
          (selectedMenuItem === 0 && BlueArrow) ||
          (selectedMenuItem === 1 && RedArrow) ||
          (selectedMenuItem === 2 && BlueArrow) ||
          (selectedMenuItem === 3 && RedArrow) ||
          (selectedMenuItem === 4 && BlueArrow)
        }
        alt="arrow"
        className="absolute -rotate-[22deg] bottom-10 -left-32 -z-[100] w-16"
      />
      <Link
        href={
          (selectedMenuItem === 0 && "/menu?filter=shaved ice") ||
          (selectedMenuItem === 1 && "/menu?filter=shaved ice combos") ||
          (selectedMenuItem === 2 && "/menu?filter=ice cream") ||
          (selectedMenuItem === 3 && "/menu?filter=shakes") ||
          (selectedMenuItem === 4 && "/menu?filter=house specalties")
        }
        className="transition-all duration-300 ease-in-out hover:text-black/60"
      >
        <motion.div
          className={`${(selectedMenuItem === 0 && "bg-below-zero-blue-200 hover:bg-below-zero-blue-200/80") || (selectedMenuItem === 1 && "bg-below-zero-red-200 hover:bg-below-zero-red-200/80") || (selectedMenuItem === 2 && "bg-below-zero-yellow-200 hover:bg-below-zero-yellow-200/80") || (selectedMenuItem === 3 && "bg-below-zero-purple-200 hover:bg-below-zero-purple-200/80") || (selectedMenuItem === 4 && "bg-below-zero-green-200 hover:bg-below-zero-green-200/80")} rounded-md px-6 py-2 font-semibold transition-all duration-300 ease-in-out font-montserrat mt-10 text-white text-center mb-10 `}
        >
          SEE All{" "}
          {(selectedMenuItem === 0 && "SHAVED ICE") ||
            (selectedMenuItem === 1 && "COMBOS") ||
            (selectedMenuItem === 2 && "ICE CREAMS") ||
            (selectedMenuItem === 3 && "SHAKES") ||
            (selectedMenuItem === 4 && "SPECIALTIES")}
        </motion.div>
      </Link>
    </div>
  );
};

export default Filters;
