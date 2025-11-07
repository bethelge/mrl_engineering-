import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './inquiry.css';

const Inquiry = () => {

  // Smooth scroll to sections when coming from dropdown
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Scroll animations for inquiry cards
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

    // Observe inquiry cards
    const inquiryCards = document.querySelectorAll('.inquiry-card');
    inquiryCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });

    return () => {
      inquiryCards.forEach(card => {
        if (card) observer.unobserve(card);
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
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Inquiry Center</h1>
              <p>Get in touch with our specialized teams for all your vertical transportation needs. We're here to help with expert guidance and support.</p>
            </div>
          </div>
        </section>

        {/* Inquiry Categories */}
        <section className="inquiry-section">
          <div className="container">
            <div className="inquiry-grid">
              {/* Product Inquiries */}
              <div className="inquiry-card" id="product">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="fas fa-box"></i>
                  </div>
                  <h3 className="card-title">Product Inquiries</h3>
                </div>
                <p className="card-description">Information about our elevator systems, specifications, features, and product capabilities.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span><span className="label">Phone:</span> +1 (555) 123-4567</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span><span className="label">Email:</span> sales@mrlengineering.com</span>
                  </div>
                  <div className="working-hours">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Maintenance Service */}
              <div className="inquiry-card" id="maintenance">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="fas fa-tools"></i>
                  </div>
                  <h3 className="card-title">Maintenance Service</h3>
                </div>
                <p className="card-description">Schedule maintenance services and emergency repairs for your elevator systems.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span><span className="label">Phone:</span> +1 (555) 123-4568</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span><span className="label">Email:</span> maintenance@mrlengineering.com</span>
                  </div>
                  <div className="working-hours">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                    24/7 Emergency Service Available<br />
                    Emergency Hotline: +1 (555) 911-MRL</p>
                  </div>
                </div>
              </div>

              {/* Installation Service */}
              <div className="inquiry-card" id="installation">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <h3 className="card-title">Installation Service</h3>
                </div>
                <p className="card-description">Professional installation services for new elevator systems and modernization projects.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span><span className="label">Phone:</span> +1 (555) 123-4574</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span><span className="label">Email:</span> installation@mrlengineering.com</span>
                  </div>
                  <div className="working-hours">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                    By appointment only<br />
                    Site visits scheduled within 48 hours</p>
                  </div>
                </div>
              </div>

              {/* Quotation */}
              <div className="inquiry-card" id="quotation">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="fas fa-calculator"></i>
                  </div>
                  <h3 className="card-title">Quotation / Price Estimate</h3>
                </div>
                <p className="card-description">Request detailed quotes, pricing information, and project cost estimates for your elevator projects.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span><span className="label">Phone:</span> +1 (555) 123-4569</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span><span className="label">Email:</span> quotes@mrlengineering.com</span>
                  </div>
                  <div className="working-hours">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Quote Response: Within 24 hours<br />
                    Complex Projects: 2-3 business days</p>
                  </div>
                </div>
              </div>

              {/* Technical Support */}
              <div className="inquiry-card" id="support">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <h3 className="card-title">Technical Support</h3>
                </div>
                <p className="card-description">Technical assistance and troubleshooting for existing elevator systems.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span><span className="label">Phone:</span> +1 (555) 123-4570</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span><span className="label">Email:</span> support@mrlengineering.com</span>
                  </div>
                  <div className="working-hours">
                    <h4>Working Hours</h4>
                    <p>24/7 Technical Support Available<br />
                    Priority Support: Monday - Friday 8AM-6PM<br />
                    Remote diagnostics available</p>
                  </div>
                </div>
              </div>

              {/* Spare Parts Inquiry */}
              <div className="inquiry-card" id="parts">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="fas fa-wrench"></i>
                  </div>
                  <h3 className="card-title">Spare Parts Inquiry</h3>
                </div>
                <p className="card-description">Inquiries about spare parts availability, pricing, and ordering for elevator systems.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span><span className="label">Phone:</span> +1 (555) 123-4575</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span><span className="label">Email:</span> parts@mrlengineering.com</span>
                  </div>
                  <div className="working-hours">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Same-day shipping available</p>
                  </div>
                </div>
              </div>

              {/* Partnership */}
              <div className="inquiry-card" id="partnership">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h3 className="card-title">Partnership Inquiry</h3>
                </div>
                <p className="card-description">Explore partnership opportunities, joint ventures, and business collaboration with MRL Engineering.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span><span className="label">Phone:</span> +1 (555) 123-4571</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span><span className="label">Email:</span> partnerships@mrlengineering.com</span>
                  </div>
                  <div className="working-hours">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM<br />
                    By appointment only<br />
                    Response time: 2-3 business days</p>
                  </div>
                </div>
              </div>

              {/* Service Booking */}
              <div className="inquiry-card" id="booking">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="fas fa-calendar-check"></i>
                  </div>
                  <h3 className="card-title">Service Booking</h3>
                </div>
                <p className="card-description">Schedule maintenance appointments, inspections, and service calls for your elevator systems.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span><span className="label">Phone:</span> +1 (555) 123-4576</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span><span className="label">Email:</span> booking@mrlengineering.com</span>
                  </div>
                  <div className="working-hours">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Online booking available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Warranty */}
              <div className="inquiry-card" id="warranty">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h3 className="card-title">After-Sales / Warranty Services</h3>
                </div>
                <p className="card-description">Warranty claims, after-sales support, and service agreements for your elevator systems.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span><span className="label">Phone:</span> +1 (555) 123-4572</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span><span className="label">Email:</span> warranty@mrlengineering.com</span>
                  </div>
                  <div className="working-hours">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Warranty claims processed within 48 hours</p>
                  </div>
                </div>
              </div>

              {/* General */}
              <div className="inquiry-card" id="general">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h3 className="card-title">General Inquiry</h3>
                </div>
                <p className="card-description">General questions, company information, career opportunities, and any other inquiries not covered above.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span><span className="label">Phone:</span> +1 (555) 123-4573</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span><span className="label">Email:</span> info@mrlengineering.com</span>
                  </div>
                  <div className="working-hours">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Need Immediate Assistance?</h2>
              <p>For urgent matters or if you're unsure which department to contact, reach out to our main office and we'll direct you to the right team.</p>
              <div className="cta-buttons">
                <a href="tel:+15551234567" className="cta-btn">
                  <i className="fas fa-phone"></i>
                  Call Now
                </a>
                <a href="mailto:info@mrlengineering.com" className="cta-btn secondary">
                  <i className="fas fa-envelope"></i>
                  Send Email
                </a>
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

export default Inquiry;

