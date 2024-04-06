import React from "react";

const ContactFormSection = () => {
  return (
    <div style={{ padding: "80px 0" }}>
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          backgroundColor: "#fff",
          borderRadius: "5px",
          padding: "30px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
        }}
      >
        <h2 style={{ textAlign: "center", color: "#3482A3" }}>Get In Touch</h2>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Name"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px"
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Phone Number"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px"
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Email"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px"
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <select
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px"
            }}
          >
            <option value="Product">Product</option>
            <option value="Payment">Payment</option>
            <option value="Personal Information">Personal Information</option>
          </select>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <textarea
            placeholder="Message"
            name="message"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
              resize: "vertical"
            }}
          ></textarea>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#3482A3",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
