// src/components/Footer/footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MRL Engineering</h3>
            <p>Innovating Vertical Mobility Solutions for Modern Buildings</p>
            <div className="footer-contact">
              <p>
                <i className="fas fa-envelope"></i>{" "}
                mrlengineeringtrade@gmail.com
              </p>
              <p>
                <i className="fas fa-phone"></i> +251118931028
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> 123 Engineering Drive,
                Tech City
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/service">Services</Link>
              </li>
              <li>
                <Link to="/inquiry">Inquiry</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/service">Maintenance Services</Link>
              </li>
              <li>
                <Link to="/service">Preventive Maintenance</Link>
              </li>
              <li>
                <Link to="/service">Diagnostic Testing</Link>
              </li>
              <li>
                <Link to="/service">Emergency Repairs</Link>
              </li>
              <li>
                <Link to="/service">Safety Compliance</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 MRL Engineering. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
