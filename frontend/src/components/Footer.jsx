import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ "background-color": "black", color: "#ffff" }}>
      <Container>
        <Row>
          <Col className="text-center mt-3">Copyright &copy; 2022</Col>
        </Row>
        <Row>
          <Col className="text-center my-3">Electronica</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
