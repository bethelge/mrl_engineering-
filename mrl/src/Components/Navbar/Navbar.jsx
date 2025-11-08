import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = scrolled 
    ? styles.scrolled 
    : isHomePage 
      ? styles.homeTransparent 
      : styles.otherPagesTransparent;

  return (
    <header className={`${styles.header} ${headerClass}`}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            <i className="fas fa-building"></i>
            <span>MRL Engineering</span>
          </Link>
          
          <nav>
            <ul className={mobileMenuOpen ? 'active' : ''}>
              <li>
                <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className={location.pathname === '/products' ? styles.active : ''}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/service" className={location.pathname === '/service' ? styles.active : ''}>
                  Services
                </Link>
              </li>
              <li className={styles.dropdown}>
                <span className={styles.dropdownTrigger}>
                  Inquiry <i className="fas fa-chevron-down"></i>
                </span>
                <div className={styles.dropdownContent}>
                  <Link to="/inquiry#product" className={styles.dropdownItem}>
                    <i className="fas fa-box"></i>
                    <span>Product Inquiry</span>
                  </Link>
                  <Link to="/inquiry#quotation" className={styles.dropdownItem}>
                    <i className="fas fa-calculator"></i>
                    <span>Price Quote</span>
                  </Link>
                  <Link to="/inquiry#maintenance" className={styles.dropdownItem}>
                    <i className="fas fa-tools"></i>
                    <span>Maintenance Service</span>
                  </Link>
                  <Link to="/inquiry#installation" className={styles.dropdownItem}>
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
                  <Link to="/inquiry#warranty" className={styles.dropdownItem}>
                    <i className="fas fa-shield-alt"></i>
                    <span>Warranty Service</span>
                  </Link>
                  <Link to="/inquiry#partnership" className={styles.dropdownItem}>
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
                <Link to="/contact" className={`${styles.contactBtn} ${location.pathname === '/contact' ? styles.active : ''}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div 
            className={styles.mobileMenu}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

