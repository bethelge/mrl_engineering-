import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './service.css';

const Service = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector('.dropdown');
      if (dropdown && !dropdown.contains(event.target) && isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Scroll animations for service cards and process steps
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });

    // Observe process steps
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach(step => {
      step.style.opacity = '0';
      step.style.transform = 'translateY(30px)';
      step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(step);
    });

    return () => {
      serviceCards.forEach(card => {
        if (card) observer.unobserve(card);
      });
      processSteps.forEach(step => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  // Footer animation
  useEffect(() => {
    const timer = setTimeout(() => {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.classList.add('show');
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Header */}
      <header style={{ boxShadow: isScrolled ? '0 2px 10px rgba(4, 0, 255, 0.1)' : 'none' }}>
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">MRL Engineering</Link>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Product</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li className="dropdown">
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}>
                    Inquiry <i className="fas fa-chevron-down"></i>
                  </a>
                  <div className={`dropdown-content ${isDropdownOpen ? 'active' : ''}`}>
                    <Link to="/inquiry#product" className="dropdown-item">
                      <i className="fas fa-box"></i>
                      <span>Product Inquiry</span>
                    </Link>
                    <Link to="/inquiry#quotation" className="dropdown-item">
                      <i className="fas fa-calculator"></i>
                      <span>Price Quote</span>
                    </Link>
                    <Link to="/inquiry#maintenance" className="dropdown-item">
                      <i className="fas fa-tools"></i>
                      <span>Maintenance Service</span>
                    </Link>
                    <Link to="/inquiry#installation" className="dropdown-item">
                      <i className="fas fa-cogs"></i>
                      <span>Installation Service</span>
                    </Link>
                    <Link to="/inquiry#support" className="dropdown-item">
                      <i className="fas fa-headset"></i>
                      <span>Technical Support</span>
                    </Link>
                    <Link to="/inquiry#parts" className="dropdown-item">
                      <i className="fas fa-wrench"></i>
                      <span>Spare Parts Inquiry</span>
                    </Link>
                    <Link to="/inquiry#warranty" className="dropdown-item">
                      <i className="fas fa-shield-alt"></i>
                      <span>Warranty Service</span>
                    </Link>
                    <Link to="/inquiry#partnership" className="dropdown-item">
                      <i className="fas fa-handshake"></i>
                      <span>Partnership Inquiry</span>
                    </Link>
                    <Link to="/inquiry#booking" className="dropdown-item">
                      <i className="fas fa-calendar-check"></i>
                      <span>Service Booking</span>
                    </Link>
                    <Link to="/inquiry#general" className="dropdown-item">
                      <i className="fas fa-envelope"></i>
                      <span>General Inquiry</span>
                    </Link>
                  </div>
                </li>
                <li><Link to="/contact" className="contact-btn">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Maintenance Service</h1>
              <p>Professional maintenance solutions to keep your vertical transportation systems running smoothly and safely.</p>
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
                  <span className="stat-number">15+</span>
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
              <p>Comprehensive maintenance solutions tailored to your specific needs and requirements.</p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <h3>Preventive Maintenance</h3>
                <p>Regular scheduled maintenance to prevent breakdowns and ensure optimal performance of your elevator systems.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3>Diagnostic Testing</h3>
                <p>Advanced diagnostic procedures to identify potential issues before they become major problems.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Safety Compliance</h3>
                <p>Ensure your systems meet all safety standards and regulatory requirements with our compliance services.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3>Emergency Repairs</h3>
                <p>Rapid response emergency repair services to minimize downtime and restore operations quickly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <div className="section-header">
              <h2>Our Maintenance Process</h2>
              <p>A systematic approach to maintaining your vertical transportation systems.</p>
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Assessment</h3>
                <p>Thorough evaluation of your system's current condition and maintenance requirements.</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Planning</h3>
                <p>Development of a customized maintenance schedule based on your specific needs.</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Execution</h3>
                <p>Professional implementation of maintenance procedures by certified technicians.</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Monitoring</h3>
                <p>Continuous monitoring and reporting to ensure optimal system performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-content">
              <h2>Get Started Today</h2>
              <p>Contact our maintenance specialists to discuss your requirements and schedule a consultation.</p>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <h3>Call Us</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <h3>Email Us</h3>
                  <p>maintenance@mrlengineering.com</p>
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <h3>Business Hours</h3>
                  <p>Mon-Fri: 8AM-6PM<br />24/7 Emergency Service</p>
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

