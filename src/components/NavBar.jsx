"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import BelowZeroLogo from "/public/BelowZeroLogo.svg";
import Button from "./Button";

const NavBar = () => {
  const pathname = usePathname();
  const componentRef = useRef(null);
  const [scrolledFromTop, setScrolledFromTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 150) {
      setScrolledFromTop(true);
    } else {
      setScrolledFromTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div
      className={`z-10 flex justify-center bg-primary-background lg:mb-[2%] overflow-hidden  transition-all duration-200 h-24`}
    >
      <div
        className={`flex items-center justify-between w-11/12 max-sm:hidden transition-all duration-300`}
      >
        <Link
          href="/"
          className={`transition-all duration-300 cursor-pointer sm:w-[20%] lg:w-[13%] ${pathname === "/" && !scrolledFromTop && "sm:w-[35%] lg:w-[26%]"}`}
        >
          <Image src={BelowZeroLogo} alt="Below Zero logo" />
        </Link>
        <div className={`flex items-center w-fit sm:space-x-6 lg:space-x-12`}>
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
        className="flex items-center justify-between w-[95%] px-4 py-3 sm:hidden"
      >
        <Link href="/" className="w-[55%] py-[5%]">
          <Image src={BelowZeroLogo} alt="Below Zero logo" />
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
              <Link href="/" className="hover:text-border">
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
