import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="warning" data-bs-theme="warning">
        <Container>
          <Navbar.Brand to="http://localhost:5174/" as={NavLink}>
            Ecommerce Geremias
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/Android" as={NavLink}>
              Android
            </Nav.Link>
            <Nav.Link to="/category/Sony" as={NavLink}>
              Sony
            </Nav.Link>
            <Nav.Link to="/category/iOS" as={NavLink}>
              iOS
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
