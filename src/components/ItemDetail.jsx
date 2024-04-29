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
      <h1 className="py-4" style={{ color: "green" }}>
        {product.title}
      </h1>
      <img
        className="py-3"
        style={{ height: 350, width: "auto" }}
        src={product.pictureUrl}
        alt="imgDeta"
      />
      <h5 style={{ color: "green" }}>{product.description}</h5>
      <div
        className="py-3"
        style={{ color: "red" }}
      >{`Stock ${product.stock}`}</div>
      <h4 style={{ color: "green" }}> $ {product.price}</h4>
      <ItemCount stock={product.stock} onAdd={add} />
    </Container>
  );
};
