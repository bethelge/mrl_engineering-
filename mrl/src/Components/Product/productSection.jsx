import React from "react";
import { categories } from "./productData";
import Navbar from "../Navbar/Navbar";
import styles from "./productSection.module.css";

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
  isCategoriesVisible,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className={styles.body}>
      <ElevatorDoors isOpen={isDoorsOpen} />
      <Navbar />
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
        isVisible={isCategoriesVisible}
      />
    </div>
  );
};

export default ProductSection;
