import React from "react";

function Services() {
  return (
    <section id="services">
      <div className="section-text">
        <div className="section-text__title-centered">
          How Hire Portal can help you!
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="phone-portrait-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">
                Streamlined Hiring Process
              </div>
              <div className="section-text__desc">
                Our app simplifies and accelerates the recruitment journey, from
                sourcing candidates to making job offers.
              </div>
            </div>
          </div>

          <div className="service-card active">
            <div className="service-card__icon">
              <ion-icon name="people-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">
                Enhanced Efficiency
              </div>
              <div className="section-text__desc">
                Save valuable time and resources with our advanced tools and
                features.
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="chatbubble-ellipses-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">
                Customized Candidate Search
              </div>
              <div className="section-text__desc">
                Our powerful search functionality enables you to narrow down
                candidates based on location and specific job roles.
              </div>
            </div>
          </div>
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="phone-portrait-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">
                Candidate Evaluation
              </div>
              <div className="section-text__desc">
                Easily evaluate and compare candidates.
              </div>
            </div>
          </div>

          <div className="service-card active">
            <div className="service-card__icon">
              <ion-icon name="people-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">
                Collaboration Tools
              </div>
              <div className="section-text__desc">
                Seamlessly collaborate with your team throughout the hiring
                process. Share candidate profiles, provide feedback, and make
                informed decisions together, all within the app.
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="chatbubble-ellipses-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">
                Data-driven Insights
              </div>
              <div className="section-text__desc">
                Make data-backed decisions with our analytics and reporting
                features. Gain valuable insights into your hiring process
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
