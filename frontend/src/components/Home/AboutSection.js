import React from "react";
import Link from "next/link";

const ProductCard = ({ image, title, description, link }) => {
  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  };

  const imageStyle = {
    height: "200px",
    objectFit: "cover",
    transition: 'transform 0.3s',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 0.3s',
  };

  const overlayText = {
    textAlign: 'center',
  };

  const handleHover = () => {
    const card = document.getElementById(title);
    const overlay = card.getElementsByClassName('overlay')[0];
    card.style.transform = 'scale(1.05)';
    overlay.style.opacity = '1';
  };

  const handleLeave = () => {
    const card = document.getElementById(title);
    const overlay = card.getElementsByClassName('overlay')[0];
    card.style.transform = 'scale(1)';
    overlay.style.opacity = '0';
  };

  return (
    <div className="col-lg-6 mb-4" id={title} style={cardStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} style={imageStyle} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link href={link}>
            <a className="btn btn-primary" style={{ backgroundColor: "#3482A3", borderColor: "#3482A3" }}>View Details</a>
          </Link>
        </div>
        <div className="overlay" style={overlayStyle}>
          <div style={overlayText}>
            <h5>{title}</h5>
            <p>{description}</p>
            <Link href={link}>
              <a className="btn btn-primary" style={{ backgroundColor: "#fff", color: "#3482A3", borderColor: "#3482A3" }}>View Details</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const viewProductsStyle = {
    backgroundColor: "#3482A3",
    borderColor: "#3482A3",
    transition: "background-color 0.3s, border-color 0.3s",
  };

  const handleHover = (event) => {
    event.target.style.backgroundColor = "#fff";
    event.target.style.color = "#3482A3";
  };

  const handleLeave = (event) => {
    event.target.style.backgroundColor = "#3482A3";
    event.target.style.color = "#fff";
  };

  return (
    <section className="about-area pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <ProductCard
                image="https://vocket.tech/app/uploads/sites/9/2022/09/FcEmXkpaMAEwxB9-1-1024x513.jpeg"
                title="iPhone"
                description="One of the top smartphones in the market."
                link="product"
              />
              <ProductCard
                image="https://p.turbosquid.com/ts-thumb/8v/6jwEe9/wa/prosilicon50001/png/1627387973/1920x1080/fit_q87/5d4bbb44cf8be5b70dc86a2af704b88b1686be9c/prosilicon50001.jpg"
                title="Laptop"
                description="High-performance and beautifully designed laptop."
                link="product"
              />
            </div>
            <div className="row">
              <ProductCard
                image="https://stcv4.hnammobile.com/uploads/news/large/marshall-trai-nghiem-but-pha-cung-am-thanh-social.jpg?v=1649398989"
                title="Marshall Headphones"
                description="Marshall Major IV over-ear headphones with high-quality sound."
                link="/product/marshall-headphones"
              />
              <ProductCard
                image="https://cdn.tgdd.vn//News/1528687//1-800x450.jpg"
                title="AirPods"
                description="Apple's wireless AirPods."
                link="product"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ backgroundImage: "url('https://eimg.pravda.com/images/doc/9/b/9b44570-37851604-1135241166641751-3116563651641737216-n.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="about-content text-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "30px", borderRadius: "10px" }}>
              <h2 className="mb-4" style={{ fontFamily: "Montserrat, sans-serif", color: "#333" }}>Explore Convenience</h2>
              <p className="mb-4" style={{ color: "#666" }}>
                Enjoy a great shopping experience with top technology products from our store. We provide quality products at attractive prices, ensuring customer satisfaction.
              </p>
              <Link href="product">
                <a className="btn btn-primary" style={viewProductsStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>View Products</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
