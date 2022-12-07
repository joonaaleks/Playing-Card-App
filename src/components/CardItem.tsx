import { Card } from "react-bootstrap"

type CardItemProps = {
    id: number,
    suit: string,
    rank: number,
    img: string,
}

export function CardItem({ id, suit, rank, img }:
    CardItemProps) {
    return (
        <Card>
            <Card.Img variant="top" src={img} height="200px" style={
                { objectFit: "contain" }
            } />
        </Card>
    )
}