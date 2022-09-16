import React from 'react'

function Coffee() {
  return (
    <>
      <div className="bg-[#F3F5EB]">
        <div className="container px-4 py-4">
          <h3 className="mb-8 text-2xl text-blackText font-bold relative after:absolute after:w-20 after:h-1 after:bg-primary after:left-0 after:bottom-[-4px]">
            Cà phê
          </h3>
          <div className="flex flex-col gap-4">
            <div className="w-full bg-white rounded-lg drop-shadow-sm flex flex-col items-center">
              <div className="flex flex-row items-center p-4 gap-2">
                <i className="fa-solid fa-crown text-[#f8b600]"></i>
                <p className="text-lg text-[#f8b600]">Best seller</p>
              </div>
              <div className="w-full flex justify-center">
                <img
                  className="w-1/3"
                  src={require("../assets/imgs/coffee/bạc xỉu.png")}
                ></img>
              </div>
              <h4 className="text-2xl font-semibold">Bạc xỉu</h4>
              <p className="opacity-50">Ly vừa</p>
              <div className="w-1/3 flex justify-center items-center">
                <div className="flex items-center text-[#588157] gap-1 font-medium">
                  <p className="text-lg">20K VNĐ</p>
                  <i className="fa-solid fa-money-bill text-lg"></i>
                </div>
              </div>
              <div className="flex flex-row w-full mt-4">
                <div className="w-2/5 h-14 flex justify-center items-center bg-[#f8b600] rounded-bl-lg ">
                  <span className="text-white text-2xl font-medium">+</span>
                </div>
                <div className="w-1/5 flex justify-center items-center">
                    <span className="text-lg">0</span>
                </div>
                <div className="w-2/5 h-14 flex justify-center items-center bg-[#f8b600] rounded-br-lg">
                  <span className="text-white text-2xl font-medium">-</span>
                </div>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg drop-shadow-sm flex flex-col items-center">
              <div className="flex flex-row items-center p-4 gap-2">
                <i className="fa-solid fa-crown text-[#f8b600]"></i>
                <p className="text-lg text-[#f8b600]">Best seller</p>
              </div>
              <div className="w-full flex justify-center">
                <img
                  className="w-1/4"
                  src={require("../assets/imgs/coffee/cà phê sữa.png")}
                ></img>
              </div>
              <h4 className="text-2xl font-semibold">Cà phê sữa</h4>
              <p className="opacity-50">Ly nhỏ</p>
              <div className="w-1/3 flex justify-center items-center">
                <div className="flex items-center text-[#588157] gap-1 font-medium">
                  <p className="text-lg">20K VNĐ</p>
                  <i className="fa-solid fa-money-bill text-lg"></i>
                </div>
              </div>
              <div className="flex flex-row w-full mt-4">
                <div className="w-2/5 h-14 flex justify-center items-center bg-[#f8b600] rounded-bl-lg ">
                  <span className="text-white text-2xl font-medium">+</span>
                </div>
                <div className="w-1/5 flex justify-center items-center">
                    <span className="text-lg">0</span>
                </div>
                <div className="w-2/5 h-14 flex justify-center items-center bg-[#f8b600] rounded-br-lg">
                  <span className="text-white text-2xl font-medium">-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Coffee