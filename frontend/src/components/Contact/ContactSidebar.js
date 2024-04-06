import React from "react";

const ContactSidebar = () => {
  return (
    <div style={{ padding: "80px 0" }}> {/* Chỉnh padding ở đây */}
      <div className="row justify-content-center">
        <div className="col-md-6"></div>
        <div
          className="contact-sidebar"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <div
            className="contact-info"
            style={{
              display: "flex",
              flexDirection: "row", // Thay đổi từ column sang row
              alignItems: "center",
              justifyContent: "center", // Canh giữa các phần tử
              textAlign: "center",
              marginTop: "30px",
              width: "100%",
            }}
          >
            <div className="contact-item">
              <p style={{ margin: "0", padding: "5px" }}>
                <i
                  className="fas fa-map-marker-alt"
                  style={{ fontSize: "18px", color: "#3482A3", marginRight: "5px" }}
                ></i>{" "}
                Nguyen Xi, HCM, VietNam
              </p>
            </div>
            <div className="contact-item">
              <p style={{ margin: "0", padding: "5px" }}>
                <i
                  className="fas fa-phone"
                  style={{ fontSize: "18px", color: "#3482A3", marginRight: "5px" }}
                ></i>{" "}
                +1500 181 903
              </p>
            </div>
            <div className="contact-item">
              <p style={{ margin: "0", padding: "5px" }}>
                <i
                  className="fas fa-envelope"
                  style={{ fontSize: "18px", color: "#3482A3", marginRight: "5px" }}
                ></i>{" "}
                UyenNhi@gmail.com
              </p>
            </div>
          </div>
          <div
            className="contact-image-container"
            style={{
              maxWidth: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 auto",
            }}
          >
            <div
              className="contact-image"
              style={{
                width: "100%",
                borderRadius: "5px",
                overflow: "hidden",
                
              }}
            >
              <img
                src="https://swanhtetpainghome.files.wordpress.com/2021/08/2545_fp733904.jpg"
                alt="Contact"
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ marginTop: "20px", textAlign: "center", width: "100%" }}>
              <h4>Contact Us</h4>
              <p>
                If you have any questions, feel free to reach out to us using the contact information
                above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;
