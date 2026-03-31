import React from "react";
import { toast } from "react-toastify";

const Cart = ({ selected, setSelected, setCount }) => {
  console.log(selected);

  const handelDeleted = (data) => {
    const filteredData = selected.filter((selected) => selected.id !== data.id);
    setSelected(filteredData);
    setCount(filteredData.length);
    toast.warn("Remove to Cart")
  };

  const totalPrice =selected.reduce((sum, item ) => sum + item.price, 0);

  const payment = ()=>{
    setSelected([])
    setCount(0)
    toast.success('Payment successful')
  }
  return (
    <div className="max-w-250 mx-auto border border-gray-200 shadow my-7 p-5 rounded-xl">
      <h2 className="text-4xl font-bold">Your Cart </h2>
      <div className="">
        <div>
          {selected.length === 0 ? (
            <div className="h-70   my-4 content-center text-center">
              <h2 className="text-2xl font-bold">No Product selected</h2>
              <p className="text-gray-400">Choose the Product</p>
            </div>
          ) : (
            selected.map((data) => (
              <div
                key={data.id}
                className="flex justify-between items-center bg-gray-100 my-4 rounded-2xl border border-gray-300 p-4"
              >
                <div className="flex gap-4 items-center ">
                  <p className="text-3xl">{data.icon}</p>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-2xl">{data.name}</h3>
                    <p className="text-lg text-gray-500">${data.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handelDeleted(data)}
                  className="btn text-red-600"
                >
                  Remove
                </button>
              </div>
            ))
          )}

          {selected.length === 0 ? (
            ""
          ) : (
            <div>
              <div className="flex justify-between items-center my-3">
                <p>Total</p>
                <h4 className="text-2xl font-bold">${totalPrice}</h4>
              </div>
              <button 
              onClick={payment}
              className="btn w-full btn-primary rounded-full">
                Proceed To Checkout{" "}
              </button>
            </div>
          )}
        </div>

        {/* {selected.map((data) => {
          <div className="flex justify-between items-center bg-gray-100 my-4 rounded-2xl border border-gray-300 p-4">

          </div>;
        })} */}
      </div>
    </div>
  );
};

export default Cart;
