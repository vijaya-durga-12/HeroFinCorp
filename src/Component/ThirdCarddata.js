import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import finance from "../asserts/finance2.jpeg";
const ThirdCarddata = () => {
  const imgStyle = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
  };
  const [rangeValue, setRangeValue] = useState();
  const [rangeValue1, setRangeValue1] = useState(25);
  const [rangeValue2, setRangeValue2] = useState(36);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const handleRangeChange2 = (event) => {
    setRangeValue2(event.target.value);
  };
  const mainHeadingStyle = {
    color: "green",
  };

  const cardTitleStyle = {
    color: "green",
  };

  const cardTextStyle = {
    color: "#555",
  };

  const containerPaddingStyle = {
    padding: "3rem",
  };

  const yellowBackgroundStyle = {
    backgroundColor: "lightyellow",
    padding: "3rem",
  };

  const centerPaddingStyle = {
    padding: "3rem",
    textAlign: "center",
  };

  return (
    <div>
      <div style={containerPaddingStyle}>
        <aside>
          <h1 style={mainHeadingStyle}>
            <b>Personal Loan EMI Calculator</b>
          </h1>
          <p>
            While looking for Personal Loan finance in Noida, you can calculate
            EMIs for various loan terms using a Personal Loan EMI calculator. It
            calculates the EMIs using three loan variables: principal amount,
            interest rate, and repayment tenure. Knowing your EMIs beforehand
            helps you choose a repayment plan with EMIs you can easily afford to
            pay each month. Enter the three variables in the EMI calculator and
            get results within a flash second.
          </p>
        </aside>
        <Container>
          <Row>
            <div className="col-md-6 col-lg-6 col-12 ft-1">
              <Card className="mb-4" style={{ width: "100%", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={cardTitleStyle}>Loan Detail</Card.Title>
                  <Card.Text>
                    <h4>Select Loan Amount</h4>
                    <Form.Label
                      className="min-50000 max=300000"
                      style={{ color: "green" }}
                    >
                      Rupees: {rangeValue}
                    </Form.Label>
                    <Form.Range
                      value={rangeValue}
                      onChange={handleRangeChange}
                    />
                    <h4>Interest Rate</h4>
                    <Form.Label style={{ color: "green" }}>
                      Interest: {rangeValue1}
                    </Form.Label>
                    <Form.Range
                      style={{ color: "green" }}
                      value={rangeValue1}
                    />
                    <h4>Select Loan Repay Duration</h4>
                    <Form.Label style={{ color: "green" }}>
                      Max Amount: {rangeValue2}
                    </Form.Label>
                    <Form.Range
                      value={rangeValue2}
                      onChange={handleRangeChange2}
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-lg-6 col-12 ft-1">
              <Card
                className="mb-4"
                style={{ width: "400px", height: "200px" }}
              >
                <Card.Body>
                  <Card.Title style={cardTitleStyle}>
                    Your Estimated EMI
                  </Card.Title>
                  <Card.Text>AMOUNT:{rangeValue}</Card.Text>
                  <center>
                    <Button
                      style={{ backgroundColor: "green", border: "none" }}
                    >
                      Apply For Personal Loans
                    </Button>
                  </center>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
      <div style={yellowBackgroundStyle}>
        <div style={centerPaddingStyle}>
          <h1 style={mainHeadingStyle}>
            Features And Benefits of Hero Fincorp Personal Loan Noida
          </h1>
          <p>
            Hero FinCorp, a Personal Loan Finance company in Noida, offers loans
            with many features and advantages. Some of them are:
          </p>
        </div>
        <Container>
          <Row>
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4 col-12 ft-1 mb-4">
                <Card
                  className="mb-4"
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: "2rem",
                    backgroundColor: "aliceblue",
                  }}
                >
                  <Card.Body>
                    <center>
                      <Card.Img
                        variant="top"
                        src={finance}
                        alt="Loan"
                        style={imgStyle}
                      />
                    </center>
                    <Card.Title style={cardTitleStyle}>
                      {feature.title}
                    </Card.Title>
                    <Card.Text style={cardTextStyle}>{feature.text}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Row>
        </Container>
      </div>
      <div style={containerPaddingStyle}>
        <h1 style={mainHeadingStyle}>
          Eligibility Criteria for Instant Personal Loan in Noida
        </h1>
        <h3>
          To apply for a personal loan in Noida through Hero FinCorp, the
          following eligibility criteria must be fulfilled.
        </h3>
        <Container>
          <Row>
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="col-md-6 col-lg-6 col-12 ft-1 mb-4 ">
                <Card style={{ width: "100%", height: "100%" }}>
                  <Card.Body>
                    <Card.Title style={cardTitleStyle}>
                      {criteria.title}
                    </Card.Title>
                    <Card.Text style={cardTextStyle}>{criteria.text}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Row>
        </Container>
      </div>
      <div style={containerPaddingStyle}>
        <h1 style={mainHeadingStyle}>
          Documents Required to Apply for a Personal Loan in Noida
        </h1>
        <p>
          At Hero FinCorp, our Personal Loan application procedure is 100%
          digital, so you can apply from your phone. That means you don't need
          to visit our branch office to submit the necessary documents. You can
          simply scan the required documents and upload their soft copies online
          using our website or loan app. However, the documentation requirements
          for an instant Personal Loan in Noida differ based on your profession.
          For instance, they are different for salaried employees and
          self-employed professionals.
        </p>
        <Container>
          <Row>
            {documentRequirements.map((document, index) => (
              <div key={index} className="col-md-6 col-lg-6 col-12 ft-1 mb-4">
                <Card
                  className="mb-4"
                  style={{ width: "100%", height: "100%" }}
                >
                  <div
                    style={{
                      backgroundImage: "linear-gradient(green,lightblue)",
                      color: "darkred",
                      border: "10px",
                    }}
                  >
                    <Card.Title style={{ color: "white" }}>
                      {document.title}
                    </Card.Title>

                    <Card.Subtitle className="mb-2 text-muted">
                      {document.subtitle}
                    </Card.Subtitle>
                  </div>
                  <Card.Body>
                    <Card.Text style={cardTextStyle}>
                      {document.items.map((item, idx) => (
                        <div key={idx}>
                          <h4>{item.heading}</h4>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Row>
        </Container>
        <p>
          Therefore, evaluate your documentation requirements carefully based on
          your profession and provide the appropriate documents to get easy
          approval.
        </p>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Substantial Loan Amount:",
    text: "Hero FinCorp offers personal loans in Noida within the range of Rs 50,000 and Rs 3,00,000 to eligible borrowers—quite a substantial amount when compared to personal loans offered by other lending institutions in Noida.",
  },
  {
    title: "Compatible Interest Rate:",
    text: "The EMI amount in any Personal Loan depends on the interest rate and repayment tenure. At Hero FinCorp, a Personal Loan provider in Noida, personal loans are given to eligible applicants at compatible interest rates, making the EMI payments fit within budget for both salaried and self-employed professionals.",
  },
  {
    title: "Collateral-free Approval:",
    text: "A personal loan in Noida is an unsecured loan that does not need collateral for approval. Hero FinCorp offers personal loans with no collateral and the loan amount depends on the monthly income of the applicant, among other factors.",
  },
  {
    title: "Flexible Repayment Tenure:",
    text: "Hero FinCorp personal loan schemes come with the option to choose EMI repayment tenure as per the applicant’s financial capabilities. Flexible tenure of 6 months to 36 months is set by Hero FinCorp to support their customers by easing their financial burden.",
  },
  {
    title: "Instant Approval:",
    text: "Hero FinCorp, a Personal Loan provider in Noida, has a well–organised and effective personal loan approval system. With just a few relevant documents and a simple application form, an eligible applicant can get instant approval after a successful evaluation.",
  },
];

const eligibilityCriteria = [
  {
    title: "Age",
    text: "An Indian resident within the age limit of 21 years to 58 years can apply for a personal loan in Noida.",
  },
  {
    title: "Citizenship",
    text: "To be eligible for an instant Personal Loan in Noida, candidates must be Indian citizens.",
  },
  {
    title: "Work Experience",
    text: "A salaried professional having a job experience of a minimum of 6 months at a firm. A self-employed person should have at least two years of experience in their current business.",
  },
  {
    title: "Monthly Salary",
    text: "The applicant must be receiving a monthly salary package of Rs 15,000 or above to be eligible for a personal loan in Noida.",
  },
  {
    title: "CIBIL Score",
    text: "The applicant must have a good credit score of 600 or above to get instant approval for a personal loan in Noida.",
  },
];

const documentRequirements = [
  {
    title: "Documents Required",
    subtitle: "For Salaried Employees",
    items: [
      {
        heading: "Proof Of Photo Identity",
        description: "Driver’s Licence, Passport, PAN Card, Aadhaar card",
      },
      {
        heading: "Mandatory Documents",
        description: "PAN Card",
      },
      {
        heading: "Proof of Residence",
        description:
          "Passport, Rental Agreement, Bank Statement with Address, Utility Bills.",
      },
      {
        heading: "Income Proof",
        description: "3 Months Bank Statement, Latest 3 Salary Slips",
      },
    ],
  },
  {
    title: "Documents Required",
    subtitle: "For Self Employed",
    items: [
      {
        heading: "Proof Of Photo Identity",
        description: "Driver’s Licence, Passport, PAN Card, Aadhaar card",
      },
      {
        heading: "Mandatory Documents",
        description: "PAN Card",
      },
      {
        heading: "Proof of Residence",
        description:
          "Passport, Rental Agreement, Bank Statement with Address, Utility Bills.",
      },
      {
        heading: "Income Proof",
        description: "2 Year ITR, GST Registration, 3 Month Bank Statement",
      },
    ],
  },
];

export default ThirdCarddata;
