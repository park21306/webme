import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

export default function About() {
  return (
    <Container>
      <Row>
        <Col className="color-col">1 of 2 </Col>
        <Col className="color-col2">2 of 2</Col>
      </Row>
    </Container>
  );
}
