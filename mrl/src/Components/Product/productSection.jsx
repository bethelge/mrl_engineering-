import React from "react";
import { Link } from "react-router-dom";
import { categories, dropdownItems } from "./productData";
import styles from "./productSection.module.css";

const Header = ({ isVisible }) => {
  return (
    <header
      className={`${styles.header} ${isVisible ? styles.show : ""}`}
      id="header"
    >
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Link to="/" className={styles.logo}>
            <i className="fas fa-elevator"></i>
            MRL<span>Engineering</span>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products" className={styles.active}>
                  Product
                </Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li className={styles.dropdown}>
                <a href="#">
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
                <Link to="/contact" className={styles.contactBtn}>
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

const ElevatorDoors = ({ isOpen }) => {
  return (
    <div
      className={`${styles.elevatorBg} ${isOpen ? styles.doorOpen : ""}`}
      id="doors"
    >
      <div className={styles.doorLeft}></div>
      <div className={styles.doorRight}></div>
    </div>
  );
};

const CategoryFilter = ({ activeCategory, onCategoryChange, isVisible }) => {
  return (
    <div
      className={`${styles.productCategories} ${isVisible ? styles.show : ""}`}
      id="categories"
    >
      {categories.map((category) => (
        <button
          key={category.id}
          className={`${styles.categoryBtn} ${
            activeCategory === category.id ? styles.active : ""
          }`}
          onClick={() => onCategoryChange(category.id)}
          data-category={category.id}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

const ProductSection = ({
  isDoorsOpen,
  isHeaderVisible,
  isCategoriesVisible,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className={styles.body}>
      <ElevatorDoors isOpen={isDoorsOpen} />
      <Header isVisible={isHeaderVisible} />
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
        isVisible={isCategoriesVisible}
      />
    </div>
  );
};

export default ProductSection;
