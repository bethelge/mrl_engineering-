import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });

  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your message! We will get back to you within 24 hours."
    );
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "",
      message: "",
    });
  };

  const handleMapClick = () => {
    alert(
      "Map integration coming soon! For now, you can find us at:\n\n123 Engineering Plaza\nIndustrial District, NY 10001"
    );
  };

  const dropdownItems = [
    { icon: "fas fa-box", text: "Product Inquiry", href: "/inquiry#product" },
    {
      icon: "fas fa-calculator",
      text: "Price Quote",
      href: "/inquiry#quotation",
    },
    {
      icon: "fas fa-tools",
      text: "Maintenance Service",
      href: "/inquiry#maintenance",
    },
    {
      icon: "fas fa-cogs",
      text: "Installation Service",
      href: "/inquiry#installation",
    },
    {
      icon: "fas fa-headset",
      text: "Technical Support",
      href: "/inquiry#support",
    },
    {
      icon: "fas fa-wrench",
      text: "Spare Parts Inquiry",
      href: "/inquiry#parts",
    },
    {
      icon: "fas fa-shield-alt",
      text: "Warranty Service",
      href: "/inquiry#warranty",
    },
    {
      icon: "fas fa-handshake",
      text: "Partnership Inquiry",
      href: "/inquiry#partnership",
    },
    {
      icon: "fas fa-calendar-check",
      text: "Service Booking",
      href: "/inquiry#booking",
    },
    {
      icon: "fas fa-envelope",
      text: "General Inquiry",
      href: "/inquiry#general",
    },
  ];

  return (
    <div className={styles.body}>
      {/* Header - Exact copy from original HTML */}
      <header
        className={`${styles.header} ${
          isHeaderScrolled ? styles.scrolled : ""
        }`}
      >
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
                    {dropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className={styles.dropdownItem}
                      >
                        <i className={item.icon}></i>
                        <span>{item.text}</span>
                      </Link>
                    ))}
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
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1>Get In Touch</h1>
              <p>
                Ready to discuss your vertical transportation needs? Contact our
                expert team for personalized solutions and professional
                guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              {/* Contact Info - "Let's Start a Conversation" Section */}
              <div className={styles.contactInfo}>
                <h2>Let's Start a Conversation</h2>
                <p>
                  Our team of elevator engineering experts is ready to help you
                  with your project. Whether you need a new installation,
                  maintenance services, or technical support, we're here to
                  provide the best solutions.
                </p>

                <div className={styles.contactMethods}>
                  <div className={styles.contactMethod}>
                    <div className={styles.methodIcon}>
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className={styles.methodContent}>
                      <h3>Call Us</h3>
                      <p>
                        <a href="tel:+15551234567">+1 (555) 123-4567</a>
                      </p>
                      <p>Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className={styles.contactMethod}>
                    <div className={styles.methodIcon}>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className={styles.methodContent}>
                      <h3>Email Us</h3>
                      <p>
                        <a href="mailto:info@mrlengineering.com">
                          info@mrlengineering.com
                        </a>
                      </p>
                      <p>Response within 24 hours</p>
                    </div>
                  </div>

                  <div className={styles.contactMethod}>
                    <div className={styles.methodIcon}>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className={styles.methodContent}>
                      <h3>Visit Us</h3>
                      <p>
                        123 Engineering Plaza
                        <br />
                        Industrial District, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className={styles.contactMethod}>
                    <div className={styles.methodIcon}>
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className={styles.methodContent}>
                      <h3>Business Hours</h3>
                      <p>
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={styles.contactForm}>
                <div className={styles.formHeader}>
                  <h3>Send us a Message</h3>
                  <p>
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="company">Company/Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="inquiryType">Inquiry Type *</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select inquiry type</option>
                      <option value="product">Product Inquiry</option>
                      <option value="maintenance">Maintenance Service</option>
                      <option value="installation">Installation Service</option>
                      <option value="support">Technical Support</option>
                      <option value="parts">Spare Parts</option>
                      <option value="warranty">Warranty Service</option>
                      <option value="partnership">Partnership</option>
                      <option value="booking">Service Booking</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your inquiry in detail..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Send Message
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className={styles.mapSection}>
          <div className={styles.container}>
            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder} onClick={handleMapClick}>
                <div className={styles.mapIcon}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className={styles.mapInfo}>
                  <h3>Our Location</h3>
                  <p>
                    123 Engineering Plaza, Industrial District
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.officeHours}>
              <h3>Office Hours</h3>
              <div className={styles.hoursGrid}>
                <div className={styles.hoursCard}>
                  <h4>Monday - Friday</h4>
                  <p>8:00 AM - 6:00 PM</p>
                </div>
                <div className={styles.hoursCard}>
                  <h4>Saturday</h4>
                  <p>9:00 AM - 4:00 PM</p>
                </div>
                <div className={styles.hoursCard}>
                  <h4>Sunday</h4>
                  <p>Closed</p>
                </div>
                <div className={styles.hoursCard}>
                  <h4>Emergency</h4>
                  <p>24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        &copy; 2025 MRL Engineering. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Contact;
