import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar
        style={{ backgroundColor: "transparent" }}
        data-bs-theme="warning"
      >
        <Container>
          <Navbar.Brand
            style={{ fontSize: "2.5rem", color: "gold" }}
            as={NavLink}
            to="/"
          >
            Ecommerce Geremias
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              style={{ fontSize: "2rem", color: "white" }}
              as={NavLink}
              to="/category/Android"
            >
              Android
            </Nav.Link>
            <Nav.Link
              style={{ fontSize: "2rem", color: "white" }}
              as={NavLink}
              to="/category/Sony"
            >
              Sony
            </Nav.Link>
            <Nav.Link
              style={{ fontSize: "2rem", color: "white" }}
              as={NavLink}
              to="/category/iOS"
            >
              iOS
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
