import About from "./components/About";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Chicken from "./components/Chicken";
import Header from "./components/Header";
import Coffee from "./components/Coffee";
import { useSelector } from "react-redux";
import { productListSelector } from "./redux/slectors";
import Order from "./components/Order";
import Contact from "./components/Contact";
import Snack from "./components/Snack";

function App() {
  const productList = useSelector(productListSelector);
  const isShow = productList.find(item => item.quantity > 0) ? true : false;
  // console.log(isShow);
  return (
    <>
      <Header></Header>
      {
        isShow && (
          <Order></Order>
        )
      }
      <Banner></Banner>
      <About></About>
      <Categories></Categories>
      <Chicken></Chicken>
      <Snack></Snack>
      <Coffee></Coffee>
      <div className="w-full lg:h-[32rem]">
        <img className="h-full w-full object-cover" src={require("./assets/imgs/banner2.png")}></img>
      </div>
      <Contact></Contact>
      <div className="text-sm text-center py-2 bg-slate-100">© 2022 Powered by ThangTVB.</div>
    </>
  );
}

export default App;
