import React from "react";
import MenuItem from "./MenuItem";

const MenuItems = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full">
        {data.map((item, index) => {
          return (
            <>
              <div className="m-[11%] ">
                <MenuItem
                  key={index}
                  name={item.name}
                  picture={item.picture}
                  description={item.description}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MenuItems;
