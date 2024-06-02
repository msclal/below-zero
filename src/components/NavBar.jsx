"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import BelowZeroLogo from "/public/BelowZeroLogo.svg";
import Button from "./Button";
import Marquee from "react-fast-marquee";
import IceCreamBanner from "/public/IceCreamBanner.webp";

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
    <>
      {/* MARQUEE */}
      {pathname === "/" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.02 } }}
          exit={{ opacity: 0 }}
        >
          <Marquee autoFill speed={30}>
            <Image
              src={IceCreamBanner}
              alt="Below Zero banner"
              layout="responsive"
              draggable="false"
              priority={true}
            />
          </Marquee>
        </motion.div>
      )}

      {/* NAVBAR */}

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.02 } }}
        exit={{ opacity: 0, y: 0 }}
        className={`sticky top-0 z-[100]`}
        // className={`${pathname === "/" || (pathname === "/catering" && `sticky top-0 z-[100]`)}`}
      >
        <div
          className={`z-10 flex justify-center bg-primary-background lg:mb-[2%] overflow-hidden  transition-all duration-300 h-16 sm:h-[88px]`}
        >
          <motion.div
            className={`flex items-center justify-between w-11/12 max-sm:hidden transition-all duration-300`}
          >
            <Link
              href="/"
              className={`transition-all duration-300 cursor-pointer sm:w-[20%] lg:w-[13%] ${!scrolledFromTop && "sm:w-[35%] lg:w-[26%]"}`}
              // className={`transition-all duration-300 cursor-pointer sm:w-[20%] lg:w-[13%] ${pathname === "/" && !scrolledFromTop && "sm:w-[35%] lg:w-[26%]"}`}
            >
              <Image
                src={BelowZeroLogo}
                alt="Below Zero logo"
                draggable={false}
              />
            </Link>
            <div
              className={`flex items-center w-fit sm:space-x-6 lg:space-x-12`}
            >
              <Link
                href="/"
                className="transition-all duration-300 ease-in-out hover:text-text-subtext"
              >
                HOME
              </Link>
              <Link
                href="/menu"
                className="transition-all duration-300 ease-in-out hover:text-text-subtext"
              >
                MENU
              </Link>
              <Link
                href="/about"
                className="transition-all duration-300 ease-in-out hover:text-text-subtext"
              >
                ABOUT
              </Link>
              <a
                href="/catering"
                className="transition-all duration-300 ease-in-out hover:text-text-subtext"
              >
                CATERING
              </a>
              <Link href="/contact">
                <Button>CONTACT</Button>
              </Link>
            </div>
          </motion.div>
          {/* MOBILE NAV */}
          <div
            ref={componentRef}
            className={`flex items-center justify-between px-5 sm:hidden`}
          >
            <Link href="/" className="w-[55%]">
              <Image
                src={BelowZeroLogo}
                alt="Below Zero logo"
                draggable={false}
              />
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
              animate={{ opacity: 1, x: 0, transition: { delay: 0.08 } }}
              exit={{ opacity: 0, y: 0 }}
              className="sm:hidden w-full absolute z-10 top-[100%] "
            >
              <div className="bg-primary text-white flex font-outfit flex-col justify-left items-left space-y-[7%] w-full px-[10%] py-[5%]">
                <Link href="/" className="hover:text-text-subtext">
                  HOME
                </Link>
                <Link href="/menu" className="hover:text-text-subtext">
                  MENU
                </Link>
                <Link href="/about" className="hover:text-text-subtext">
                  ABOUT
                </Link>
                <a href="/catering" className="hover:text-text-subtext">
                  CATERING
                </a>
                <Link href="/contact">
                  <div className="px-6 py-2 font-medium text-white transition-all duration-300 ease-in-out border-2 border-white rounded-md cursor-pointer w-fit hover:bg-white hover:text-primary font-montserrat">
                    CONTACT
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
