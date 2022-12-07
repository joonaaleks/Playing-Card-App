import { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { CardItem } from "../components/CardItem"
import cardItems from "../data/items.json"

export function Allcards() {

    return (<><h1>Cards</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {cardItems.map(card => (
                <Col key={card.id}>
                    <CardItem {...card} />
                </Col>
            ))}
        </Row>
    </>
    )
}