import React, { useEffect, useState } from "react";

function Header() {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setIsShowMobileMenu(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="w-full h-2 bg-primary"></div>
      <div className="w-full h-20 bg-white container flex flex-row justify-between items-center px-4 drop-shadow-md">
        <div className="w-16 h-16">
          <img
            src={require("../assets/imgs/logo.png")}
            className="rounded-full"
          ></img>
        </div>
        <p className="text-2xl text-primary font-medium">The 1617s</p>
        <div
          className="h-6 flex flex-col justify-between"
          onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
        >
          <div
            className={
              isShowMobileMenu && scrollPosition === 0
                ? "w-8 h-1 bg-primary rotate-45 translate-y-[8px] transition-all duration-500"
                : "w-8 h-1 bg-primary transition-all duration-500"
            }
          ></div>
          <div
            className={
              isShowMobileMenu && scrollPosition === 0
                ? "w-8 h-1 bg-primary translate-x-[200%] transition-all duration-500"
                : "w-8 h-1 bg-primary transition-all duration-500"
            }
          ></div>
          <div
            className={
              isShowMobileMenu && scrollPosition === 0
                ? "w-8 h-1 bg-primary rotate-[135deg] translate-y-[-12px] transition-all duration-500"
                : "w-8 h-1 bg-primary transition-all duration-500"
            }
          ></div>
        </div>
        <nav
          className={
            isShowMobileMenu && scrollPosition === 0
              ? "fixed top-0 right-0 left-0 z-50 translate-x-0 transition-all duration-500 translate-y-20"
              : "fixed top-0 right-0 left-0 z-50 translate-x-[-100%] transition-all duration-500 translate-y-20"
          }
        >
          <div className="bg-white pb-2 rounded-bl-xl rounded-br-xl drop-shadow-[8px_60px_28px_rgba(0,0,0,0.12)]">
            <a href="#" onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}>
              <div className="text-2xl text-center py-2">Giới thiệu</div>
            </a>
            <a
              href="#menu"
              onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
            >
              <div className="text-2xl text-center py-2">Thực đơn</div>
            </a>
            <a
              href="#contact"
              onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
            >
              <div className="text-2xl text-center py-2">Liên Hệ</div>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
