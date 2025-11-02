import React, { useState, useEffect } from "react";
import ProductSection from "./productSection";
import ProductGrid from "./productGrid";
import { products } from "./productData";
import styles from "./productPage.module.css";

const ProductPage = () => {
  const [isDoorsOpen, setIsDoorsOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [isProductsVisible, setIsProductsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const initAnimation = () => {
      // Step 1: open doors after 500ms
      setTimeout(() => {
        setIsDoorsOpen(true);

        // Step 2: After doors open, show everything
        setTimeout(() => {
          setIsHeaderVisible(true);
          setIsCategoriesVisible(true);
          setIsProductsVisible(true);
          setIsFooterVisible(true);
        }, 2000);
      }, 500);
    };

    initAnimation();
  }, []);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={styles.productPage}>
      <ProductSection
        isDoorsOpen={isDoorsOpen}
        isHeaderVisible={isHeaderVisible}
        isCategoriesVisible={isCategoriesVisible}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Main content area */}
      <main className={styles.mainSection}>
        <ProductGrid
          products={filteredProducts}
          isVisible={isProductsVisible}
        />

        {/* Footer directly in ProductPage */}
        <footer
          className={`${styles.footer} ${isFooterVisible ? styles.show : ""}`}
        >
          &copy; 2025 MRL Engineering. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
};

export default ProductPage;
