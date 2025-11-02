import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "./productData";
import Layout from "../Layout/layout";
import styles from "./productDetail.module.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  // Extended product details data
  const productDetails = {
    "passenger-elevator": {
      subtitle: "Smooth, Silent, and Reliable Vertical Transportation",
      description:
        "Our passenger elevators are designed for modern buildings, offering exceptional comfort, safety, and energy efficiency. Featuring advanced control systems, smooth acceleration, and whisper-quiet operation.",
      images: [
        "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1170&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25856cd63?q=80&w=1170&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop",
      ],
      features: [
        "Advanced microprocessor control system",
        "Energy-efficient LED lighting",
        "Emergency communication system",
        "Smooth acceleration and deceleration",
        "Fire service operation capability",
        "Accessibility compliance (ADA)",
        "Remote monitoring system",
        "Customizable interior design",
      ],
      specs: [
        { label: "Capacity", value: "Up to 2,500 lbs" },
        { label: "Speed", value: "Up to 500 ft/min" },
        { label: "Travel Height", value: "Up to 500 ft" },
        { label: "Door Type", value: "Center Opening" },
        { label: "Power Supply", value: "3-Phase, 460V" },
        { label: "Control System", value: "Microprocessor" },
        { label: "Safety Features", value: "Multiple Safety Systems" },
        { label: "Warranty", value: "2 Years" },
      ],
    },
    "home-elevator": {
      subtitle: "Compact and Elegant Residential Elevators",
      description:
        "Perfect for residential applications, our home elevators combine luxury with functionality. Designed for limited spaces while maintaining the highest standards of safety and comfort.",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1170&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25856cd63?q=80&w=1170&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop",
      ],
      features: [
        "Compact design for residential use",
        "Quiet operation technology",
        "Customizable interior finishes",
        "Emergency power operation",
        "Child safety features",
        "Easy maintenance access",
        "Energy-efficient operation",
        "Home automation integration",
      ],
      specs: [
        { label: "Capacity", value: "Up to 1,000 lbs" },
        { label: "Speed", value: "Up to 150 ft/min" },
        { label: "Travel Height", value: "Up to 50 ft" },
        { label: "Door Type", value: "Side Opening" },
        { label: "Power Supply", value: "Single Phase, 240V" },
        { label: "Control System", value: "Residential Grade" },
        { label: "Safety Features", value: "Residential Safety Package" },
        { label: "Warranty", value: "3 Years" },
      ],
    },
    "freight-elevator": {
      subtitle: "Heavy-Duty Industrial Transportation Solutions",
      description:
        "Built for demanding industrial applications, our freight elevators offer robust performance, exceptional durability, and reliable operation for heavy loads and challenging environments.",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25856cd63?q=80&w=1170&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1170&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop",
      ],
      features: [
        "Heavy-duty steel construction",
        "Industrial-grade components",
        "Large capacity for heavy loads",
        "Durable interior finishes",
        "Advanced safety systems",
        "Easy maintenance access",
        "Customizable configurations",
        "Weather-resistant operation",
      ],
      specs: [
        { label: "Capacity", value: "Up to 10,000 lbs" },
        { label: "Speed", value: "Up to 200 ft/min" },
        { label: "Travel Height", value: "Up to 100 ft" },
        { label: "Door Type", value: "Vertical Lift" },
        { label: "Power Supply", value: "3-Phase, 480V" },
        { label: "Control System", value: "Industrial Grade" },
        { label: "Safety Features", value: "Heavy-Duty Safety" },
        { label: "Warranty", value: "2 Years" },
      ],
    },
    "hospital-elevator": {
      subtitle: "Medical Grade Elevators for Healthcare Facilities",
      description:
        "Specifically designed for healthcare environments, our hospital elevators provide smooth, reliable transportation for patients, staff, and medical equipment with enhanced safety features.",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25856cd63?q=80&w=1170&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1170&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop",
      ],
      features: [
        "Hospital-grade hygiene standards",
        "Extra-wide doors for stretchers",
        "Smooth acceleration for patient comfort",
        "Emergency power backup",
        "Handrail and corner protection",
        "Easy-to-clean surfaces",
        "Quiet operation technology",
        "Medical equipment compatibility",
      ],
      specs: [
        { label: "Capacity", value: "Up to 3,500 lbs" },
        { label: "Speed", value: "Up to 350 ft/min" },
        { label: "Travel Height", value: "Up to 300 ft" },
        { label: "Door Type", value: "Center Opening" },
        { label: "Power Supply", value: "3-Phase, 460V" },
        { label: "Control System", value: "Medical Grade" },
        { label: "Safety Features", value: "Hospital Safety Package" },
        { label: "Warranty", value: "3 Years" },
      ],
    },
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Load product data
  useEffect(() => {
    const loadProduct = () => {
      const basicProduct = products.find((p) => p.link === productId);

      if (basicProduct && productDetails[productId]) {
        const detailedProduct = {
          ...basicProduct,
          ...productDetails[productId],
        };
        setProduct(detailedProduct);
        document.title = `MRL Engineering | ${detailedProduct.name}`;
      } else {
        const fallbackProduct = {
          ...products[0],
          ...productDetails["passenger-elevator"],
        };
        setProduct(fallbackProduct);
      }

      // Scroll to top when product changes
      scrollToTop();
    };

    loadProduct();
  }, [productId]);

  // Handle related product click
  const handleRelatedProductClick = (productLink) => {
    // First scroll to top
    scrollToTop();

    // Then navigate after a small delay to ensure scroll completes
    setTimeout(() => {
      navigate(`/product/${productLink}`);
    }, 100);
  };

  // Get related products (same category, excluding current product)
  const relatedProducts = product
    ? products
        .filter((p) => p.category === product.category && p.link !== productId)
        .slice(0, 3)
    : [];

  if (!product) {
    return (
      <Layout>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading product details...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.body}>
        {/* Main Content */}
        <main className={styles.mainContent}>
          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link to="/" onClick={scrollToTop}>
                Home
              </Link>{" "}
              /{" "}
              <Link to="/products" onClick={scrollToTop}>
                Products
              </Link>{" "}
              / <span>{product.name}</span>
            </div>

            <div className={styles.productDetailContainer}>
              <div className={styles.productImages}>
                <div className={styles.mainImageContainer}>
                  <img
                    src={product.images[activeImage]}
                    alt={product.name}
                    className={styles.mainImage}
                  />
                </div>
                <div className={styles.imageGallery}>
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`${styles.galleryThumb} ${
                        activeImage === index ? styles.active : ""
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - View ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.productInfo}>
                <h1 className={styles.productTitle}>{product.name}</h1>
                <p className={styles.productSubtitle}>{product.subtitle}</p>
                <p className={styles.productDescription}>
                  {product.description}
                </p>

                <div className={styles.productFeatures}>
                  <h3 className={styles.featuresTitle}>Key Features</h3>
                  <ul className={styles.featuresList}>
                    {product.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.productSpecs}>
                  <h3 className={styles.specsTitle}>
                    Technical Specifications
                  </h3>
                  <div className={styles.specsGrid}>
                    {product.specs.map((spec, index) => (
                      <div key={index} className={styles.specItem}>
                        <span className={styles.specLabel}>{spec.label}</span>
                        <span className={styles.specValue}>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.ctaButtons}>
                  <Link
                    to="/inquiry#product"
                    className={`${styles.btn} ${styles.btnPrimary}`}
                    onClick={scrollToTop}
                  >
                    <i className="fas fa-envelope"></i>
                    Request Quote
                  </Link>
                  <Link
                    to="/contact"
                    className={`${styles.btn} ${styles.btnSecondary}`}
                    onClick={scrollToTop}
                  >
                    <i className="fas fa-phone"></i>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className={styles.relatedProducts}>
              <div className={styles.sectionTitle}>
                <h2>Related Products</h2>
                <p>Explore our other innovative solutions</p>
              </div>
              <div className={styles.productsGrid}>
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className={styles.productCard}>
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className={styles.productCardImage}
                    />
                    <div className={styles.productCardContent}>
                      <h3 className={styles.productCardTitle}>
                        {relatedProduct.name}
                      </h3>
                      <p className={styles.productCardDescription}>
                        {relatedProduct.description}
                      </p>
                      <button
                        onClick={() =>
                          handleRelatedProductClick(relatedProduct.link)
                        }
                        className={styles.productCardLink}
                      >
                        Learn More <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default ProductDetail;
