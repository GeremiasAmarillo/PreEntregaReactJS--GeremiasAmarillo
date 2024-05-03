import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const add = (quantity) => {
    addItem(product, quantity);
  };

  return (
    <Container className="mx-auto">
      <h1 className="py-4" style={{ color: "white", fontSize: "5rem" }}>
        {product.title}
      </h1>
      <img
        className="py-3"
        style={{ height: 500, width: "auto" }}
        src={product.pictureUrl}
        alt="imgDeta"
      />
      <h5 style={{ color: "white", fontSize: "2rem" }}>
        {product.description}
      </h5>
      <div
        className="py-3"
        style={{ color: "green", fontSize: "1.5rem" }}
      >{`Stock ${product.stock}`}</div>
      <h4 style={{ color: "white", fontSize: "2rem" }}> $ {product.price}</h4>
      <ItemCount stock={product.stock} onAdd={add} />
    </Container>
  );
};
