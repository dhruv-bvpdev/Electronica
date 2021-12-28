import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form className="d-flex" onSubmit={submitHandler}>
      <Form.Control
        type="search"
        placeholder="Search Products"
        onChange={(e) => setKeyword(e.target.value)}
        className="me-2"
        aria-label="Search"
      />
      <Button variant="dark" type="submit">
        <i className="fas fa-search"></i>
      </Button>
    </Form>
  );
};

export default SearchBox;
