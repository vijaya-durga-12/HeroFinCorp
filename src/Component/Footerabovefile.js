import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import angleinvestors from "../asserts/angleinvestors.jpeg";
import loangifts from "../asserts/loangifts.jpeg";
import personalloan from "../asserts/personalloans.jpeg";
import refinance from "../asserts/refinance.jpeg";
import windfalltax from "../asserts/windfalltax.jpeg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import Table from "react-bootstrap/Table";
import ThirdCarddata from "./ThirdCarddata";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';


const Footerabovefile = () => {

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide' style='background-color: lightgreen; border-radius: 4px; border: 1px solid #ddd; padding: 10px; cursor: pointer; font-size: 1.5em; position: absolute; left: -20px; top: 40%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;'>&lt;</div>",
      "<div class='nav-btn next-slide' style='background-color: lightgreen; border-radius: 4px; border: 1px solid #ddd; padding: 10px; cursor: pointer; font-size: 1.5em; position: absolute; right: -20px; top: 40%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;'>&gt;</div>"
    ],
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  };

  const cardStyle = {
    width: "100%",
    height: "300px"
  };

  const imgStyle = {
    width: "100%",
    height: "150px",
  };
  return (
    <div>
       
        <div>
            <ThirdCarddata/>
        </div>
      
      <div style={{padding:"3rem"}}>
        <h1 style={{ color: "green" }}>
          Interest Rates on Personal Loan in Noida
        </h1>
        <p>At Hero FinCorp, our Personal Loan interest rates in Noida start at 15%. So, you don't need to worry about excessive payment in addition to your principal amount. Unlike loan agents in Noida,<br></br> we have a transparent fee structure that includes the following charges:</p>
       <br></br>
        <Table striped bordered hover style={{backdropFilter:"initial"}}>
          <thead >
            <tr>
              <th >Fees & Charges</th>
              <th>Chargeable Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Interest Rate</td>
              <td>25% p.a.</td>
            </tr>
            <tr>
              <td>Processing Fee</td>
              <td>2.5% to 3.5%</td>
            </tr>

            <tr>
              <td>Part-payment charges</td>
              <td>NA</td>
            </tr>
            <tr>
              <td>Foreclosure Charges</td>
              <td>5% + GST</td>
            </tr>
            <tr>
              <td>EMI Bounce Charges</td>

              <td>Rs 350/-</td>
            </tr>
          </tbody>
        </Table>
        <center>
        <Button  style={{
              backgroundColor: "green",
              text: "white",
              height: "50px",
              width: "200px",
            }}>Read More
            </Button>
            </center>
      </div>

      
      <div
        className="text"
        style={{
          backgroundColor: "lightblue",
          fontSize: "20px",
          fontFamily: "inherit",
          padding:"2rem"
        }}
      >
        <aside>
          <h1 style={{ color: "green",margin:"3rem"}}>
            How To Apply For a Personal Loan in Noida?
          </h1>
          <h3>
            To apply for a Personal Loan in Noida from Hero FinCorp, follow
            these steps:
          </h3>
          <ol>
            <li>
              {" "}
              A personal loan in Noida can be applied both online and offline at
              the nearest Hero FinCorp branch.
            </li>
            <li>
              {" "}
              Fill a simple personal loan application form that needs a few
              details about you and the purpose of the loan. Also, carry a
              passport size photograph.
            </li>
            <li>
              Copies of KYC records such as identity proof, residential proof,
              PAN card and also proof of monthly income have to be uploaded
              either online or submitted offline at the nearest Hero FinCorp
              branch.{" "}
            </li>
            <li>
              {" "}
              If the personal loan application form and KYC records are in line
              with the eligibility criteria, then Hero FinCorp will approve your
              personal loan request and ask you to sign a loan agreement,
              accepting the terms and conditions.
            </li>
            <li>
              {" "}
              After all the above stages are completed, the agreed loan amount
              will be disbursed to your bank account within a few minutes.
            </li>
          </ol>
        </aside>
        <center>
          <Button
            style={{
              backgroundColor: "green",
              text: "white",
              height: "50px",
              width: "200px",
            }}
          >
            Apply Now
          </Button>
        </center>
        <br></br>
      </div>

      <br></br>
      <br></br>
      <center>
        <h1 style={{ color: "green" }}>Frequently Asked Questions</h1>
      </center>
      <br />
      <center>
        <div>
          <DropdownButton
            title="What is the maximum loan amount sanctioned at HeroFinCrop for personal Loan in Noida?"
            id="dropdown-menu-align-responsive-1"
            style={{
              color: "white",
              width: "100%",
              textAlign: "center",
              
            }}
            className="text-white"
          >
            <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
          </DropdownButton>
        </div>
        <br />
        <div className="mt-2">
          <SplitButton
            title="How Old an application should be to avail of Personal Loan Noida?"
            id="dropdown-menu-align-responsive-2"
            style={{
              color: "white",
              textAlign: "center",
            }}
            className="text-white"
          >
            <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
          </SplitButton>
        </div>
        <br />
        <div className="mt-2">
          <SplitButton
            title="How Old an application should be to avail of Personal Loan Noida?"
            id="dropdown-menu-align-responsive-2"
            style={{
              color: "white",
              textAlign: "center",
            }}
            className="text-white"
          >
            <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
          </SplitButton>
        </div>
        <br />
        <div className="mt-2">
          <SplitButton
            title="How Old an application should be to avail of Personal Loan Noida?"
            id="dropdown-menu-align-responsive-2"
            style={{
              color: "white",
              textAlign: "center",
            }}
            className="text-white"
          >
            <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
          </SplitButton>
        </div>
      </center>
      

      <div style={{ backgroundColor: "Aliceblue", margin: "3rem" }}>
      <br />
      <center>
        <h1 style={{ color: "green" }}>Personal Loan Noida Related Blogs</h1>
      </center>
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={angleinvestors} alt="Loan" style={imgStyle} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={loangifts} alt="Loan" style={imgStyle} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={personalloan} alt="Loan" style={imgStyle} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={refinance} alt="Loan" style={imgStyle} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={windfalltax} alt="Loan" style={imgStyle} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={personalloan} alt="Loan" style={imgStyle} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </OwlCarousel>
      <center>
        <Button
          style={{
            backgroundColor: "green",
            color: "white",
            height: "50px",
            width: "100px"
          }}
        >
          View All
        </Button>
      </center>
    </div>



      <div className="row row-d-flex" style={{padding:"3rem"}}>
        <div className="col-md-6 col-lg-4 col-12 ft-1">
          <Card>
            <Card.Header>Presonal Key Loan Page</Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Personal Loan Overview</li>
                  <li>Check Personal Loan Interest Rate</li>
                  <li>Check your personal loan Eligibility</li>
                  <li>Document Required for personal loan</li>
                  <li>Check your personal loan EMI</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4 col-12 ft-1">
          <Card>
            <Card.Header>Personal Loan In Top Cities</Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Personal Loan in Pune</li>
                  <li>Personal Loan in Hyderabad</li>
                  <li>Personal Loan in Chennai</li>
                  <li>Personal Loan in Delhi</li>
                  <li>Personal Loan in Coimbatore</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4 col-12 ft-1">
          <Card>
            <Card.Header>Presonal Loan Related Pages</Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Instant Personal Loan App</li>
                  <li>Instant Cash Loan</li>
                  <li>Salary Advance loan</li>
                  <li>Mobile Loan</li>
                  <li>Medical Loan</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default Footerabovefile;
