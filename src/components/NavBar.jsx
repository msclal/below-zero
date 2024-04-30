"use client";
import Image from "next/image";
// import { Link as ScrollLink } from "react-scroll";
import BelowZeroLogo from "/public/BelowZeroLogo.svg";
import Button from "./Button";
import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
// import Link from "next/link";

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
    <div>
      <div className="flex fixed justify-center bg-primary-background">
        <div className="max-sm:hidden flex justify-between items-center w-11/12 py-6 ">
          <div className="max-sm:w-[40%] sm:w-[20%] lg:w-[13%] max-sm:py-[5%]">
            <Image
              src={BelowZeroLogo}
              alt="Landing"
              layout="responsive"
              className=""
              width="1"
              height="1"
            />
          </div>
          <div className="flex items-center w-fit sm:space-x-6  lg:space-x-12">
            <p>HOME</p>
            <p>MENU</p>
            <p>ABOUT</p>
            <p>SERVICES</p>
            <Button>CONTACT</Button>
          </div>
        </div>
        <div
          ref={componentRef}
          className="sm:hidden w-full flex justify-between items-center px-4 py-3 max-sm:w-[90%] sm:w-[20%] lg:w-[13%]"
        >
          <div className="max-sm:w-[40%] sm:w-[20%] lg:w-[13%] max-sm:py-[5%]">
            <Image
              src={BelowZeroLogo}
              alt="Landing"
              layout="responsive"
              className=""
              width="1"
              height="1"
            />
          </div>
          <div
            ref={componentRef}
            className="text-xl text-primary font-bold"
            onClick={() => setToggle(!toggle)}
          >
            <RxHamburgerMenu />
          </div>
        </div>
        {toggle && (
          <>
            <div className="sm:hidden w-full absolute top-[80%] ">
              <div>
                <div className="bg-primary text-white flex font-outfit flex-col justify-left items-left space-y-[7%] w-full px-[10%] py-[5%]">
                  <p>HOME</p>
                  <p>MENU</p>
                  <p>ABOUT</p>
                  <p>SERVICES</p>
                  <p>CONTACT</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
