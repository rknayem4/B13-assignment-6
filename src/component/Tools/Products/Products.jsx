import React from 'react';
import Card from './Card/Card';

const Products = ({productData}) => {
  console.log(productData)
  return (
    <div className="grid grid-cols-3 my-8 gap-6">
      {productData.map(data  => <Card key={data.id} data={data}></Card>)}
    </div>
  );
};

export default Products;