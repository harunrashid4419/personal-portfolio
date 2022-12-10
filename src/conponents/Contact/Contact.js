import React from "react";
import Lottie from "lottie-react";
import animation from "../../conponents/assets/animation.json";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="main-contact">
      <div className="contact-section">
        <div className="animation">
          <Lottie animationData={animation} loop={true}></Lottie>
        </div>
        <div className="text">
          <div>
            <p className="touch">Get in Touch</p>
            <form action="https://formsubmit.co/harunkpi2001@gmail.com" method="POST">
            <input
              type="text"
              placeholder="Enter Name"
              className="input input-bordered input-success w-full mb-5"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="input input-bordered input-success w-full mb-5"
            />
            <textarea
              className="textarea w-full h-32 textarea-accent mb-5"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="button-send">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
