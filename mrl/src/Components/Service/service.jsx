import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./service.css";

const Service = () => {
  // Scroll animations for service cards and process steps
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe service cards
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(card);
    });

    // Observe process steps
    const processSteps = document.querySelectorAll(".process-step");
    processSteps.forEach((step) => {
      step.style.opacity = "0";
      step.style.transform = "translateY(30px)";
      step.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(step);
    });

    return () => {
      serviceCards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
      processSteps.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  // Footer animation
  useEffect(() => {
    const timer = setTimeout(() => {
      const footer = document.querySelector("footer");
      if (footer) {
        footer.classList.add("show");
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Maintenance Service</h1>
              <p>
                Professional maintenance solutions to keep your vertical
                transportation systems running smoothly and safely.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support Available</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Uptime Guarantee</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">11</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <div className="section-header">
              <h2>Our Maintenance Services</h2>
              <p>
                Comprehensive maintenance solutions tailored to your specific
                needs and requirements.
              </p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <h3>Preventive Maintenance</h3>
                <p>
                  Regular scheduled maintenance to prevent breakdowns and ensure
                  optimal performance of your elevator systems.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3>Diagnostic Testing</h3>
                <p>
                  Advanced diagnostic procedures to identify potential issues
                  before they become major problems.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Safety Compliance</h3>
                <p>
                  Ensure your systems meet all safety standards and regulatory
                  requirements with our compliance services.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3>Emergency Repairs</h3>
                <p>
                  Rapid response emergency repair services to minimize downtime
                  and restore operations quickly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <div className="section-header">
              <h2>Our Maintenance Process</h2>
              <p>
                A systematic approach to maintaining your vertical
                transportation systems.
              </p>
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Assessment</h3>
                <p>
                  Thorough evaluation of your system's current condition and
                  maintenance requirements.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Planning</h3>
                <p>
                  Development of a customized maintenance schedule based on your
                  specific needs.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Execution</h3>
                <p>
                  Professional implementation of maintenance procedures by
                  certified technicians.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Monitoring</h3>
                <p>
                  Continuous monitoring and reporting to ensure optimal system
                  performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-content">
              <h2>Get Started Today</h2>
              <p>
                Contact our maintenance specialists to discuss your requirements
                and schedule a consultation.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <h3>Call Us</h3>
                  <p>+251118931028</p>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <h3>Email Us</h3>
                  <p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=mrlengineeringtrade@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      mrlengineeringtrade@gmail.com
                    </a>
                  </p>
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <h3>Business Hours</h3>
                  <p>
                    Mon-Fri: 8:00AM-5:30PM
                    <br />
                    24/7 Emergency Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>&copy; 2025 MRL Engineering. All Rights Reserved.</footer>
    </>
  );
};

export default Service;
