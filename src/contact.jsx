import React from "react";
import "./Contact.css";
import github from './assets/github-b.png';
import instagram from './assets/instagram-b.png';
import linkedin from './assets/linkedin-b.png';

const Contact = () => {
  return (
<div className="group-together">
  <div className="contact-left">
    <h3>Get in Touch</h3>
    <h5>561-255-6900</h5>
    <h5>DDimambro@outlook.com</h5>
    <div className="icon-bar">
      <a href="https://www.github.com/561Aloha">
        <img src={github} alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/DiannaD">
        <img src={linkedin} alt="linkedin" />
      </a>
      <a href="https://www.instagram.com/madebyDianna">
        <img src={instagram} alt="instagram" />
      </a>
    </div>



    </div><div className="contact-right">
    <div className="contact-form">
      <form action="YOUR_BACKEND_ENDPOINT" method="POST">
        {/* Name Section */}
        <div className="form-group">
          <div className="input-box">
            <label htmlFor="first_name">First Name</label>
            <input type="text" id="first_name" name="first_name" required />
          </div>
          <div className="input-box">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" id="last_name" name="last_name" required />
          </div>
        </div>
        
        {/* Email Section */}
        <div className="input-box">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        {/* Message Section */}
        <div className="input-box">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        
        {/* Submit Button */}
        <button type="submit" className="submit-btn">Send</button>
      </form></div>
    </div></div>
  );
};

export default Contact;
