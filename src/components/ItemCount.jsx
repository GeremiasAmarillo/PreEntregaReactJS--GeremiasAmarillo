import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export const ItemCount = ({ onAdd, stock }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleIncrease = () => {
    if (stock > quantity) setQuantity((prev) => prev + 1);
  };

  const handleAdd = () => {
    onAdd(quantity);
    setQuantity(1);
  };

  return (
    <div className="d-flex align-items-center">
      <Button
        variant="danger"
        style={{ marginRight: "10px" }}
        onClick={handleDecrease}
      >
        -
      </Button>
      <input type="number" value={quantity} readOnly />
      <Button
        variant="danger"
        style={{ marginLeft: "10px" }}
        onClick={handleIncrease}
      >
        +
      </Button>
      <Button
        variant="primary"
        style={{ marginLeft: "10px" }}
        onClick={handleAdd}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};
