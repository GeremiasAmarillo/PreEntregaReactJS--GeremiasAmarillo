import Container from "react-bootstrap/Container";

import { MyCard } from "./Card";


export const CardList = ({people}) => (
    <Container className="d-flex flex-wrap mt-3">
        {people.map(person => {
            return < MyCard key={person.id} person={person} />
        })}
    </Container>
)


