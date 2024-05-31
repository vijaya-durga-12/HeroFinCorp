import React from "react";
import loanIcon from "../asserts/loanicon1.jpeg";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { TfiYoutube } from "react-icons/tfi";
import { SiPaytm } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <div className="Footer text-white bg-dark" style={{ padding: "3rem 0" }}>
        <div className="Footercontainer ">
          <div className="row footer">
            <div className="col-md-6 col-lg-2 col-12 ft-1">
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "0",
                  margin: "5px",
                  
                }}
              >
                <center>
                  <img
                    src={loanIcon}
                    alt="Loan"
                    className="img-fluid"
                    height={"100px"}
                    width={"100px"}
                  />

                  <li>
                    <span>
                      We are one of India's <br></br>fastest growing NBFCs,{" "}
                      <br></br>disbursing a loan every 30 seconds.
                    </span>
                    <br></br>
                  </li>
                  <li>
                    {" "}
                    <b>FOLLOW US</b>
                  </li>
                  <br></br>
                  <li>
                    <FaFacebook size={"40px"} />
                    <CiInstagram size={"40px"} />
                    <TfiYoutube size={"40px"} />
                  </li>
                </center>
              </ul>
            </div>

            <div className="col-md-6 col-lg-2 col-12 ft-1">
              <h2
                style={{
                  color: "green",
                  margin: "5px",
                  fontSize: "40px",
                  fontFamily: "unset",
                }}
              >
                <b>ABOUT US</b>
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "0",
                  margin: "5px",
                  
                }}
              >
                <li className="nav-item">Hero FinCrop Journey</li>
                <li className="nav-item">Certification & Memnership</li>
                <li className="nav-item">CEO's Message</li>
                <li className="nav-item">Board of Directors</li>
                <li className="nav-item">Leadership Team</li>
                <li className="nav-item">Company Policies</li>
                <li className="nav-item">CSR Report</li>
                <li className="nav-item">DGL HIPL</li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 col-12 ft-2">
              <h2
                style={{
                  color: "green",
                  margin: "5px",
                  fontSize: "40px",
                  fontFamily:"unset",
                }}
              >
                <b>INVESTORS</b>
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "0",
                  margin: "5px",
                  
                }}
              >
                <li className="nav-item">Financial Performance</li>
                <li className="nav-item">Notices & Intimations</li>
                <li className="nav-item">Unclaimed & Unpaid Dividend</li>
                <li className="nav-item">Statutory Compliances</li>
                <li className="nav-item">Investor Contact</li>
                <li className="nav-item">Press/Media</li>
                <li className="nav-item">link to SMART ODR</li>
                <li className="nav-item">
                  SEBI Circular on Online Dispute Resolution
                </li>
              </ul>
            </div>

            <div className="col-md-5 col-lg-2 col-12 ft-4">
              <h2
                style={{
                  color: "green",
                  margin: "5px",
                  fontSize: "40px",
                  
                }}
              >
                <b>REACH US</b>
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "0",
                  margin: "5px",
                }}
              >
                <li className="nav-item">Customer Care</li>
                <li className="nav-item">Offices</li>
                <li className="nav-item">Dealers</li>
                <li className="nav-item">Delar Login</li>
                <li className="nav-item">Sitemap</li>
                <li className="nav-item">Disclaimer</li>
                <li className="nav-item">Careers</li>
                <li className="nav-item">Online EMI Payments T&C's</li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 col-12 ft-1">
              <h2
                style={{
                  color: "green",
                  margin: "5px",
                  fontSize: "40px",
                  fontFamily: "unset",
                }}
              >
                <b>OUR PARTNERS</b>
              </h2>

              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "0",
                  margin: "5px",
                }}
              >
                <li>
                  <SiPaytm size={"60px"} />
                </li>
                <li>Paisabazaar</li>
                <li>Zest</li>
                <li>Prefr</li>
              </ul>
            </div>
          </div>
        </div>
        <center>
        <span>--------------------------------------------------------------------------------------------------------------------------------------------</span>
        </center>
        <div className="Footercontainer "style={{ padding: "3rem 0" }}>
        <div className="row footer">
          <div className="col-md-6 col-lg-3 col-12 ft-2">
            <h2
              style={{
                color: "green",
                margin: "5px",
                fontSize: "30px",
                fontFamily:"unset",
              }}
            >
              <b>OUR ADDRESS</b>
            </h2>
            <ul
              style={{
                listStyle: "none",
                paddingLeft: "0",
                margin: "5px",
              }}
            >
              <li className="nav-item"><b>CORPORATE OFFICE</b></li>
              <li className="nav-item">09, basant lok,Vasant Vihar</li>
              <li className="nav-item">New Delhi</li>
              <li className="nav-item">Tel. +91-11-4948713732</li>
              <li className="nav-item">
                Fax. +91-11-4948713732,+91-11-4948713732
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 col-12 ft-2">
            <ul
              style={{
                listStyle: "none",
                paddingLeft: "0",
                margin: "10px",
              }}
            >
              <li className="nav-item"><b>OPERATON CENTER</b></li>
              <p>
                A-44, Mohan Co-Operative Industrial Estate, Near Mohan Estate
                Metro Station, <br></br>Mathura Road, New Delhi , 110044 – India
              </p>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 col-12 ft-2">
            <h2
              style={{
                color: "green",
                margin: "5px",
                fontSize: "30px",
                fontFamily: "unset",
              }}
            >
              <b>CONNECT WITH US</b>
            </h2>
            <ul
              style={{
                listStyle: "none",
                paddingLeft: "0",
                margin: "5px",
              }}
            >
              <li className="nav-item"><b>RETAIL CUSTOMER CARE HELP</b></li>
              <li>Tel: 1986-566-4354</li>
              <li>Corporate.Care@HeroFinCrop.com</li>
              <li>10:00 AM-6:00 PM, Monday to Friday</li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 col-12 ft-2">
            <ul
              style={{
                listStyle: "none",
                paddingLeft: "0",
                margin: "10px",
                
              }}
            >
              <li className="nav-item"><b>IRDAL License No:CA0474</b></li>
              <p>
                Validity of Current License:<br></br>
                22-03-2023 to 21-03-2026<br></br>
                Category of License: Corporate Agent Composite
              </p>
            </ul>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Footer;
