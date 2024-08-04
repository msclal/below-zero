import React from "react";
import MenuItem from "./MenuItem";

const MenuItems = ({ data }) => {
  return (
    <>
      <div className="grid w-full grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="m-[5%] flex items-center justify-center h-full"
            >
              <MenuItem
                name={item.name}
                picture={item.picture}
                description={item.description}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuItems;
