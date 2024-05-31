import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Secondcarddata from "./Secondcarddata";
import Carousel from 'react-bootstrap/Carousel';


const Navv2 = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="text-white"
      >
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse
            id="navbar-nav"
            className="d-flex justify-content-center"
          >
            <Navbar.Brand href="#home">Menu</Navbar.Brand>
            <Nav
              className="mx-auto text-white"
              style={{ justifyContent: "center" }}
            >
              <Nav.Link href="#products">Overview</Nav.Link>
              <Nav.Link href="#features">EMI calculator</Nav.Link>
              <Nav.Link href="#reach-us">Eligibility</Nav.Link>
              <Nav.Link href="#blog">Documents Required</Nav.Link>
              <Nav.Link href="#investors">Interest Rate & Charges</Nav.Link>
              <Nav.Link href="#csr" className="d-flex justify-content-space-around">
                FAQS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    
    </div>
  );
};

export default Navv2;
