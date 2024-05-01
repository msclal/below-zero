import React from "react";
import Image from "next/image";

const MenuItem = ({ name, picture, description }) => {
  return (
    <>
      <div className="flex w-3/12 items-center flex-col">
        <div className="">
          <Image
            src={picture}
            alt="Thrifty Logo"
            layout="responsive"
            className="rounded-xl"
            width="1"
            height="1"
          />
        </div>
        <div className="font-montserrat uppercase font-bold">{name}</div>
        {description !== "" && (
          <div className="text-center font-extralight text-text-subtext">
            {description}
          </div>
        )}
      </div>
    </>
  );
};

export default MenuItem;
