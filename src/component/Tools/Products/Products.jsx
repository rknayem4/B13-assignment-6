import React from "react";
import Card from "./Card/Card";

const Products = ({ productData, selected, setSelected, count, setCount }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2  mx-auto my-8 gap-6">
      {productData.map((data) => (
        <Card
          key={data.id}
          data={data}
          selected={selected}
          setSelected={setSelected}
          count={count}
          setCount={setCount}
        ></Card>
      ))}
    </div>
  );
};

export default Products;
