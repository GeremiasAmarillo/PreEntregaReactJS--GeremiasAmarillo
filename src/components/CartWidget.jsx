import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import cart from "../assets/carrt.png";

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce((acc, elem) => acc + elem.quantity, 0);

  return (
    <Link to="/cart">
      <div
        style={{
          backgroundColor: "gold",
          borderRadius: "30%",
          border: "solid 10px gold",
        }}
      >
        <img src={cart} alt="logoDeCarrito" />
        {total}
      </div>
    </Link>
  );
};
