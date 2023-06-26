import React from "react";

function Pricing() {
  return (
    <section id="pricing">
      <div className="pricing-upper">
        <div className="section-text__title-centered text-white">
          A Plan for Recruiters
        </div>
      </div>
      <div className="pricing-lower">
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">basic Plan</span>
              <div className="pricing-card__title">
                3999 ₹<span> / month</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>2 recruitment per 5 day</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Get started
            </a>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">Hero plan</span>
              <div className="pricing-card__title">
                7999 ₹<span> / month</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>5 recruitment per day</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Get started
            </a>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">Unlimited</span>
              <div className="pricing-card__title">
                14999 ₹<span> / month</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Unlimited Recruitments</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
