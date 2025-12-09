import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import "./Home.css";
import blacklion from "../../assets/homepage/blacklion.png";
import video1 from "../../assets/video1.mp4";
import home1 from "../../assets/homepage/home1.jpg";
import home2 from "../../assets/homepage/home2.jpg";
import home3 from "../../assets/homepage/home3.jpg";
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleElements, setVisibleElements] = useState({});
  const [statValues, setStatValues] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const [statPercentages, setStatPercentages] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
  });
  const autoPlayIntervalRef = useRef(null);
  const carouselRef = useRef(null);
  const statItemRefs = useRef([]);
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);
  const mvvRefs = useRef([]);
  const videoRef = useRef(null);
  const totalSlides = 4;

  // Stats data
  const statsData = [
    { value: 150, suffix: "+", percentage: 75 },
    { value: 300, suffix: "+", percentage: 85 },
    { value: 98, suffix: "%", percentage: 98 },
    { value: 11, suffix: "", percentage: 100 },
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
            setVisibleElements((prev) => ({ ...prev, aboutLeft: true }));
          } else if (entry.target === aboutRightRef.current) {
            setVisibleElements((prev) => ({ ...prev, aboutRight: true }));
          } else {
            const index = mvvRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleElements((prev) => ({
                ...prev,
                [`mvv${index}`]: true,
              }));
            }
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe refs after they're initialized
    const timeoutId = setTimeout(() => {
      const refsToObserve = [
        aboutLeftRef.current,
        aboutRightRef.current,
        ...mvvRefs.current,
      ].filter(Boolean);
      refsToObserve.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      const refsToObserve = [
        aboutLeftRef.current,
        aboutRightRef.current,
        ...mvvRefs.current,
      ].filter(Boolean);
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
                setStatPercentages((prev) => ({
                  ...prev,
                  [index]: statData.percentage,
                }));
                clearInterval(percentageTimer);
              } else {
                setStatPercentages((prev) => ({
                  ...prev,
                  [index]: percentageCurrent,
                }));
              }
            }, 30);

            // Animate number
            const timer = setInterval(() => {
              current += increment;
              if (current >= statData.value) {
                setStatValues((prev) => ({ ...prev, [index]: statData.value }));
                clearInterval(timer);
              } else {
                setStatValues((prev) => ({
                  ...prev,
                  [index]: Math.floor(current),
                }));
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

  // Video autoplay and control - Always muted
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Ensure video is always muted
    videoElement.muted = true;
    videoElement.setAttribute("muted", "true");
    videoElement.defaultMuted = true;

    // Monitor for any unmute attempts and force mute
    const handleVolumeChange = () => {
      if (!videoElement.muted) {
        videoElement.muted = true;
      }
    };

    const handlePlay = () => {
      videoElement.muted = true;
    };

    videoElement.addEventListener("volumechange", handleVolumeChange);
    videoElement.addEventListener("play", handlePlay);

    const handleVideoVisibility = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoElement.muted = true;
              videoElement.play().catch((e) => {
                console.log("Autoplay prevented:", e);
              });
            } else {
              videoElement.pause();
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      observer.observe(videoElement);

      return () => observer.unobserve(videoElement);
    };

    handleVideoVisibility();

    // Set interval to ensure video stays muted
    const muteInterval = setInterval(() => {
      if (videoElement && !videoElement.muted) {
        videoElement.muted = true;
      }
    }, 100);

    return () => {
      clearInterval(muteInterval);
      videoElement.removeEventListener("volumechange", handleVolumeChange);
      videoElement.removeEventListener("play", handlePlay);
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="motto">
              <span className="motto-line1">WE DESIGN AND</span>
              <span className="motto-line2">BUILD YOUR DREAM</span>
            </h1>
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
              Pioneering elevator solutions that redefine modern architecture
              and urban mobility
            </p>
          </div>

          <div className="about-grid">
            <div
              ref={aboutLeftRef}
              className={`about-content animate-slide-left ${
                visibleElements.aboutLeft ? "visible" : ""
              }`}
            >
              <div className="floating-card">
                <h2>MRL Engineering Excellence</h2>
                <p>
                  M.R.L Engineering and trading PLC is a trading company which
                  is engaged on exporting different agricultural products and
                  importing electromechanical machineries since 2017 G.C.
                </p>

                <ul className="features-list">
                  <li>
                    <i className="fas fa-check-circle"></i> German origin
                    elevators & escalator
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Grundfos Denmark
                    origin water pumps
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> AOSIF Perkins engine
                    (UK), Cummins engine (USA) generator
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> FIREX Italy origin
                    fire equipment's
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> SODECA Spain origin
                    ventilation system
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Korvan Korean origin
                    water tanker
                  </li>
                </ul>

                <div className="signature">
                  <div className="signature-avatar">MN</div>
                  <div className="signature-text">
                    <div className="signature-name">Mr Mekuria Nigussie</div>
                    <div className="signature-role">CEO & Founder</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={aboutRightRef}
              className={`about-visual animate-slide-right ${
                visibleElements.aboutRight ? "visible" : ""
              }`}
            >
              <div className="video-container">
                <video
                  ref={videoRef}
                  className="testimonial-video"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster=""
                  aria-label="MRL Engineering - Company Overview Video"
                >
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="video-controls-overlay">
                  {/* <div className="video-caption">
                    MRL Engineering - Innovation in Motion
                  </div> */}
                  <div className="video-play-indicator">
                    {/* <i className="fas fa-play-circle"></i> */}
                    {/* <span>Click to play</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values Section */}
          <div className="mission-vision-values">
            <div className="mvv-grid">
              {[
                {
                  icon: "fas fa-bullseye",
                  title: "Our Mission",
                  text: "To provide customized product and service solutions for national customer and international suppliers. To exceed customers expectations with innovation technology, passion and professionalism. Provide our employees with a stage featuring dreams come true. To create a safe and healthier environment. To be on enterprise having a strong sense of social responsibility.",
                },
                {
                  icon: "fas fa-eye",
                  title: "Our Vision",
                  text: "Our vision is to bring our customers into the up-to-date innovations and technology in all Engineering and trading sectors for both products and service. MRL Engineering and Trading has a vision to build the most competitive Engineering and related professions in Ethiopia through incorporating qualified and experienced staff members with the required specification and skill in the field to serve customers needs with the most efficient and effective precision.",
                },
                {
                  icon: "fas fa-heart",
                  title: "Our Values",
                  text: "Give priority to the quality and safety of product and service. We keep on technology innovation and management improvement to enhance customer experience. We stick to professional, diversified, open and efficient principles to build our team. We always bear in mind our commitments. We deliver uncompromising integrity, hard work and constant respect for each customers through which can develop trust, customer satisfaction and long lasting partnership so as to fulfill our motto which says.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) mvvRefs.current[index] = el;
                  }}
                  className={`mvv-card animate-scale ${
                    visibleElements[`mvv${index}`] ? "visible" : ""
                  }`}
                >
                  <div className="mvv-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <ul className="mvv-list">
                    {item.text
                      .split(".")
                      .map((sentence) => sentence.trim())
                      .filter((sentence) => sentence.length > 0)
                      .map((sentence, idx) => (
                        <li key={idx}>{sentence}</li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same... */}
      {/* Stats Section */}
      <section className="stats section">
        <div className="container">
          <div className="section-title">
            <h2>Our Impact</h2>
            <p>
              Numbers that tell the story of our commitment to excellence and
              innovation in vertical transportation engineering.
            </p>
          </div>
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="stat-item fade-in"
                ref={(el) => {
                  if (el) statItemRefs.current[index] = el;
                }}
              >
                <div
                  className="stat-circle"
                  style={{ "--percentage": `${statPercentages[index] || 0}%` }}
                >
                  <div className="stat-content">
                    <div className="stat-number">
                      {statValues[index] || 0}
                      {stat.suffix}
                    </div>
                    <div className="stat-label">
                      {index === 0 && "Employees"}
                      {index === 1 && "Projects"}
                      {index === 2 && "Satisfaction"}
                      {index === 3 && "Years"}
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
                Professional installation of new elevator systems with the
                latest technology and safety standards.
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
                Upgrade your existing elevator systems with modern technology
                for improved efficiency and safety.
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
              We collaborate with the world's most innovative companies to
              deliver exceptional engineering solutions
            </p>
          </div>

          <div className="partners-content">
            <div className="partners-text">
              <h3>Our Trusted customers</h3>
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
                  <div className="benefit-text">
                    Trusted by industry leaders
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div className="benefit-text">
                    Innovative engineering solutions
                  </div>
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

              <Link to="/testimonial" className="btn btn-primary">
                Become a Partner
              </Link>
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
                      <linearGradient
                        id="lineGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{
                            stopColor: "var(--primary)",
                            stopOpacity: "0.3",
                          }}
                        />
                        <stop
                          offset="50%"
                          style={{
                            stopColor: "var(--primary)",
                            stopOpacity: "0.8",
                          }}
                        />
                        <stop
                          offset="100%"
                          style={{
                            stopColor: "var(--primary-light)",
                            stopOpacity: "0.3",
                          }}
                        />
                      </linearGradient>
                    </defs>
                    <line
                      x1="200"
                      y1="200"
                      x2="120"
                      y2="100"
                      className="connection-line line-1"
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="280"
                      y2="100"
                      className="connection-line line-2"
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="120"
                      y2="300"
                      className="connection-line line-3"
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="280"
                      y2="300"
                      className="connection-line line-4"
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="80"
                      y2="200"
                      className="connection-line line-5"
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="320"
                      y2="200"
                      className="connection-line line-6"
                    />
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
                  backgroundImage: `url(${home1})`,
                }}
              ></div>
              <div className="project-overlay">
                <div className="project-info">
                  {/* <h3>Skyline Tower</h3> */}
                  <p>Commercial high-rise installation</p>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${home2})`,
                }}
              ></div>
              <div className="project-overlay">
                <div className="project-info">
                  {/* <h3>Metro Plaza</h3> */}
                  <p>Modernization project</p>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${home3})`,
                }}
              ></div>
              <div className="project-overlay">
                <div className="project-info">
                  {/* <h3>Horizon Complex</h3> */}
                  <p>Residential elevator installation</p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/products" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
