import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleElements, setVisibleElements] = useState({});
  const [statValues, setStatValues] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const [statPercentages, setStatPercentages] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const autoPlayIntervalRef = useRef(null);
  const carouselRef = useRef(null);
  const statItemRefs = useRef([]);
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);
  const mvvRefs = useRef([]);

  const totalSlides = 4;

  // Stats data
  const statsData = [
    { value: 250, suffix: '+', percentage: 75 },
    { value: 1500, suffix: '+', percentage: 85 },
    { value: 98, suffix: '%', percentage: 98 },
    { value: 25, suffix: '', percentage: 100 }
  ];

  // About section scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === aboutLeftRef.current) {
            setVisibleElements(prev => ({ ...prev, aboutLeft: true }));
          } else if (entry.target === aboutRightRef.current) {
            setVisibleElements(prev => ({ ...prev, aboutRight: true }));
          } else {
            const index = mvvRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleElements(prev => ({ ...prev, [`mvv${index}`]: true }));
            }
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe refs after they're initialized
    const timeoutId = setTimeout(() => {
      const refsToObserve = [aboutLeftRef.current, aboutRightRef.current, ...mvvRefs.current].filter(Boolean);
      refsToObserve.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      const refsToObserve = [aboutLeftRef.current, aboutRightRef.current, ...mvvRefs.current].filter(Boolean);
      refsToObserve.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Stats counter animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "0px 0px -100px 0px",
    };

    const countedStats = new Set();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countedStats.has(entry.target)) {
          countedStats.add(entry.target);
          const index = statItemRefs.current.indexOf(entry.target);
          if (index !== -1) {
            const statData = statsData[index];
            let current = 0;
            const increment = statData.value / 50;
            
            // Animate percentage
            let percentageCurrent = 0;
            const percentageIncrement = statData.percentage / 50;
            const percentageTimer = setInterval(() => {
              percentageCurrent += percentageIncrement;
              if (percentageCurrent >= statData.percentage) {
                setStatPercentages(prev => ({ ...prev, [index]: statData.percentage }));
                clearInterval(percentageTimer);
              } else {
                setStatPercentages(prev => ({ ...prev, [index]: percentageCurrent }));
              }
            }, 30);

            // Animate number
            const timer = setInterval(() => {
              current += increment;
              if (current >= statData.value) {
                setStatValues(prev => ({ ...prev, [index]: statData.value }));
                clearInterval(timer);
              } else {
                setStatValues(prev => ({ ...prev, [index]: Math.floor(current) }));
              }
            }, 30);
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe stat items after a brief delay to ensure refs are set
    const timeoutId = setTimeout(() => {
      statItemRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      statItemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    autoPlayIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [totalSlides]);

  const handleCarouselMouseEnter = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
  };

  const handleCarouselMouseLeave = () => {
    autoPlayIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Innovating Vertical Mobility</h1>
            <p>Reliable Elevator Engineering Solutions for Modern Buildings.</p>
            <div className="hero-btns">
              <a href="#about" className="btn btn-primary">Discover More</a>
              <Link to="/products" className="btn btn-outline">Our Projects</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-header">
            <div className="section-label">About Us</div>
            <h1>Engineering Vertical Innovation</h1>
            <p>
              Pioneering elevator solutions that redefine modern architecture and
              urban mobility
            </p>
          </div>

          <div className="about-grid">
            <div 
              ref={aboutLeftRef}
              className={`about-content animate-slide-left ${visibleElements.aboutLeft ? 'visible' : ''}`}
            >
              <div className="floating-card">
                <h2>MRL Engineering Excellence</h2>
                <p>
                  For over two decades, MRL Engineering has been at the forefront
                  of vertical transportation innovation, delivering cutting-edge
                  elevator solutions for the world's most ambitious architectural
                  projects.
                </p>

                <p>
                  Our team of certified engineers combines technical expertise
                  with creative problem-solving to overcome the unique challenges
                  of modern high-rise construction and urban development.
                </p>

                <ul className="features-list">
                  <li>
                    <i className="fas fa-check-circle"></i> Advanced elevator system
                    design
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Precision installation
                    services
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Predictive maintenance
                    technology
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Sustainable engineering
                    solutions
                  </li>
                </ul>

                <div className="signature">
                  <div className="signature-avatar">JS</div>
                  <div className="signature-text">
                    <div className="signature-name">John Smith</div>
                    <div className="signature-role">CEO & Founder</div>
                  </div>
                </div>
              </div>
            </div>

            <div 
              ref={aboutRightRef}
              className={`about-visual animate-slide-right ${visibleElements.aboutRight ? 'visible' : ''}`}
            >
              <div 
                className="image-carousel"
                ref={carouselRef}
                onMouseEnter={handleCarouselMouseEnter}
                onMouseLeave={handleCarouselMouseLeave}
              >
                <div className="carousel-container">
                  <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
                    <div className="carousel-slide">
                      <img
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="MRL Engineering - Innovation"
                        className="carousel-image"
                      />
                      <div className="image-overlay">
                        <div className="image-caption">
                          Innovation in Motion - SkyPoint Tower Project
                        </div>
                      </div>
                    </div>
                    <div className="carousel-slide">
                      <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="MRL Engineering - Technology"
                        className="carousel-image"
                      />
                      <div className="image-overlay">
                        <div className="image-caption">
                          Advanced Technology - Metro Plaza Installation
                        </div>
                      </div>
                    </div>
                    <div className="carousel-slide">
                      <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="MRL Engineering - Excellence"
                        className="carousel-image"
                      />
                      <div className="image-overlay">
                        <div className="image-caption">
                          Engineering Excellence - Horizon Complex
                        </div>
                      </div>
                    </div>
                    <div className="carousel-slide">
                      <img
                        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="MRL Engineering - Precision"
                        className="carousel-image"
                      />
                      <div className="image-overlay">
                        <div className="image-caption">
                          Precision Engineering - Skyline Tower
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-indicators">
                    {[0, 1, 2, 3].map((index) => (
                      <span
                        key={index}
                        className={`indicator ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values Section */}
          <div className="mission-vision-values">
            <div className="mvv-grid">
              {[
                { icon: 'fas fa-bullseye', title: 'Our Mission', text: 'To revolutionize vertical transportation through innovative engineering solutions that enhance urban mobility and architectural possibilities.' },
                { icon: 'fas fa-eye', title: 'Our Vision', text: 'To be the global leader in elevator engineering, setting new standards for safety, efficiency, and sustainability in vertical transportation.' },
                { icon: 'fas fa-heart', title: 'Our Values', text: 'Excellence, Innovation, Safety, and Sustainability drive everything we do, ensuring the highest quality solutions for our clients.' }
              ].map((item, index) => (
                <div 
                  key={index}
                  ref={el => { if (el) mvvRefs.current[index] = el; }}
                  className={`mvv-card animate-scale ${visibleElements[`mvv${index}`] ? 'visible' : ''}`}
                >
                  <div className="mvv-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section">
        <div className="container">
          <div className="section-title">
            <h2>Our Impact</h2>
            <p>Numbers that tell the story of our commitment to excellence and innovation in vertical transportation engineering.</p>
          </div>
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="stat-item fade-in" 
                ref={el => {
                  if (el) statItemRefs.current[index] = el;
                }}
              >
                <div className="stat-circle" style={{ '--percentage': `${statPercentages[index] || 0}%` }}>
                  <div className="stat-content">
                    <div className="stat-number">
                      {statValues[index] || 0}{stat.suffix}
                    </div>
                    <div className="stat-label">
                      {index === 0 && 'Employees'}
                      {index === 1 && 'Projects'}
                      {index === 2 && 'Satisfaction'}
                      {index === 3 && 'Years'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Installation</h3>
              <p>
                Professional installation of new elevator systems with the latest
                technology and safety standards.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Maintenance</h3>
              <p>
                Regular maintenance and inspection services to ensure optimal
                performance and safety of your elevators.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3>Modernization</h3>
              <p>
                Upgrade your existing elevator systems with modern technology for
                improved efficiency and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="partners section">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="container">
          <div className="partners-header">
            <div className="section-label">Our Partners</div>
            <h2>Trusted by Industry Leaders</h2>
            <p>
              We collaborate with the world's most innovative companies to deliver
              exceptional engineering solutions
            </p>
          </div>

          <div className="partners-content">
            <div className="partners-text">
              <h3>Partner With Excellence</h3>
              <p>
                Join forces with MRL Engineering for your next project and
                experience the difference that expertise and innovation can make
                in vertical transportation solutions.
              </p>

              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="benefit-text">Trusted by industry leaders</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div className="benefit-text">Innovative engineering solutions</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="benefit-text">Reliable 24/7 support</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-award"></i>
                  </div>
                  <div className="benefit-text">Decades of experience</div>
                </div>
              </div>

              <Link to="/inquiry#partnership" className="btn btn-primary">Become a Partner</Link>
            </div>

            <div className="partners-visual">
              <div className="network-visualization">
                <div className="network-container">
                  <div className="central-hub">
                    <div className="hub-icon">
                      <i className="fas fa-network-wired"></i>
                    </div>
                    <div className="hub-label">MRL Engineering</div>
                  </div>

                  <div className="partner-node node-1">
                    <div className="node-icon">
                      <i className="fas fa-building"></i>
                    </div>
                    <div className="node-label">TechElevate</div>
                  </div>

                  <div className="partner-node node-2">
                    <div className="node-icon">
                      <i className="fas fa-cogs"></i>
                    </div>
                    <div className="node-label">SkyBuild</div>
                  </div>

                  <div className="partner-node node-3">
                    <div className="node-icon">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <div className="node-label">UrbanMotion</div>
                  </div>

                  <div className="partner-node node-4">
                    <div className="node-icon">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <div className="node-label">ElevatePro</div>
                  </div>

                  <div className="partner-node node-5">
                    <div className="node-icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="node-label">BuildSmart</div>
                  </div>

                  <div className="partner-node node-6">
                    <div className="node-icon">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="node-label">FutureLift</div>
                  </div>

                  <svg className="connection-lines" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: '0.3' }} />
                        <stop offset="50%" style={{ stopColor: 'var(--primary)', stopOpacity: '0.8' }} />
                        <stop offset="100%" style={{ stopColor: 'var(--primary-light)', stopOpacity: '0.3' }} />
                      </linearGradient>
                    </defs>
                    <line x1="200" y1="200" x2="120" y2="100" className="connection-line line-1" />
                    <line x1="200" y1="200" x2="280" y2="100" className="connection-line line-2" />
                    <line x1="200" y1="200" x2="120" y2="300" className="connection-line line-3" />
                    <line x1="200" y1="200" x2="280" y2="300" className="connection-line line-4" />
                    <line x1="200" y1="200" x2="80" y2="200" className="connection-line line-5" />
                    <line x1="200" y1="200" x2="320" y2="200" className="connection-line line-6" />
                  </svg>

                  <div className="particle particle-1"></div>
                  <div className="particle particle-2"></div>
                  <div className="particle particle-3"></div>
                  <div className="particle particle-4"></div>
                  <div className="particle particle-5"></div>
                  <div className="particle particle-6"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="partners-carousel">
            <div className="carousel-header">
              <h3>Our Valued Partners</h3>
              <p>
                Collaborating with industry pioneers to drive innovation forward
              </p>
            </div>

            <div className="logo-carousel">
              <div className="logo-track">
                <div className="logo-item">
                  <div className="logo-placeholder">TechElevate</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">SkyBuild</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">UrbanMotion</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">ElevatePro</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">BuildSmart</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">FutureLift</div>
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="logo-item">
                  <div className="logo-placeholder">TechElevate</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">SkyBuild</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">UrbanMotion</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">ElevatePro</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">BuildSmart</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">FutureLift</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects section">
        <div className="container">
          <div className="section-title">
            <h2>Explore Recent Projects</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div
                className="project-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
                }}
              ></div>
              <div className="project-overlay">
                <div className="project-info">
                  <h3>Skyline Tower</h3>
                  <p>Commercial high-rise installation</p>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div
                className="project-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
                }}
              ></div>
              <div className="project-overlay">
                <div className="project-info">
                  <h3>Metro Plaza</h3>
                  <p>Modernization project</p>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div
                className="project-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)'
                }}
              ></div>
              <div className="project-overlay">
                <div className="project-info">
                  <h3>Horizon Complex</h3>
                  <p>Residential elevator installation</p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/products" className="btn btn-primary">View All Projects</Link>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="container">
          <div className="footer-container">
            <div className="footer-col">
              <h3>MRL Engineering</h3>
              <p>Leading provider of innovative vertical transportation solutions with a commitment to safety, reliability, and excellence.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h3>Contact Info</h3>
              <p><i className="fas fa-map-marker-alt"></i> 123 Engineering Drive, Tech City</p>
              <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
              <p><i className="fas fa-envelope"></i> info@mrlengineering.com</p>
            </div>
            <div className="footer-col">
              <h3>Quick Links</h3>
              <Link to="/">Home</Link>
              <a href="#about">About Us</a>
              <Link to="/service">Services</Link>
              <Link to="/products">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <h3>Our Services</h3>
              <Link to="/service">Elevator Installation</Link>
              <Link to="/service">Elevator Maintenance</Link>
              <Link to="/service">Modernization & Upgrades</Link>
              <Link to="/service">Consulting & Support</Link>
              <Link to="/service">Emergency Services</Link>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2023 MRL Engineering. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;