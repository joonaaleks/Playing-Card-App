import { Col, Container, Row } from "react-bootstrap"
import { PickCard } from "../components/PickCard"

export function Card() {

    const playerHand = [
        { id: 1, text: "Add card" },
        { id: 2, text: "Add card" }
    ]

    const table = [
        { id: 3, text: "Add card" },
        { id: 4, text: "Add card" },
        { id: 5, text: "Add card" },
        { id: 6, text: "Add card" },
        { id: 7, text: "Add card" }
    ]

    return (
        <><h1>Pick your hand</h1>
            <Container style={{ marginBottom: "10rem" }}>
                <Row md={2} xs={2} lg={5} className="g-3">
                    {playerHand.map(player_cards => (
                        <Col key={player_cards.id}>
                            <PickCard {...player_cards} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <br></br>
            <Container>
                <Row md={2} xs={2} lg={5}>
                    {table.map(table_cards => (
                        <Col key={table_cards.id}>
                            <PickCard {...table_cards} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}