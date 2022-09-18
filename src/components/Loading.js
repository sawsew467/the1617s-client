import React from "react";

function Loading() {
  return (
    <>
      <div className="absolute bg-primary z-[60] flex items-center px-4 py-2 border-4 border-white drop-shadow-2xl">
        <div className="animate-spin w-12 h-12 rounded-full bg-white flex justify-center items-center relative after:absolute after:w-12 after:h-12 after:bottom-0 after:bg-primary after:loading">
          <div className="w-9 h-9 rounded-full bg-primary"></div>
        </div>
        <p className="text-white text-xl pl-4">Đang gửi...</p>
      </div>
    </>
  );
}

export default Loading;
