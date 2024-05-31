import React from "react";
import Link from "next/link";
import Image from "next/image";
import Storefront from "/public/storefront.webp";
import Button from "../Button";

const Services = () => {
  return (
    <>
      <div className="flex justify-center max-lg:py-[15%]  py-[6%] bg-secondary-background">
        <div className="sm:w-10/12 lg:w-8/12 flex max-sm:flex-col max-sm:items-center space-x-[7%]">
          <div className="sm:w-4/12 max-sm:w-10/12">
            <Image src={Storefront} alt="Landing" className="rounded-xl" />
          </div>
          <div className="flex flex-col justify-center max-sm:10/12 sm:w-7/12">
            <div className="max-sm:text-3xl sm:text-4xl font-semibold mb-[3%] max-sm:mt-[5%]">
              Twelve Years of <br className="max-lg:hidden" />{" "}
              <span className="text-primary">Serving</span>{" "}
              <br className="sm:hidden" /> Our Community
            </div>
            <div className="font-light text-text-subtext mb-[3%] max-lg:pb-4">
              We pride ourselves in making you feel just as home. Come and
              discover all our store has to offer. We have a great selection of
              delicious shaved ice flavors, shaved ice combos, ice cream and
              “House Specialties”.
            </div>
            <Link
              href="/services"
              className="transition-all duration-300 ease-in-out hover:text-black/60"
            >
              <Button>OUR SERVICES</Button>
            </Link>
            <div className="max-lg:hidden flex mt-[10%] space-x-[5%]">
              <div>
                <div className="pb-2 font-medium">CATERING</div>
                <div className="text-sm font-light text-text-subtext">
                  Treat your guests to an unforgettable experience with our
                  customizable menu options and dedicated catering services
                  tailored to your event`&#39;`s needs.
                </div>
              </div>
              <div>
                <div className="pb-2 font-medium">FUNDRAISING</div>
                <div className="text-sm font-light text-text-subtext">
                  Partner with us to turn your fundraising events into sweet
                  successes, offering our delicious treats as irresistible
                  incentives for your supporters.
                </div>
              </div>
              <div>
                <div className="pb-2 font-medium">EVENTS</div>
                <div className="text-sm font-light text-text-subtext">
                  Make your special occasions truly memorable with our
                  delightful treats and professional event services, ensuring
                  every moment is filled with joy and flavor.
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Services;
