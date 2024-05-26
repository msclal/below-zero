import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BelowZeroIcon from "/public/Icon2.svg";

const error = () => {
  return (
    <>
      <div className="flex max-sm:pl-[8%] max-sm:flex-col max-sm:justify-start max-sm:items-start justify-center items-center pb-[10%] pt-[5%]">
        <div className="w-2/12 pr-[3%] max-sm:hidden">
          <Image
            src={BelowZeroIcon}
            alt="Landing"
            layout="responsive"
            className=""
          />{" "}
        </div>
        <div className="max-sm:w-7/12 w-5/12 space-y-[4%] max-lg:flex max-lg:flex-col">
          <div className="flex flex-col">
            <p className="text-text-subtext font-light max-xl:pb-4 lg:pb-[2%] ">
              404
            </p>
            <p className="font-semibold xl:text-6xl max-lg:text-4xl  lg:text-5xl">
              Oops! Page Not Found
            </p>
            <p className="text-text-subtext font-light pt-[3%]">
              Oops! Sorry, the page you are looking for doesn&#39;t exist or has
              been moved. Let&#39;s go back home and try that again.
            </p>
          </div>

          <div className="max-sm:pt-5">
            <Link href="/">
              <Button>GO HOME</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default error;
