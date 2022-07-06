import React from "react";
import { Container, Row, Col, Nav } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <Container fluid>
          <Row>
            <div>
              <h2 className="mb-4 active">Sweat: Eating made easy</h2>
            </div>
            <Col xs="6" sm="3" className="mb-3">
              <h4>About Us</h4>
              <Nav vertical>
                <Link to="#">Aim</Link>
                <Link to="#">Vision</Link>
                <Link to="#">Testimonials</Link>
              </Nav>
            </Col>
            <Col xs="6" sm="3" className="mb-3">
              <h4>Services</h4>
              <Nav vertical>
                <Link to="#">Writing</Link>
                <Link to="#">Internships</Link>
                <Link to="#">Coding</Link>
                <Link to="#">Teaching</Link>
              </Nav>
            </Col>
            <Col xs="6" sm="3" className="mb-3">
              <h4>Contact Us</h4>
              <Nav vertical>
                <Link to="#">Uttar Pradesh</Link>
                <Link to="#">Ahemdabad</Link>
                <Link to="#">Indore</Link>
                <Link to="#">Mumbai</Link>
              </Nav>
            </Col>
            <Col xs="6" sm="3" className="mb-3">
              <h4>Social Media</h4>
              <Nav vertical>
                <Link to="#">
                  <i className="fab fa-facebook-f">
                    <span style={{ marginLeft: "10px" }}>Facebook</span>
                  </i>
                </Link>
                <Link to="#">
                  <i className="fab fa-instagram">
                    <span style={{ marginLeft: "10px" }}>Instagram</span>
                  </i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter">
                    <span style={{ marginLeft: "10px" }}>Twitter</span>
                  </i>
                </Link>
                <Link to="#">
                  <i className="fab fa-youtube">
                    <span style={{ marginLeft: "10px" }}>Youtube</span>
                  </i>
                </Link>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col xs="auto">
              <p>
                Copyright © 2021 <b>Sweat</b>. <i>All Rights Reserved</i>.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
