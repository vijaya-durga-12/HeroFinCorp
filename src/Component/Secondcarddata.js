import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import businessloans from '../asserts/bussinessloan.jpeg'
import homeloan from '../asserts/homeloan.jpeg'
import womenloan from '../asserts/womenloan.jpeg'

const Secondcarddata = () => {

  const imgStyle = {
    position:"center",
    width: "100px",
    height: "100px",
    objectFit: "cover"
  };
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide' style='background-color: lightgreen; border-radius: 4px; border: 1px solid #ddd; padding: 10px; cursor: pointer; font-size: 1.5em; position: absolute; left: -20px; top: 40%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;'>&lt;</div>",
      "<div class='nav-btn next-slide' style='background-color: lightgreen; border-radius: 4px; border: 1px solid #ddd; padding: 10px; cursor: pointer; font-size: 1.5em; position: absolute; right: -20px; top: 40%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;'>&gt;</div>",
    ],
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };

  const cardStyle = {
    width: "15rem",
    height: "25rem",
  };

  return (
    <div
    >
      <div style={
        {
          padding:"2rem"
        }
      }>
        <h1 style={{ color: "green" }}>
          <b>Get Personal Loan in Noida With Quick Approval</b>
        </h1>

        <p>
          Uttar Pradesh’s pride Noida is a planned city situated in the National
          Capital Region (NCR) of India. It is home to many IT and software
          development companies such as Microsoft, Samsung and HCL. In addition,
          the presence of a large number of BPO companies in the city makes it
          sought after destination for job seekers as well as business owners.
          So, no surprise that there is a high demand for personal loan in
          Noida. Hero FinCorp, a Personal Loan Provider in Noida, is one of the
          most popular choices for people seeking personal loans at competitive
          interest rates.
        </p>
      </div>
      <div style={{
        backgroundColor: "Aliceblue",
        padding: "5rem",
        margin: "2rem 0",
        width: "100%",
      }}>
      <Container>
        <h1 className="text-center">We Offer a Wide Range of Personal Loans!</h1>
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <Card style={cardStyle}>
              <Card.Body>
              <Card.Img variant="top" src={homeloan} alt="Loan" style={imgStyle} />

                <Card.Title>Personal Loans For Doctors</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card style={cardStyle}>

              <Card.Body>
              <Card.Img variant="top" src={businessloans} alt="Loan" style={imgStyle} />

                <Card.Title>Personal Loans For Travel</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card style={cardStyle}>
              <Card.Body>
              <Card.Img variant="top" src={womenloan} alt="Loan" style={imgStyle} />

                <Card.Title>Personal Loans For Wedding</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card style={cardStyle}>
              <Card.Body>
              <Card.Img variant="top" src={homeloan} alt="Loan" style={imgStyle} />

                <Card.Title>Personal Loans For Travel</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card style={cardStyle}>
              <Card.Body>
              <Card.Img variant="top" src={businessloans} alt="Loan" style={imgStyle} />

                <Card.Title>Personal Loans For Travel</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card style={cardStyle}>
              <Card.Body>
              <Card.Img variant="top" src={womenloan} alt="Loan" style={imgStyle} />

                <Card.Title>Personal Loans For Home Renovation</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </OwlCarousel>
      </Container>
      </div>
    </div>
  );
};

export default Secondcarddata;
