import React from "react";

const ContactMap = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "inline-block",
          maxWidth: "90vw",
          margin: "0 auto",

        }}
      >
    <div className="google-map-area contact-map pt-100 mb-30" style={{ width: "300%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2602724492203!2d105.85548951451818!3d21.02226939337667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abec3cc9f95b%3A0x8c100403565df9a8!2zNiBQLiBMw6ogVGjDoW5oIFTDtG5nLCBQaGFuIENodSBUcmluaCwgSG_DoG4gS2nhur9tLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1669787784557!5m2!1svi!2s"
        width="100%"
        height="550"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
    </div>
  );
};

export default ContactMap;
