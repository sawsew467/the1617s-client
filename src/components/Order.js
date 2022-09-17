import axios from "axios";
import React, { useState } from "react";
import GenerateRandomCode from "react-random-code-generator";
import { useDispatch, useSelector } from "react-redux";
import PRODUCT_LIST from "../data/products";
import { setProductList } from "../redux/actions";
import { productListSelector } from "../redux/slectors";
import moment from "moment";

function Order() {
  const [isShow, setIsShow] = useState(false);
  const productList = useSelector(productListSelector);
  const selectedProduct = productList.filter((product) => product.quantity > 0);
  let numberOfProducts = 0;
  for (let item of selectedProduct) {
    numberOfProducts += item.quantity;
  }
  let totalPrice = 0;
  for (let item of selectedProduct) {
    totalPrice += item.quantity * item.price;
  }
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(setProductList(PRODUCT_LIST));
    setIsShow(!isShow);
  };
  const handleSubmit = () => {
    // console.log(selectedProduct);
    const CODE = GenerateRandomCode.NumCode(5);
    const PRICE = totalPrice;
    let ORDER = "";
    for (let item of selectedProduct) {
      ORDER = ORDER + ` ${item.quantity} ${item.name},`;
    }
    const DATE = moment().format("lll");
    const data = {
      DATE,
      CODE,
      ORDER,
      PRICE: PRICE + ".000",
    };
    axios
      .post(
        "https://sheet.best/api/sheets/706057a4-a581-465b-a849-877af461f123",
        data
      )
      .then((respone) => {
        console.log(respone);
        const code = respone.data[0].CODE;
        alert(`Your code is: ${code}`);
        handleDelete();
      });
  };
  return (
    <>
      {isShow === false ? (
        <div
          className="fixed right-0 bottom-0 w-32 h-32 bg-primary z-50 rounded-tl-[100%] flex flex-col justify-center items-center"
          onClick={() => setIsShow(!isShow)}
        >
          <i class="fa-solid fa-basket-shopping text-white text-4xl pl-6 pt-6"></i>
          <div className="text-primary text-sm bg-white w-6 h-6 rounded-full text-center leading-6 absolute right-0 mr-4 mb-3">
            {numberOfProducts}
          </div>
        </div>
      ) : (
        <div className="fixed right-0 bottom-0 top-0 left-0 bg-primary z-50 flex flex-col p-4 ">
          <div className="flex flex-row justify-between pb-4 ">
            <i
              class="fa-solid fa-xmark text-2xl text-white"
              onClick={() => setIsShow(!isShow)}
            ></i>
            <p className="text-2xl text-white">Giỏ hàng</p>
            <i
              class="fa-solid fa-trash-can text-2xl text-white"
              onClick={handleDelete}
            ></i>
          </div>
          <div className="h-4/5 bg-white shadow-[inset_0_-4px_16px_rgba(0,0,0,0.2)] p-4 overflow-x-auto">
            {selectedProduct.map((product) => (
              <div className="flex flex-row h-32 w-full py-4 pr-4 drop-shadow-lg bg-white mb-4 items-center">
                <div className="h-full w-1/3 ml-2 flex justify-center">
                  <img
                    className="h-full"
                    src={require("../assets/imgs/" +
                      product.type +
                      "/" +
                      product.img +
                      ".png")}
                  ></img>
                </div>
                <div className="flex flex-col ml-2 flex-1">
                  <p className="text-lg w-2/3 leading-tight">{product.name}</p>
                  <div className="flex items-center text-[#588157] gap-1 font-medium">
                    <p className="text-sm">{product.price} VNĐ</p>
                    <i className="fa-solid fa-money-bill text-sm"></i>
                  </div>
                </div>
                <div className="text-xl">{product.quantity}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 mt-4 justify-between items-center flex">
            <div>
              <div className="flex flex-col text-white gap-1 font-medium">
                <p className="text-md">Tổng cộng</p>
                <p className="text-2xl">{totalPrice}.000 VNĐ</p>
              </div>
            </div>
            <div
              className="bg-white w-1/2 text-primary text-2xl font-bold flex justify-center items-center h-full"
              onClick={handleSubmit}
            >
              <p className="">Đặt hàng</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Order;
