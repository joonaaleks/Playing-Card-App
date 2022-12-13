import { Button, Card, Col, Row, } from "react-bootstrap"
import { useState } from "react"
import Modal from 'react-bootstrap/Modal';
import { CardItem } from "../components/CardItem"
import cardItems from "../data/items.json"
import "./styles.css"

type PickCardProps = {
    id: number,
    text: string
}

export function PickCard({ id, text }: PickCardProps) {

    function log() {
        console.log(id)
    }

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Card className="pickCard" onClick={handleShow}>
                <Card.Body>
                    <Card.Title>Add card</Card.Title>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} animation={false} backdrop="static">
                <Modal.Header>
                    <Modal.Title>Choose a Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row md={3} xs={2} lg={5} className="g-3">
                        {cardItems.map(card => (
                            <Col key={card.id}>
                                <CardItem {...card} />
                            </Col>
                        ))}
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add Cards
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}