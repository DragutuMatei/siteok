import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

function Contact() {
  return (
    <div className="bigContainer ">
      <Title tit="contact" color="white" />
      <div className="contact index5">
        <div className="left">
          <h1>got any question?</h1>
          <p>
            We’d love to hear from you. Get in touch and begin the journey to
            success.
          </p>
          <Link to="/contact" style={{ margin: "10px" }} className="mainButton">
            Contact us
          </Link>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Contact;
