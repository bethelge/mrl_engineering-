import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { dropdownItems } from '../Product/productData';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine active route and if we're on home page
  const activeRoute = location.pathname;
  const isHomePage = activeRoute === '/';

  // Determine navbar style class based on page and scroll state
  // All pages: transparent at top, white background when scrolled
  const getNavbarClass = () => {
    if (isScrolled) {
      return styles.scrolled; // All pages get white background when scrolled
    }
    // At the top: home page uses white text, other pages use dark text
    return isHomePage ? styles.homeTransparent : styles.otherPagesTransparent;
  };

  return (
    <header className={`${styles.header} ${getNavbarClass()}`}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            <i className="fas fa-elevator"></i>
            MRL<span>Engineering</span>
          </Link>
          <nav>
            <ul>
              <li>
                <Link 
                  to="/" 
                  className={activeRoute === '/' ? styles.active : ''}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className={activeRoute === '/products' ? styles.active : ''}
                >
                  Product
                </Link>
              </li>
              <li>
                <Link 
                  to="/service" 
                  className={activeRoute === '/service' ? styles.active : ''}
                >
                  Service
                </Link>
              </li>
              <li className={styles.dropdown}>
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className={styles.dropdownTrigger}
                >
                  Inquiry <i className="fas fa-chevron-down"></i>
                </a>
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
                <Link 
                  to="/contact" 
                  className={`${styles.contactBtn} ${activeRoute === '/contact' ? styles.active : ''}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
