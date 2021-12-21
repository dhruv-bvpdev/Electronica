import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartModal = ({ show }) => {
  return (
    <Modal show={show} animated={true} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Attention!!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Your shopping cart is empty</Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button variant="primary">Back</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
