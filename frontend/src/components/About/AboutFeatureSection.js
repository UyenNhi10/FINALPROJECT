import React from "react";

const AboutFeatureSection = () => {
  return (
    <section className="about-feature-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="feature-box">
              <i className="fas fa-shipping-fast"></i>
              <h3>Fast Shipping</h3>
              <p>Guaranteed delivery within 24 hours.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box">
              <i className="fas fa-headset"></i>
              <h3>24/7 Support</h3>
              <p>Our support team is available anytime, anywhere.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box">
              <i className="fas fa-gift"></i>
              <h3>Special Offers</h3>
              <p>Discover exciting promotions and gifts.</p>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        .about-feature-section {
          padding: 80px 0;
          background-color: #f9f9f9;
        }

        .feature-box {
          background-color: #ffffff;
          padding: 30px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .feature-box i {
          font-size: 48px;
          color: #3482A3;
          margin-bottom: 20px;
        }

        .feature-box h3 {
          color: #333333;
          font-size: 24px;
          margin-bottom: 15px;
        }

        .feature-box p {
          color: #777777;
          font-size: 16px;
          line-height: 1.6;
        }

        .feature-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        `}
      </style>
    </section>
  );
};

export default AboutFeatureSection;