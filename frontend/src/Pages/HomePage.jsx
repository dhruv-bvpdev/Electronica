import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import products from "../products";

const HomePage = () => {
  return (
    <React.Fragment>
      <h2 className="my-4">Latest Products</h2>
      <Container>
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} ld={4} xl={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
