import React from "react";
import { Link } from "react-router-dom";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <Link to="/" className={styles.logo}>
              MRL Engineering
            </Link>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Product</Link>
                </li>
                <li>
                  <Link to="/service">Service</Link>
                </li>
                <li className={styles.dropdown}>
                  <Link to="#">
                    Inquiry <i className="fas fa-chevron-down"></i>
                  </Link>
                  <div className={styles.dropdownContent}>
                    <Link to="/inquiry#product" className={styles.dropdownItem}>
                      <i className="fas fa-box"></i>
                      <span>Product Inquiry</span>
                    </Link>
                    <Link
                      to="/inquiry#quotation"
                      className={styles.dropdownItem}
                    >
                      <i className="fas fa-calculator"></i>
                      <span>Price Quote</span>
                    </Link>
                    <Link
                      to="/inquiry#maintenance"
                      className={styles.dropdownItem}
                    >
                      <i className="fas fa-tools"></i>
                      <span>Maintenance Service</span>
                    </Link>
                    <Link
                      to="/inquiry#installation"
                      className={styles.dropdownItem}
                    >
                      <i className="fas fa-cogs"></i>
                      <span>Installation Service</span>
                    </Link>
                    <Link to="/inquiry#support" className={styles.dropdownItem}>
                      <i className="fas fa-headset"></i>
                      <span>Technical Support</span>
                    </Link>
                    <Link to="/inquiry#parts" className={styles.dropdownItem}>
                      <i className="fas fa-wrench"></i>
                      <span>Spare Parts Inquiry</span>
                    </Link>
                    <Link
                      to="/inquiry#warranty"
                      className={styles.dropdownItem}
                    >
                      <i className="fas fa-shield-alt"></i>
                      <span>Warranty Service</span>
                    </Link>
                    <Link
                      to="/inquiry#partnership"
                      className={styles.dropdownItem}
                    >
                      <i className="fas fa-handshake"></i>
                      <span>Partnership Inquiry</span>
                    </Link>
                    <Link to="/inquiry#booking" className={styles.dropdownItem}>
                      <i className="fas fa-calendar-check"></i>
                      <span>Service Booking</span>
                    </Link>
                    <Link to="/inquiry#general" className={styles.dropdownItem}>
                      <i className="fas fa-envelope"></i>
                      <span>General Inquiry</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <Link to="/contact" className={styles.contactBtn}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>{children}</main>

      {/* Footer */}
      <footer className={styles.footer}>
        &copy; 2025 MRL Engineering. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Layout;
