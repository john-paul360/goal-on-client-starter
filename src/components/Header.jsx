import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import person from "../assets/person.png";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-white border-bottom border-2 head">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto my-2 my-lg-0" navbarScroll>
              <Link
                to="/ongoing"
                className="text-decoration-none text-dark fw-bold tag"
              >
                Ongoing
              </Link>
              <Link
                to="/completed"
                className="text-decoration-none text-dark fw-bold tag"
              >
                Completed
              </Link>
              <Link
                to="/all"
                className="text-decoration-none text-dark fw-bold tag"
              >
                All Goals
              </Link>
            </Nav>
            <div className="ms-auto my-2 my-lg-0">
              <img src={person} alt="" className="mx-2 my-2 my-lg-0 d-block" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
