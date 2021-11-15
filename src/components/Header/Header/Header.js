import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../../hooks/useAuth';

const Header = () => {
    const {user,logOut}= useAuth()
    return (
      <>
        <Navbar
          bg="dark"
          variant="dark"
          sticky="top"
          collapseOnSelect
          expand="lg"
        >
          <Container>
            <Navbar.Brand href="#home">Digital Sunglass Shop</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link
                className="fw-bold fs-4"
                style={{ color: "white" }}
                as={HashLink}
                to="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="fw-bold fs-4"
                style={{ color: "white" }}
                as={HashLink}
                to="/explore"
              >
                More Product
              </Nav.Link>
              <Nav.Link
                className="fw-bold fs-4"
                style={{ color: "white" }}
                as={HashLink}
                to="/dashboard"
              >
                Dashboard
              </Nav.Link>
              {user?.email ? (
                <Button className="btn btn-primary" onClick={logOut}>
                  {" "}
                  Logout
                </Button>
              ) : (
                <Nav.Link style={{ color: "white" }} as={HashLink} to="/login">
                  Login
                </Nav.Link>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;