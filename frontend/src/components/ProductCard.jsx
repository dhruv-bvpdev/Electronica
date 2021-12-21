import React from "react";
import Rating from "../components/Rating";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ textAlign: "center" }} border="light" className="my-3">
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3" style={{ padding: "1rem, 0" }}>
          ₹{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
