import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
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
