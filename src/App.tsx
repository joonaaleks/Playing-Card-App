import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/home"
import { Cards } from "./pages/cards"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cards" element={<Cards />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
