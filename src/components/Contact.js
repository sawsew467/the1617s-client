import React from "react";

function Contact() {
  return (
    <>
      <footer className="w-full top-0 bg-green pt-4" id="contact">
        <div className="container lg-auto mx-auto pr-7 pl-7 flex justify-between lg:flex-row flex-col">
          <div className="flex flex-col">
            <a className="lg:mb-9 mb-4 flex items-center" href="#">
              <img
                className="w-[60px] rounded-full"
                src={require("../assets/imgs/logo.png")}
                alt=""
              />
              <p className="text-primary text-xl ml-4 font-semibold">The 1617s</p>
            </a>
            <div className="mb-2 hover:text-secondary transition-all">
              <i className="fa-solid fa-phone text-sm w-3"></i>
              <a className="footer__link text-sm ml-2" href="tel:+84828828497">
                +84 828828497
              </a>
            </div>
            <div className="mb-2 hover:text-secondary transition-all">
              <i className="fa-solid fa-envelope text-sm w-3"></i>
              <a
                className="footer__link text-sm ml-2"
                href="mailto:thangtvb.dev@gmail.com"
              >
                thangtvb.dev@gmail.com
              </a>
            </div>
            <div className="mb-2 hover:text-secondary transition-all w-80">
              <i className="fa-solid fa-location-dot text-sm w-3"></i>
              <a
                className="footer__link text-sm ml-2"
                href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
              >
                Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng, Việt Nam
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 flex lg:mt-0 mt-4">
            <div className="w-1/2 flex flex-col">
              <p className="lg:mb-9 mb-2 text-sm font-semibold lg:h-11">
                Về chúng tôi
              </p>
              <a
                className="text-sm mb-2 hover:text-secondary transition-all"
                href="#"
              >
                Giới thiệu
              </a>
              <a
                className="text-sm mb-2 hover:text-secondary transition-all"
                href="#menu"
              >
                Thực đơn
              </a>
              <a
                className="text-sm mb-2 hover:text-secondary transition-all"
                href="#contact"
              >
                Liên hệ
              </a>
            </div>
            <div className="w-1/2 flex flex-col">
              <p className="lg:mb-9 mb-2 text-sm font-semibold lg:h-11">
                Kết nối
              </p>
              <a
                className="text-sm mb-2 hover:text-secondary transition-all"
                href="https://www.facebook.com/The-1617s-Food-Drink-100250849520085/?modal=admin_todo_tour&notif_id=1663326479645845&notif_t=page_invite&ref=notif"
              >
                Facebook
              </a>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
