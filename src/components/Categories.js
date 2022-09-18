import React from "react";

function Categories() {
  return (
    <>
      <div className="bg-[#F3F5EB]" id="menu">
        <div className="container px-4 pt-4 lg:pt-12 mx-auto lg:w-1/2">
          <h3 className="mb-8 text-2xl text-blackText font-bold relative after:absolute after:w-20 after:h-1 after:bg-primary after:left-0 after:bottom-[-4px]">
            Danh mục
          </h3>
          <div className="flex flex-row justify-center gap-4">
            <a href="#chicken" className="w-28 lg:w-1/3">
              <div className="w-full bg-white drop-shadow-sm rounded-lg flex flex-col items-center py-4 lg:pt-12 lg:pb-8 px-2 hover:bg-[#A03D41] group transition-all">
                <i className="fa-solid fa-drumstick-bite text-4xl lg:text-6xl text-[#A03D41]  group-hover:text-white transition-all "></i>
                <div className="text-lg lg:text-xl font-medium text-[#A03D41] group-hover:text-white transition-all my-2 lg:mt-8">
                  Món chính
                </div>
                <div className="w-6 h-6 rounded-full bg-[#A03D41] flex justify-center items-center group-hover:bg-white">
                  <i className="fa-solid fa-sort-down text-white translate-y-[-4px] group-hover:text-[#A03D41]"></i>
                </div>
              </div>
            </a>
            <a href="#snack" className="w-28 lg:w-1/3">
              <div className="w-full bg-white drop-shadow-sm rounded-lg flex flex-col items-center py-4 lg:pt-12 lg:pb-8 px-2 hover:bg-[#A03D41] group transition-all">
                <i className="fa-solid fa-cookie-bite text-4xl lg:text-6xl text-[#A03D41]  group-hover:text-white transition-all"></i>
                <div className="text-lg lg:text-xl font-medium text-[#A03D41] group-hover:text-white transition-all my-2 lg:mt-8">
                  Ăn vặt
                </div>
                <div className="w-6 h-6 rounded-full bg-[#A03D41] flex justify-center items-center group-hover:bg-white">
                  <i className="fa-solid fa-sort-down text-white translate-y-[-4px] group-hover:text-[#A03D41]"></i>
                </div>
              </div>
            </a>
            <a href="#coffee" className="w-28 lg:w-1/3">
              <div className="w-full bg-white drop-shadow-sm rounded-lg flex flex-col items-center py-4 lg:pt-12 lg:pb-8 px-2 hover:bg-[#A03D41] group transition-all">
                <i className="fa-solid fa-mug-saucer text-4xl lg:text-6xl text-[#A03D41]  group-hover:text-white transition-all"></i>
                <div className="text-lg lg:text-xl font-medium text-[#A03D41] group-hover:text-white transition-all my-2 lg:mt-8">
                  Cà phê
                </div>
                <div className="w-6 h-6 rounded-full bg-[#A03D41] flex justify-center items-center group-hover:bg-white">
                  <i className="fa-solid fa-sort-down text-white translate-y-[-4px] group-hover:text-[#A03D41]"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
