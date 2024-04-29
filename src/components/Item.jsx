import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

export const Item = ({ product }) => (
  <Card style={{ width: "19rem", backgroundColor: "transparent" }}>
    <Card.Img variant="top" src={product.pictureUrl} />
    <Card.Body>
      <Card.Title style={{ color: "green" }}>{product.title}</Card.Title>
      <Card.Text style={{ color: "white" }}>{product.description}</Card.Text>
      <Card.Text style={{ color: "red" }}>{product.categoryId}</Card.Text>
      <Card.Text style={{ color: "white" }}> $ {product.price}</Card.Text>
      <Link to={`/item/${product.id}`}>
        <Button variant="success">Ver detalle</Button>
      </Link>
    </Card.Body>
  </Card>
);
