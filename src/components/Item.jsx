import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const Item = ({ product }) => (
  <Container
    className="d-flex justify-content-center align-items-center"
    style={{ minHeight: "100vh" }}
  >
    <Card
      style={{
        width: "20rem",
        backgroundColor: "transparent",
        border: "solid orange 1px",
      }}
    >
      <Card.Img variant="top" src={product.pictureUrl} />
      <Card.Body>
        <Card.Title style={{ color: "white" }}>{product.title}</Card.Title>
        <Card.Text style={{ color: "red" }}>{product.categoryId}</Card.Text>
        <Card.Text style={{ color: "white" }}>{product.description}</Card.Text>
        <Card.Text style={{ color: "green" }}>
          Stock disponible: {product.stock}
        </Card.Text>
        <Card.Text style={{ color: "white" }}> $ {product.price}</Card.Text>
        <Link to={`/item/${product.id}`}>
          <Button variant="success">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  </Container>
);
