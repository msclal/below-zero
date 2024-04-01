import Link from "next/link";
import React from "react";
import { FaYelp, FaInstagram, FaFacebook } from "react-icons/fa";
import Button from "../Button";

const ContactForm = () => {
  return (
    <div className="flex flex-wrap-reverse items-center justify-center w-full p-5 sm:p-10 gap-x-20 gap-y-14">
      <div className="flex flex-col gap-y-7 max-[830px]:text-center">
        <div>
          <p className="text-xl font-semibold font-montserrat">LOCATION</p>
          <p>583 E Foothill Blvd Ste 6</p>
          <p>Upland, CA 91786</p>
        </div>
        <div>
          <p className="text-xl font-semibold font-montserrat">STORE HOURS</p>
          <p>Monday: Closed</p>
          <p>Mon-Sat: 12PM - 6:30PM</p>
          <p>Sunday: 12PM - 6PM</p>
        </div>
        <div>
          <p className="text-xl font-semibold font-montserrat">CONTACT</p>
          <p>(909) 899-9998</p>
          <p>belowzeroshavedice@yahoo.com</p>
        </div>
        <div className="flex text-4xl font-medium gap-x-5 max-sm:justify-center">
          <Link
            href="https://www.instagram.com/belowzeroshavedice/?hl=en"
            target="_blank"
            className="transition-all duration-300 ease-in-out hover:text-black/60"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.yelp.com/biz/below-zero-shaved-ice-upland"
            target="_blank"
            className="transition-all duration-300 ease-in-out hover:text-black/60"
          >
            <FaYelp />
          </Link>
          <Link
            href="https://www.facebook.com/p/Below-Zero-Shaved-Ice-100065604604709/"
            target="_blank"
            className="transition-all duration-300 ease-in-out hover:text-black/60"
          >
            <FaFacebook />
          </Link>
        </div>
      </div>
      <div className="flex flex-col max-sm:w-full">
        <p className="mb-3 text-3xl font-semibold lg:mb-2 font-montserrat">
          SEND A MESSAGE
        </p>
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-3 max-sm:flex-col max-sm:gap-y-5">
            <input
              placeholder="Name"
              className="px-3 py-1 border rounded-md sm:px-5 border-border"
            />
            <input
              placeholder="Email"
              className="px-3 py-1 border rounded-md sm:px-5 border-border"
            />
          </div>
          <textarea
            placeholder="Type your message here..."
            name="message"
            className="h-[250px] w-full lg:w-[600px] px-3 sm:px-5 py-3 border rounded-md resize-none border-border"
            id=""
          />
          <div className="self-end ">
            <Button>{"LET'S"} CONNECT</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
