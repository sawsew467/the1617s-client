import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import { productListSelector } from "../redux/slectors";

function Coffee() {
  const productList = useSelector(productListSelector);
  const coffeeList = productList.filter((item) => item.type === "coffee");
  return (
    <>
      <div className="bg-[#F3F5EB]">
        <div className="container px-4 py-4">
          <h3 className="mb-8 text-2xl text-blackText font-bold relative after:absolute after:w-20 after:h-1 after:bg-primary after:left-0 after:bottom-[-4px]">
            Cà phê
          </h3>
          <div className="flex flex-col gap-4">
            {coffeeList &&
              coffeeList.map((item, index) => (
                <Product info={item} key={index}></Product>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Coffee;
