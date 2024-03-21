import Container from "react-bootstrap/Container";

export const ItemListContainer = ({ greeting }) => (
  <Container className="mx-auto">
    <h1>{greeting}</h1>
  </Container>
);
