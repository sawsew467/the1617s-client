import axios from "axios";
import React, { useState } from "react";
import GenerateRandomCode from "react-random-code-generator";
import { useSelector } from "react-redux";
import { productListSelector } from "../redux/slectors";
import moment from "moment";
import Loading from "./Loading";
import Success from "./Success";

function ShipOrder({ setIsShowShipOrder }) {
  let totalPrice = 0;
  const productList = useSelector(productListSelector);
  console.log(productList);
  const selectedProduct = productList.filter((product) => product.quantity > 0);
  for (let item of selectedProduct) {
    totalPrice += item.quantity * item.price;
  }
  const [userInput, setUserInput] = useState({
    name: "",
    phone: "",
    location: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [code, setCode] = useState("");
  const handleSubmit = () => {
    if (
      userInput.name === "" ||
      userInput.phone === "" ||
      userInput.location === ""
    ) {
      alert("Thông tin không hợp lệ, vui lòng nhập lại!");
      return;
    }
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
      NAME: userInput.name,
      PHONE: `'${userInput.phone}`,
      LOCATION: userInput.location,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/4efef5f4-f0bf-4dda-87c6-4b030c2f5d01",
        data
      )
      .then((respone) => {
        console.log(respone);
        // const code = respone.data[0].CODE;
        setIsLoading(false);
        setCode(CODE);
        // alert(`Mã đơn của bạn là: ${code}`);
        // window.location.reload();
        setIsSuccess(true);
      });
    setIsLoading(true);
  };
  return (
    <>
      <div className="fixed right-0 bottom-0 top-0 left-0 z-[70] flex justify-center items-center bg-[#00000063]">
        {isLoading && <Loading></Loading>}
        {isSuccess && <Success code={code}></Success>}
        <div className="lg:w-[40rem] w-full bg-primary z-40 flex flex-col p-4 ">
          <div className="flex flex-row justify-between items-center pb-4 ">
            <i
              className="fa-solid fa-arrow-left text-2xl text-white"
              onClick={() => setIsShowShipOrder()}
            ></i>
            <div className="w-2/3 mx-auto text-white text-center py-2 flex items-center justify-center gap-2">
              <i className="fa-solid fa-truck-fast text-xl"></i>
              <p className="text-xl">Thông tin giao hàng</p>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col items-center w-full gap-4">
            <div className="w-full">
              <p className="text-sm">Họ và tên</p>
              <input
                className="w-full outline-none p-2"
                placeholder="Nguyễn Văn A"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    name: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className="w-full">
              <p className="text-sm">Số điện thoại</p>
              <input
                className="w-full outline-none p-2"
                placeholder="0828..."
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    phone: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className="w-full">
              <p className="text-sm">Địa điểm giao hàng</p>
              <input
                className="w-full outline-none p-2"
                placeholder="Thư viện, Phòng 220,..."
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    location: e.target.value,
                  })
                }
              ></input>
            </div>
          </div>
          <div className="flex-1 mt-4 justify-between items-center flex cursor-pointer">
            <div>
              <div className="flex flex-col text-white gap-1 font-medium">
                <p className="text-md">Tổng cộng</p>
                <p className="text-2xl">{totalPrice}.000 VNĐ</p>
              </div>
            </div>
            <div
              className="bg-white w-1/2 py-2 text-primary text-2xl font-bold flex justify-center items-center"
              onClick={handleSubmit}
            >
              <p className="h-full">Đặt hàng</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShipOrder;
