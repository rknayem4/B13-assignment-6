import { Suspense, useState } from "react";
import "./app.css";
import Banner from "./component/Banner/Banner";
import Nevber from "./component/Navbar/Nevber";
import PricingCard from "./component/PricingCard/PricingCard";
import Status from "./component/Status/Status";
import Steps from "./component/Steps/Steps";
import ToolsProduct from "./component/Tools/ToolsProducts";
import UpFooter from "./component/Footer/UpFooter";
import { ToastContainer } from "react-toastify";

const fetchProduct = async () => {
  const res = await fetch("/productData.json");
  return res.json();
};

export function App() {
  const productPromise = fetchProduct();
  const [count, setCount] = useState(0)
  return (
    <>
      <Nevber 
        count={count}
        setCount={setCount}
        ></Nevber>
      <Banner></Banner>
      <Status></Status>

      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <ToolsProduct 
        productPromise={productPromise}
        count={count}
        setCount={setCount}
        ></ToolsProduct>
      </Suspense>

      <Steps></Steps>
      <PricingCard></PricingCard>
      <UpFooter></UpFooter>
      <ToastContainer />
    </>
  );
}
