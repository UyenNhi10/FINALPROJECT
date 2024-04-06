import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1b1b1b", color: "#fff", padding: "50px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-widget mb-4">
              <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>Great lesson ideas and plans for students!</h3>
              <div className="footer-icon">
                <a href="#" style={{ color: "#ddd", marginRight: "10px" }}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.tiktok.com/@nauphache" target="_blank" style={{ color: "#ddd", marginRight: "10px" }}>
                  <i className="fab fa-tiktok"></i>
                </a>
                <a href="#" style={{ color: "#ddd" }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget mb-4">
              <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>Online Platform</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <Link href="/course">
                    <a style={{ color: "#ddd", textDecoration: "none", fontSize: "16px" }}>Appropriate Lessons</a>
                  </Link>
                </li>
                <li>
                  <Link href="/course">
                    <a style={{ color: "#ddd", textDecoration: "none", fontSize: "16px" }}>Digital Library</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget mb-4">
              <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>Bartending Community</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <Link href="/about">
                    <a style={{ color: "#ddd", textDecoration: "none", fontSize: "16px" }}>Partners</a>
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link href="/contact">
                    <a style={{ color: "#ddd", textDecoration: "none", fontSize: "16px" }}>Forum</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a style={{ color: "#ddd", textDecoration: "none", fontSize: "16px" }}>Support</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget mb-4">
              <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>Contact Us</h3>
              <p style={{ marginBottom: "20px", fontSize: "16px" }}>24/7 Support</p>
              <form action="#" className="widget__subscribe" style={{ display: "flex", marginBottom: "20px" }}>
                <input type="email" placeholder="Enter Email..." style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "100%", marginRight: "10px", fontSize: "16px" }} />
                <button type="submit" style={{ padding: "8px 20px", backgroundColor: "#3482A3", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "16px" }}>
                  Subscribe <i className="fas fa-paper-plane" style={{ marginLeft: "5px" }}></i>
                </button>
              </form>
              <p style={{ fontSize: "16px", marginBottom: "10px" }}>
                <i className="fas fa-phone" style={{ color: "#ddd", marginRight: "10px" }}></i>
                <a href="tel:1500181903" style={{ color: "#ddd", textDecoration: "none" }}>1500181903</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#343a40", color: "#fff", padding: "15px 0", textAlign: "center" }}>
        <p style={{ margin: "0", fontSize: "16px" }}>
          © Copyrighted and Designed by{" "}
          <a href="https://portfolio-doxuanloc.vercel.app/" style={{ color: "#fff", textDecoration: "underline" }}>
            XL
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
