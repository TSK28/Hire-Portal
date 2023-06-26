import React from "react";
import { Row, Container } from "react-bootstrap";

function HeroBanner() {
  return (
    <section id="home">
      <Container>
        <Row>
          <div className="home-text">
            <div className="section-text__subtitle">Make Hiring easy</div>
            <div className="section-text__title-big">
              Get Best empoloyee with Hire Portal
            </div>
            <div className="section-text__body" style={{ fontSize: "1.5rem" }}>
              Register or log in now to experience the future of recruitment!
            </div>
            <a
              href="./register"
              className="download-btn"
              style={{
                display: "inline-block",
                marginRight: "1rem",
                marginTop: "0.5rem"
              }}
            >
              Register
            </a>
            <a
              href="./login"
              className="download-btn"
              style={{ marginTop: "0.5rem" }}
            >
              Login
            </a>
          </div>

          <div className="section-image">
            <img src="./images/JobSearch.jpg" alt="App Preview" />
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default HeroBanner;
