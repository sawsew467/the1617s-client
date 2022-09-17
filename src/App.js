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
      <Coffee></Coffee>
      <Contact></Contact>
      <div className="text-sm text-center py-2">© 2022 Powered by ThangTVB.</div>
    </>
  );
}

export default App;
