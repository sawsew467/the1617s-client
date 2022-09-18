import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../redux/actions";
import { productListSelector } from "../redux/slectors";

function Product(props) {
  const info = props.info;
  const productList = useSelector(productListSelector);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    let newProductList = [];
    for (let item of productList) {
      if (item.id === info.id) {
        newProductList = [
          ...newProductList,
          {
            ...info,
            quantity: info.quantity + 1,
          },
        ];
      } else {
        newProductList = [...newProductList, item];
      }
    }
    dispatch(setProductList(newProductList));
  };
  const handleDecrease = () => {
    if (info.quantity === 0) {
      return;
    }
    let newProductList = [];
    for (let item of productList) {
      if (item.id === info.id) {
        newProductList = [
          ...newProductList,
          {
            ...info,
            quantity: info.quantity - 1,
          },
        ];
      } else {
        newProductList = [...newProductList, item];
      }
    }
    dispatch(setProductList(newProductList));
  };
  return (
    <>
      <div className="w-1/2 lg:w-1/3 bg-white rounded-lg drop-shadow-sm flex flex-col items-center justify-end">
        <div className="flex flex-row items-center p-4 gap-2 h-[60px]">
          {info.isBestSeller && (
            <>
              <i className="fa-solid fa-crown text-[#f8b600]"></i>
              <p className="text-lg text-[#f8b600]">Best seller</p>
            </>
          )}
        </div>
        <div className="w-full flex justify-center lg:h-2/3">
          <img
            className="w-2/3 object-cover"
            src={require("../assets/imgs/" +
              info.type +
              "/" +
              info.img +
              ".png")}
          ></img>
        </div>
        <h4 className="text-lg lg:text-xl font-semibold mt-2">{info.name}</h4>
        <p className="opacity-50">{info.unit}</p>
        <div className="w-full lg:w-full flex justify-center items-center">
          <div className="flex items-center text-[#588157] gap-1 font-medium">
            <p className="text-sm">{info.price}K VNĐ</p>
            <i className="fa-solid fa-money-bill text-sm"></i>
          </div>
        </div>
        <div className="flex flex-row w-full mt-4">
          <div
            className="w-2/5 h-12 flex justify-center items-center bg-[#f8b600] rounded-bl-lg "
            onClick={handleIncrease}
          >
            <span className="text-white text-2xl font-medium">+</span>
          </div>
          <div className="w-1/5 flex justify-center items-center">
            <span className="text-sm">{info.quantity}</span>
          </div>
          <div
            className="w-2/5 h-12 flex justify-center items-center bg-[#f8b600] rounded-br-lg"
            onClick={handleDecrease}
          >
            <span className="text-white text-2xl font-medium">-</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
