import React from "react";
import { useSelector } from "react-redux";
import { productListSelector } from "../redux/slectors";
import Product from "./Product";

function Chicken() {
  const productList = useSelector(productListSelector);
  const chickenList = productList.filter((item) => item.type === "chicken");
  return (
    <>
      <div className="bg-[#F3F5EB]">
        <div className="container px-4 py-4">
          <h3 className="mb-8 text-2xl text-blackText font-bold relative after:absolute after:w-20 after:h-1 after:bg-primary after:left-0 after:bottom-[-4px]">
            Món chính
          </h3>
          <div className="flex flex-col gap-4">
            {chickenList.length > 0 &&
              chickenList.map((item, index) => (
                <Product info={item} key={index}></Product>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Chicken;
