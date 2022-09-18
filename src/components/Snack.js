import React from "react";
import { useSelector } from "react-redux";
import { productListSelector } from "../redux/slectors";
import Product from "./Product";

function Snack() {
  const productList = useSelector(productListSelector);
  const snackList = productList.filter((item) => item.type === "snack");
  return (
    <>
      <div className="bg-[#F3F5EB]" id="snack">
        <div className="container px-4 py-4 lg:py-0 mx-auto lg:w-1/2">
          <h3 className="mb-8 text-2xl text-blackText font-bold relative after:absolute after:w-20 after:h-1 after:bg-primary after:left-0 after:bottom-[-4px]">
            Ăn vặt
          </h3>
          <div className="flex flex-row gap-4 lg:flex-row">
            {snackList.length > 0 &&
              snackList.map((item, index) => (
                <Product info={item} key={index}></Product>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Snack;
