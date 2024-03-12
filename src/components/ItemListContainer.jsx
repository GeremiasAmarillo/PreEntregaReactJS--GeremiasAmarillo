import Container from "react-bootstrap/Container";

export const ItemListContainer = ({ greeting }) => (
  <Container ClassName="mx-auto">
    <h1>{greeting}</h1>
  </Container>
);
