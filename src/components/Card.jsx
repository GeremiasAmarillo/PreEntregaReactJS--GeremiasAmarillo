import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

export const MyCard = ({ person }) => {
  return (
    <Card style={{ width: "18rem" }}>
      {console.log(person)}
      <Card.Img variant="top" src="https://blog.formaciongerencial.com/wp-content/uploads/2010/05/iphone_einstein-2631.jpg" />
      <Card.Body>
        <Card.Title>
          {person.product} {person.description}
        </Card.Title>
        <Card.Text>Precio: {person.price}</Card.Text>
        <Button variant="primary">Ver</Button>
      </Card.Body>
    </Card>
  );
};