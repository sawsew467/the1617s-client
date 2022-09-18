import React from "react";

function About() {
  return (
    <>
      <div className="container px-4 py-4 lg:py-12 mx-auto lg:w-1/2" id="about">
        <div className="flex flex-row justify-between mb-2 lg:mb-10">
          <div className="flex flex-col">
            <p className="text-blackText text-sm lg:text-xl font-medium opacity-75">
              VỀ CHÚNG TÔI
            </p>
            <p className="text-blackText text-2xl lg:text-4xl font-bold mt-[-4px]">
              Sứ mệnh của
            </p>
            <p className="text-primary text-2xl lg:text-4xl font-bold mt-[-8px]">
              The 1617s?
            </p>
          </div>
          <div className="flex flex-row items-center">
            <a
              href="https://www.facebook.com/The-1617s-Food-Drink-100250849520085/?modal=admin_todo_tour&notif_id=1663326479645845&notif_t=page_invite&ref=notif"
              target="_blank"
            >
              <div className="text-lg lg:text-2xl text-primary border-2 border-primary rounded-full px-4 py-1 hover:text-white hover:bg-primary transition-all">
                Theo dõi
              </div>
            </a>
          </div>
        </div>
        <p className="text-sm lg:text-lg">
          {/* Esse laborum nisi sit amet ea non cupidatat minim ea aute sint ullamco
          incididunt mollit. Commodo do cupidatat nulla excepteur. Sit laborum
          sunt esse excepteur consequat reprehenderit non minim ea laboris nisi.
          Anim anim proident labore nisi qui cillum et reprehenderit aliqua
          consequat cillum. Officia anim velit officia reprehenderit.Cupidatat
          consectetur esse ad officia. Anim nisi tempor sint id. Dolor occaecat
          ad eu ad est id sint eiusmod.  */}
          The 1617s là một nhóm sinh viên đến từ các chuyên ngành khác nhau của
          Đại học FPT Đà Nẵng. Trong quá trình bán hàng gây quỹ, 40% lợi nhuận
          sẽ được góp vào thực hiện dự án "Khoảnh khắc diệu kì".<br></br>
          Với tiêu chí bảo đảm chất lượng, các sản phẩm của The 1617s được bảo
          quản và chế biến chuyên nghiệp, đẩm bảo vệ sinh an toàn thực phẩm. Giá
          thành phù hợp với đối tượng học sinh, sinh viên.
        </p>
      </div>
    </>
  );
}

export default About;
