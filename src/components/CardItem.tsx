import { Card } from "react-bootstrap"
import "./styles.css"

type CardItemProps = {
    id: number,
    suit: string,
    rank: number,
    img: string,
}

export function CardItem({ id, suit, rank, img }:
    CardItemProps) {

    return (
        <Card className="card" onClick={() => console.log("click")} style={{ width: "14rem" }}>
            <Card.Img
                variant="top"
                src={img}
                style={{ objectFit: "contain" }} />
        </Card>
    )
}