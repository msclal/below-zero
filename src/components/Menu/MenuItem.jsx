import React from "react";
import Image from "next/image";

const MenuItem = ({ key, name, picture, description }) => {
  return (
    <>
      <div className="flex w-full items-center flex-col">
        <div className="w-full">
          <Image
            src={picture}
            alt="Produce Picture"
            layout="responsive"
            className="rounded-xl"
            width="1"
            height="1"
          />
        </div>
        <div className="font-montserrat uppercase font-bold text-center">
          {name}
        </div>
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
