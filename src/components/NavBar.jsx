import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="warning"  data-bs-theme="warning">
        <Container>
          <Navbar.Brand href="#home">Ecommerce Geremias</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Ventanas</Nav.Link>
            <Nav.Link href="#">Puertas</Nav.Link>
            <Nav.Link href="#">Mamparas</Nav.Link>
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
    </>
  );
};
