"use client";
import { useRef } from "react";
import Link from "next/link";
import React from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storeInfo } from "../../../public/data/store_info";
import { FaYelp, FaInstagram, FaFacebook } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();
  const handleSend = (e) => {
    e.preventDefault();
    if (e.target[0].value && e.target[1].value && e.target[2].value) {
      emailjs
        .sendForm(
          "service_hy4bsvp",
          "template_9e567ar",
          form.current,
          "B0GWTfpimt3X7kH-y",
        )
        .then(
          (result) => {},
          (error) => {
            console.log(error.text);
          },
        )
        .finally(() => {
          e.target.reset();
          toast.success("We've sent your message!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Slide,
            theme: "colored",
          });
        });
    } else {
      toast.error("Message error! Check the form for any missing details.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
        theme: "colored",
      });
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center w-full p-5 sm:p-10 gap-x-20 gap-y-14">
      <ToastContainer />
      <div className="flex flex-col gap-y-7 max-[830px]:text-center max-lg:hidden">
        <div>
          <p className="text-xl font-semibold font-montserrat">LOCATION</p>
          <p>{storeInfo.address}</p>
          <p>{storeInfo.city_state}</p>
        </div>
        <div>
          <p className="text-xl font-semibold font-montserrat">STORE HOURS</p>
          <p>
            <span className="font-semibold">Monday</span>
            <span>: {storeInfo.hours.monday} </span>
          </p>
          <p>
            <span className="font-semibold">Tuesday</span>
            <span>: {storeInfo.hours.tuesday} </span>
          </p>
          <p>
            <span className="font-semibold">Wednesday</span>
            <span>: {storeInfo.hours.wednesday} </span>
          </p>
          <p>
            <span className="font-semibold">Thursday</span>
            <span>: {storeInfo.hours.thursday} </span>
          </p>
          <p>
            <span className="font-semibold">Friday</span>
            <span>: {storeInfo.hours.friday} </span>
          </p>
          <p>
            <span className="font-semibold">Saturday</span>
            <span>: {storeInfo.hours.saturday} </span>
          </p>
          <p>
            <span className="font-semibold">Sunday</span>
            <span>: {storeInfo.hours.sunday} </span>
          </p>
          {storeInfo.hours.closedOnRainyDays && (
            <span className="italic">Closed on rainy days</span>
          )}
        </div>
        <div>
          <p className="text-xl font-semibold font-montserrat">CONTACT</p>
          <Link target="_blank" href={`tel:${storeInfo.phoneNumber}`}>
            {storeInfo.phoneNumber}
          </Link>
          <Link
            target="_blank"
            href={`mailto:${storeInfo.email}`}
            className="text-black no-underline"
          >
            <p>{storeInfo.email}</p>
          </Link>
        </div>
        <div className="flex text-4xl font-medium gap-x-5 max-sm:justify-center ">
          <Link
            aria-label="Instagram"
            href={storeInfo.instagram}
            target="_blank"
            className="transition-all duration-300 ease-in-out hover:text-black/60"
          >
            <FaInstagram />
          </Link>
          <Link
            aria-label="Yelp"
            href={storeInfo.yelp}
            target="_blank"
            className="transition-all duration-300 ease-in-out hover:text-black/60"
          >
            <FaYelp />
          </Link>
          <Link
            aria-label="Facebook"
            href={storeInfo.facebook}
            target="_blank"
            className="transition-all duration-300 ease-in-out hover:text-black/60"
          >
            <FaFacebook />
          </Link>
        </div>
      </div>
      <div className="flex max-sm:flex-col max-sm:items-start max-sm:space-y-[6%] sm:space-x-[5%] text-black text-base lg:hidden justify-between w-full">
        <div className="flex flex-col w-full">
          <span className="mb-2 font-semibold">LOCATION</span>
          <span className="">583 E. Foothill Blvd. Suite #6</span>
          Upland, CA 91786
        </div>
        <div className="flex flex-col w-full">
          <span className="mb-2 font-semibold">STORE HOURS</span>
          <div className="flex flex-col w-full">
            <p>
              <span className="font-semibold">Monday</span>
              <span>: {storeInfo.hours.monday} </span>
            </p>
            <p>
              <span className="font-semibold">Tuesday</span>
              <span>: {storeInfo.hours.tuesday} </span>
            </p>
            <p>
              <span className="font-semibold">Wednesday</span>
              <span>: {storeInfo.hours.wednesday} </span>
            </p>
            <p>
              <span className="font-semibold">Thursday</span>
              <span>: {storeInfo.hours.thursday} </span>
            </p>
            <p>
              <span className="font-semibold">Friday</span>
              <span>: {storeInfo.hours.friday} </span>
            </p>
            <p>
              <span className="font-semibold">Saturday</span>
              <span>: {storeInfo.hours.saturday} </span>
            </p>
            <p>
              <span className="font-semibold">Sunday</span>
              <span>: {storeInfo.hours.sunday} </span>
            </p>
            {storeInfo.hours.closedOnRainyDays && (
              <span className="italic">Closed on rainy days</span>
            )}
          </div>
        </div>

        <div className="flex flex-col w-full">
          <span className="mb-2 font-semibold">CONTACT</span>
          <Link
            target="_blank"
            href={`tel:${storeInfo.phoneNumber}`}
            className="text-black no-underline"
          >
            {storeInfo.phoneNumber}
          </Link>
          <Link
            target="_blank"
            href={`mailto:${storeInfo.email}`}
            className="text-black no-underline"
          >
            {storeInfo.email}
          </Link>
          <div className="flex pt-2 text-3xl font-medium gap-x-3 max-sm:pt-[5%]">
            <Link
              aria-label="Instagram"
              href={storeInfo.instagram}
              target="_blank"
              className="transition-all duration-300 ease-in-out hover:text-black/60"
            >
              <FaInstagram />
            </Link>
            <Link
              aria-label="Yelp"
              href={storeInfo.yelp}
              target="_blank"
              className="transition-all duration-300 ease-in-out hover:text-black/60"
            >
              <FaYelp />
            </Link>
            <Link
              aria-label="Facebook"
              href={storeInfo.facebook}
              target="_blank"
              className="transition-all duration-300 ease-in-out hover:text-black/60"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>
      <form
        ref={form}
        onSubmit={handleSend}
        className="flex flex-col max-lg:w-full"
      >
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

          <div className="self-end">
            <input
              type="submit"
              value="LET'S CONNECT"
              className="px-6 py-2 font-medium text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer w-fit bg-primary hover:bg-primary/80 font-montserrat"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
