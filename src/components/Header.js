import React from "react";

function Header() {
  return (
    <>
      <div className="w-full h-2 bg-primary"></div>
      <div className="w-full h-20 bg-white container flex flex-row justify-between items-center px-4 drop-shadow-md">
        <div className="w-16 h-16">
            <img src={require("../assets/imgs/logo.png")} className="rounded-full"></img>
        </div>
        <p className="text-2xl text-primary font-medium">The 1617s</p>
        <div className="h-8 flex flex-col justify-between">
            <div className="h-1 w-8 bg-primary"></div>
            <div className="h-1 w-8 bg-primary"></div>
            <div className="h-1 w-8 bg-primary"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
