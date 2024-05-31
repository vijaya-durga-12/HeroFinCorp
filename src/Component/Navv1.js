import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BsBellFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FcMoneyTransfer } from "react-icons/fc";
// Import the image
import loanImage from "../asserts/loanimage.jpeg";
import Navv2 from "./Navv2";
import Secondcarddata from "./Secondcarddata";
import Footerabovefile from "./Footerabovefile";

const Navv1 = () => {
  return (
    <div class="container-fluid">
      <Navbar
      
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        className="text-white"
      >
       
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse
            id="navbar-nav"
            className="d-flex justify-content-between"
          >
            <Nav
              className="mx-auto text-white"
              style={{ justifyContent: "center" }}
            >
              <Nav.Link href="#home">ABOUT US</Nav.Link>
              <Nav.Link href="#products">PRODUCTS</Nav.Link>
              <Nav.Link href="#features">CAREERS</Nav.Link>
              <Nav.Link href="#reach-us">REACH US</Nav.Link>
              <Nav.Link href="#blog">BLOG</Nav.Link>
              <Nav.Link href="#investors">INVESTORS</Nav.Link>
              <Nav.Link
                href="#csr"
                className="d-flex justify-content-space-around"
              >
                CSR
              </Nav.Link>
              <Nav.Link href="#customer-section">CUSTOMER SECTION</Nav.Link>
              <Nav.Link href="#emi-calculator">EMI CALCULATOR</Nav.Link>
              <Nav.Link href="#bell" className="text-warning">
                <span style={{ fontSize: "1.5em" }}>
                  <BsBellFill />
                </span>
              </Nav.Link>
              <Nav.Link href="#search" className="text-white">
                <span style={{ fontSize: "1.5em" }}>
                  <FaSearch />
                </span>
              </Nav.Link>
              <Nav.Link href="#apply" className="text-white">
                <Button variant="warning">APPLY NOW</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
       
      </Navbar>
      <br></br>
      <br></br>
      <Container style={{ marginTop: "60px" }}>
        <Row>
          <Col md={12} lg={6}>
            <h1 style={{ color: "black" }}>
              <b>
                Personal Loan In <span style={{ color: "green" }}>Noida</span>
              </b>
            </h1>
            <h3>
              <p>
                <FcMoneyTransfer />
                Loan up to ₹3 Lakhs
              </p>
              <p>
                <FcMoneyTransfer />
                Minimum Salary Required ₹15K
              </p>
              <p>
                <FcMoneyTransfer />
                Instant Approval
              </p>
            </h3>
            <Button style={{ color: "white", background: "green" }}>
              Apply Now
            </Button>
          </Col>
          <Col md={12} lg={6}>
            <img src={loanImage} alt="Loan" className="img-fluid" height={"500px"} width={"500px"}/>
          </Col>
        </Row>
      </Container>
      <br></br>
      
       <div>
          <Navv2 />
       </div> 
      <Container>

      <div>
        <Secondcarddata />
      </div>
      </Container>

      <div>
        <Footerabovefile/>
      </div>
    </div>
    
  );
};

export default Navv1;
