import React from "react";

function Categories() {
  return (
    <>
      <div className="bg-[#F3F5EB]" id="menu">
        <div className="container px-4 pt-4">
          <h3 className="mb-8 text-2xl text-blackText font-bold relative after:absolute after:w-20 after:h-1 after:bg-primary after:left-0 after:bottom-[-4px]">
            Danh mục
          </h3>
          <div className="flex flex-row justify-center gap-4">
            <div className="w-28 bg-white drop-shadow-sm rounded-lg flex flex-col items-center py-4 px-2">
              <i className="fa-solid fa-drumstick-bite text-4xl text-[#A03D41]"></i>
              <div className="text-lg font-medium text-[#A03D41] my-2">
                Món chính
              </div>
              <div className="w-6 h-6 rounded-full bg-[#A03D41] flex justify-center items-center">
                <i className="fa-solid fa-sort-down text-white translate-y-[-4px]"></i>
              </div>
            </div>
            <div className="w-28 bg-white drop-shadow-sm rounded-lg flex flex-col items-center py-4 px-2">
              <i className="fa-solid fa-cookie-bite text-4xl text-[#A03D41]"></i>
              <div className="text-lg font-medium text-[#A03D41] my-2">
                Ăn vặt
              </div>
              <div className="w-6 h-6 rounded-full bg-[#A03D41] flex justify-center items-center">
                <i className="fa-solid fa-sort-down text-white translate-y-[-4px]"></i>
              </div>
            </div>
            <div className="w-28 bg-white drop-shadow-sm rounded-lg flex flex-col items-center py-4 px-2">
              <i className="fa-solid fa-mug-saucer text-4xl text-[#A03D41]"></i>
              <div className="text-lg font-medium text-[#A03D41] my-2">
                Cà phê
              </div>
              <div className="w-6 h-6 rounded-full bg-[#A03D41] flex justify-center items-center">
                <i className="fa-solid fa-sort-down text-white translate-y-[-4px]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
