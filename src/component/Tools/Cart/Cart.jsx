import React from "react";

const Cart = ({ selected }) => {
  
  return (
    <div>
      <h2 className="text-4xl font-bold">Your Cart </h2>
      <div className="">
        <div>
          {selected.length === 0 ? (
            <div className="h-70 border border-gray-200 shadow rounded-2xl my-4 content-center text-center">
              <h2 className="text-2xl font-bold">No Product selected</h2>
              <p className="text-gray-400">Choose the Product</p>
            </div>
          ) : (
            selected.map((data, ind) => (
              <div
                key={ind}
                className="flex justify-between items-center bg-gray-100 my-4 rounded-2xl border border-gray-300 p-4"
              >
                            <div className="flex gap-4 items-center ">
              <p className="text-3xl">{data.icon}</p>
              <div className="space-y-2">
                <h3 className="font-semibold text-2xl">{data.name}</h3>
                <p className="text-lg text-gray-500">${data.price}</p>
              </div>
            </div>
            <p className="btn text-red-600">Remove</p>
              </div>
            ))
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
