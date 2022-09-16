import About from "./components/About";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Chicken from "./components/Chicken";
import Header from "./components/Header";
import Coffee from "./components/Coffee";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Categories></Categories>
      <Chicken></Chicken>
      <Coffee></Coffee>
      <div className="text-sm text-center py-2">© 2022 Powered by ThangTVB.</div>
    </>
  );
}

export default App;
