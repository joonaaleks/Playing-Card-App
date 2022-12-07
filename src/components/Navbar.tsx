import { Container, Nav, Navbar as Navbs } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar() {
    return (
        <Navbs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/Cards" as={NavLink}>
                        Cards
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbs>
    )
}