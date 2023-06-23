import React from "react";
import "./Onboarding.css";
import illustration from "../../assets/img/illustration.png";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <section className="onboarding-section">
      <div className="illustration">
        <img src={illustration} alt="logo" />
      </div>
      <div className="h-tag">
        <h2>Biggest Sell at Your Fingerprint</h2>
      </div>
      <div className="p-tag">
        <p>Find your best products from popular shop without any delay</p>
      </div>
      <Link to="/home">Get Started</Link>
    </section>
  );
};

export default Onboarding;
