import { Navbar, Container, Nav } from "react-bootstrap";

import "./navbar.css";

export default function navbar() {
  return (
    <Navbar className="color-nav text-light">
      <Container>
        <Nav.Link href="/" className="logo">
          <h3>🐱GummyKitty🐯</h3>
        </Nav.Link>
        <Nav.Link href="/About">🐰About</Nav.Link>
        <Nav.Link href="/Project">🍖Project</Nav.Link>
        <Nav.Link href="/Cer">👩‍💻Certificate</Nav.Link>
      </Container>
    </Navbar>
  );
}
