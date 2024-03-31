import React from "react";

import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <div className="d-flex">
      {products.map((products) => (
        <Item key={products.id} product={products} />
      ))}
    </div>
  );
};