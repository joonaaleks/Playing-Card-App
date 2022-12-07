import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/home"
import { Card } from "./pages/card"
import { Allcards } from "./pages/allcards"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/allCards" element={<Allcards />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
