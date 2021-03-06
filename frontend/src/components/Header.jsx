import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Route } from "react-router-dom";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Electrónica</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="collasible-nav-dropdown">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                {userInfo.isAdmin && (
                  <>
                    <NavDropdown.Item href="/admin/userlist">
                      Users
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/admin/productlist">
                      Products
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/admin/orderlist">
                      Orders
                    </NavDropdown.Item>
                  </>
                )}
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login">Sign In</Nav.Link>
            )}
          </Nav>
          <Route render={({ history }) => <SearchBox history={history} />} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
