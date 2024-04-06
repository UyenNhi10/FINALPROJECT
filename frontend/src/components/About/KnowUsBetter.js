import React from "react";

const KnowUsBetter = () => {
  return (
    <section className="know-us-better">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-info">
              <h2>Get to Know Us Better</h2>
              <p>We take pride in bringing value and joy to our customers. We are not just selling products; we are building a strong and sustainable community.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-info">
              <div className="feature-item">
                <i className="fas fa-chart-line"></i>
                <h3>Success</h3>
                <p>We have achieved many successes in serving the community and society.</p>
              </div>
              <div className="feature-item">
                <i className="fas fa-users"></i>
                <h3>Community</h3>
                <p>We are building a passionate and creative community where people can share ideas and experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        .know-us-better {
          padding: 80px 0;
          background-color: #f9f9f9;
        }

        .about-info h2 {
          color: #333;
          font-size: 36px;
          margin-bottom: 20px;
        }

        .about-info p {
          color: #777;
          font-size: 16px;
          line-height: 1.6;
        }

        .feature-info .feature-item {
          margin-bottom: 30px;
        }

        .feature-info .feature-item i {
          font-size: 48px;
          color: #3482A3;
          margin-bottom: 20px;
        }

        .feature-info .feature-item h3 {
          color: #333;
          font-size: 24px;
          margin-bottom: 15px;
        }

        .feature-info .feature-item p {
          color: #777;
          font-size: 16px;
          line-height: 1.6;
        }
        `}
      </style>
    </section>
  );
};

export default KnowUsBetter;
