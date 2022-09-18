import React, { useState } from "react";
import moment from "moment";
import GenerateRandomCode from "react-random-code-generator";
import axios from "axios";
import { useSelector } from "react-redux";
import { productListSelector } from "../redux/slectors";
import Loading from "./Loading";
import ShipOrder from "./ShipOrder";

function Payment({ setIsShowPayment }) {
  const [isShowShipOrder, setIsShowShipOrder] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let totalPrice = 0;
  const productList = useSelector(productListSelector);
  console.log(productList);
  const selectedProduct = productList.filter((product) => product.quantity > 0);
  for (let item of selectedProduct) {
    totalPrice += item.quantity * item.price;
  }
  const quickHandle = () => {
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
        setIsLoading(false);
        alert(`Mã đơn của bạn là: ${code}`);
        window.location.reload();
        // handleDelete();
      });
    setIsLoading(true);
  };
  return (
    <>
      <div className="fixed right-0 bottom-0 top-0 left-0 z-50 flex justify-center items-center bg-[#00000063]">
        {isLoading && <Loading></Loading>}
        {isShowShipOrder && (
          <ShipOrder
            setIsShowShipOrder={() => setIsShowShipOrder(!isShowShipOrder)}
          ></ShipOrder>
        )}
        <div className="absolute bg-primary z-50 flex flex-col items-center p-4 gap-4">
          <div className="flex flex-row justify-between items-start">
            <i
              class="fa-solid fa-arrow-left text-2xl text-white"
              onClick={() => setIsShowPayment()}
            ></i>
            <div className="w-2/3 mx-auto text-white text-center py-2 flex items-center justify-center gap-2">
              <p className="text-xl">Chọn phương thức mua hàng</p>
            </div>
            <div></div>
          </div>
          <div
            className="w-2/3 bg-white text-primary text-center py-2 flex items-center justify-center gap-2"
            onClick={quickHandle}
          >
            <i class="fa-solid fa-store"></i>
            <p className="text-md">Lấy hàng ngay</p>
          </div>
          <div
            className="w-2/3 bg-white text-primary text-center py-2 flex items-center justify-center gap-2"
            onClick={() => setIsShowShipOrder(!isShowShipOrder)}
          >
            <i class="fa-solid fa-truck-fast"></i>
            <p className="text-md">Giao hàng</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
