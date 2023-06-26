import React from "react";
import { Row, Container } from "react-bootstrap";

function Features() {
  return (
    <section id="features">
      <Container>
        <Row>
          <div className="section-image-features">
            <img src="./images/features.svg" width="200" alt="features" />
          </div>
          <div className="section-text">
            <div className="section-text__title">Features</div>

            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">Easy to Filter</div>
                <div className="section-text__desc">
                  You can Filter candidates as per your requirement easily
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">Less paperwork</div>
                <div className="section-text__desc">
                  You can easily hire candidates without much paperwork
                </div>
              </div>
            </div>

            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  Customer Support
                </div>
                <div className="section-text__desc">
                  24 hours customer Support to insure the best quality
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">Real Candidate</div>
                <div className="section-text__desc">
                  We assure you that candidates are 100% genuine
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
