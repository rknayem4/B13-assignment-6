
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import { use, useState } from "react";

const ToolsProducts = ({productPromise}) => {
  const ProductData = use(productPromise)
  console.log(ProductData)
  const [activeBtn, setActiveBtn] = useState("product");
  return (
    <div className="my-6 py-8  max-w-350 mx-auto">
      <div className="text-center max-w-md mx-auto space-y-4">
        <h2 className="text-3xl font-bold ">Premium Digital Tools </h2>
        <p className="text-gray-400">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="flex gap-3  justify-center ">
          <button
            onClick={() => setActiveBtn("product")}
            className={
              activeBtn == "product"
                ? "btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full w-40"
                : "btn rounded-full w-40"
            }
          >
            Products
          </button>
          <button
            onClick={() => setActiveBtn("cart")}
            className={
              activeBtn == "cart"
                ? "btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full w-40"
                : "btn rounded-full w-40"
            }
          >
            Cart(0)
          </button>
        </div>
      </div>
            
      <div> 
        {
          activeBtn == 'cart' 
          ? <Cart></Cart> 
          : <Products></Products> 
        }
      </div>
    </div>
  );
};

export default ToolsProducts;
