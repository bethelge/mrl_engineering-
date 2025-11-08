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
                <i className="fas fa-envelope"></i> info@mrlengineering.com
              </p>
              <p>
                <i className="fas fa-phone"></i> +1 (555) 123-4567
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

          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a
                href="https://linkedin.com/company/mrl-engineering"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/mrlengineering"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://facebook.com/mrlengineering"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://instagram.com/mrlengineering"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://youtube.com/mrlengineering"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <div className="newsletter">
              <p>Subscribe to our newsletter</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
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
