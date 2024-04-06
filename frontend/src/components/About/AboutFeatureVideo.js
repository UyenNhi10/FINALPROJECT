import React from "react";

const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-content">
              <h2>Who Are We?</h2>
              <p>Our store is committed to providing the best shopping experience for every customer. We don't just sell products; we want to create a community where everyone can feel cared for and supported.</p>
              <a href="/products" className="btn btn-primary">View Products</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-image">
              <img src="https://macone.vn/wp-content/uploads/2021/09/apple_nso-marina-bay-sands_exterior_09072020.jpg.og_.jpg" alt="About" />
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        .about-page {
          padding: 80px 0;
        }

        .about-content {
          margin-bottom: 40px;
        }

        .about-content h2 {
          color: #333333;
          font-size: 36px;
          margin-bottom: 20px;
        }

        .about-content p {
          color: #777777;
          font-size: 16px;
          line-height: 1.6;
        }

        .about-image img {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .btn-primary {
          background-color: #3482A3; 
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 5px;
          font-size: 16px;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .btn-primary:hover {
          background-color: #3482A3; 
        }
        `}
      </style>
    </section>
  );
};

export default AboutPage;