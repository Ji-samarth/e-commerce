
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Dheeza Shoes</h3>
          <p>Step up your style with Dheeza – quality shoes for every occasion.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="cart">Cart</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support@dheeza.com</p>
          <p>Phone: +91-9876543210</p>
          <p>Location: Delhi, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dheeza Shoes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
