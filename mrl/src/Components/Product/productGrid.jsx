import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "./productData";
import styles from "./productGrid.module.css";

const ProductCard = ({ product, index, isVisible }) => {
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowImage(true);
        setTimeout(() => setShowContent(true), 300);
      }, index * 200);

      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  if (!isVisible) return null;

  return (
    <div className={styles.productCard} data-category={product.category}>
      <div className={`${styles.productImage} ${showImage ? styles.show : ""}`}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImg}
        />
      </div>
      <div
        className={`${styles.productContent} ${showContent ? styles.show : ""}`}
      >
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Link to={`/product/${product.link}`} className={styles.learnMore}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

const ProductGrid = ({ products, isVisible }) => {
  if (!isVisible) return null;

  return (
    <section
      className={`${styles.productContainer} ${isVisible ? styles.show : ""}`}
      id="products"
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          isVisible={isVisible}
        />
      ))}
    </section>
  );
};

export default ProductGrid;
