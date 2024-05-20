"use client";
import Image from "next/image";
import { motion } from "framer-motion";
// import { Link as ScrollLink } from "react-scroll";
import BelowZeroLogo from "/public/BelowZeroLogo.svg";
import Button from "./Button";
import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const NavBar = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <div className="z-10 flex justify-center bg-primary-background lg:mb-[2%]">
      <div className="flex items-center justify-between w-11/12 py-6 max-sm:hidden">
        <Link
          href="/"
          className="max-sm:w-[40%] sm:w-[20%] lg:w-[13%] max-sm:py-[5%]"
        >
          <Image src={BelowZeroLogo} alt="Landing" />
        </Link>
        <div className="flex items-center w-fit sm:space-x-6 lg:space-x-12">
          <Link
            href="/"
            className="transition-all duration-300 ease-in-out hover:text-black/60"
          >
            HOME
          </Link>
          <Link
            href="/menu"
            className="transition-all duration-300 ease-in-out hover:text-black/60"
          >
            MENU
          </Link>
          <Link
            href="/about"
            className="transition-all duration-300 ease-in-out hover:text-black/60"
          >
            ABOUT
          </Link>
          <a
            href="/services"
            className="transition-all duration-300 ease-in-out hover:text-black/60"
          >
            SERVICES
          </a>
          <Link href="/contact">
            <Button>CONTACT</Button>
          </Link>
        </div>
      </div>
      <div
        ref={componentRef}
        className="sm:hidden w-full flex justify-between items-center px-4 py-3 max-sm:w-[90%] sm:w-[20%] lg:w-[13%]"
      >
        <Link
          href="/"
          className="max-sm:w-[40%] sm:w-[20%] lg:w-[13%] max-sm:py-[5%]"
        >
          <Image src={BelowZeroLogo} alt="Landing" className="" />
        </Link>
        <div
          ref={componentRef}
          className="text-2xl font-bold text-primary"
          onClick={() => setToggle(!toggle)}
        >
          <RxHamburgerMenu className="stroke-[0.5px]" />
        </div>
      </div>
      {toggle && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.07 } }}
          exit={{ opacity: 0, y: 0 }}
          className="sm:hidden w-full absolute z-10 top-[100%] "
        >
          <div>
            <div className="bg-primary text-white flex font-outfit flex-col justify-left items-left space-y-[7%] w-full px-[10%] py-[5%]">
              <Link href="/home" className="hover:text-border">
                HOME
              </Link>
              <Link href="/menu" className="hover:text-border">
                MENU
              </Link>
              <Link href="/about" className="hover:text-border">
                ABOUT
              </Link>
              <a href="/services" className="hover:text-border">
                SERVICES
              </a>
              <Link href="/contact">
                <div className="px-6 py-2 font-medium text-white transition-all duration-300 ease-in-out border-2 border-white rounded-md cursor-pointer w-fit hover:bg-white hover:text-primary font-montserrat">
                  CONTACT
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
