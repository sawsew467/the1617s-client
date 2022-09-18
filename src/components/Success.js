import React from "react";

function Success({code}) {
    console.log(code);
  return (
    <>
      <div className="absolute w-2/3 bg-primary z-[60] flex flex-col items-center px-4 py-4 border-4 border-white drop-shadow-2xl">
        <div className="text-white text-xl">Gửi đơn thành công</div>
        <i className="fa-solid fa-circle-check text-white text-[3.2rem] my-4"></i>
        <p className="text-white">Mã nhận đơn</p>
        <p className="text-white text-4xl">{code}</p>
        <p className="text-white text-xl my-2">Đánh giá trải nghiệm</p>
        <div className="flex flex-row text-white text-4xl gap-8">
          <i
            className="fa-solid fa-thumbs-up"
            onClick={() => window.location.reload()}
          ></i>
          <i
            className="fa-solid fa-thumbs-down"
            onClick={() => window.location.reload()}
          ></i>
        </div>
      </div>
    </>
  );
}

export default Success;
