import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ "background-color": "black", color: "#ffff" }}>
      <Container>
        <Row>
          <Col className="text-center mt-3">Copyright &copy; {year}</Col>
        </Row>
        <Row>
          <Col className="text-center my-3">Electronica</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
