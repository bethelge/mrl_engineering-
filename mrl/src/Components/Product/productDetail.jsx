import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "./productData";
import Layout from "../Layout/layout";
import styles from "./productDetail.module.css";

// Import local images for product details
import passengerImg1 from "../../assets/productimage/passanger.jpg";
import passengerImg2 from "../../assets/productimage/10e997c4da547fe14238470ec2f17718.jpg";
import passengerImg3 from "../../assets/productimage/hospital.jpg";
import passengerImg4 from "../../assets/productimage/Panoramic Elevator.jpg";

import homeImg1 from "../../assets/productimage/10e997c4da547fe14238470ec2f17718.jpg";
import homeImg2 from "../../assets/productimage/passanger.jpg";
import homeImg3 from "../../assets/productimage/hospital.jpg";
import homeImg4 from "../../assets/productimage/Panoramic Elevator.jpg";

import hospitalImg1 from "../../assets/productimage/hospital.jpg";
import hospitalImg2 from "../../assets/productimage/passanger.jpg";
import hospitalImg3 from "../../assets/productimage/10e997c4da547fe14238470ec2f17718.jpg";
import hospitalImg4 from "../../assets/productimage/Panoramic Elevator.jpg";

import panoramicImg1 from "../../assets/productimage/Panoramic Elevator.jpg";
import panoramicImg2 from "../../assets/productimage/passanger.jpg";
import panoramicImg3 from "../../assets/productimage/10e997c4da547fe14238470ec2f17718.jpg";
import panoramicImg4 from "../../assets/productimage/hospital.jpg";

import escalatorImg1 from "../../assets/productimage/EscalatorWalkway.jpg";
import escalatorImg2 from "../../assets/productimage/passanger.jpg";
import escalatorImg3 from "../../assets/productimage/10e997c4da547fe14238470ec2f17718.jpg";
import escalatorImg4 from "../../assets/productimage/hospital.jpg";

import carLiftImg1 from "../../assets/productimage/CarLift.jpg";
import carLiftImg2 from "../../assets/productimage/Generator.jpg";
import carLiftImg3 from "../../assets/productimage/WaterPump.jpg";
import carLiftImg4 from "../../assets/productimage/GRPWaterTanker.jpg";

import fireAlarmImg1 from "../../assets/productimage/FireAlarm.jpg";
import fireAlarmImg2 from "../../assets/productimage/CO₂FireExtinguisher.jpg";
import fireAlarmImg3 from "../../assets/productimage/Generator.jpg";
import fireAlarmImg4 from "../../assets/productimage/WaterPump.jpg";

import co2Img1 from "../../assets/productimage/CO₂FireExtinguisher.jpg";
import co2Img2 from "../../assets/productimage/FireAlarm.jpg";
import co2Img3 from "../../assets/productimage/Generator.jpg";
import co2Img4 from "../../assets/productimage/WaterPump.jpg";

import generatorImg1 from "../../assets/productimage/Generator.jpg";
import generatorImg2 from "../../assets/productimage/WaterPump.jpg";
import generatorImg3 from "../../assets/productimage/GRPWaterTanker.jpg";
import generatorImg4 from "../../assets/productimage/CarLift.jpg";

import waterPumpImg1 from "../../assets/productimage/WaterPump.jpg";
import waterPumpImg2 from "../../assets/productimage/Generator.jpg";
import waterPumpImg3 from "../../assets/productimage/GRPWaterTanker.jpg";
import waterPumpImg4 from "../../assets/productimage/CarLift.jpg";

import grpTankerImg1 from "../../assets/productimage/GRPWaterTanker.jpg";
import grpTankerImg2 from "../../assets/productimage/Generator.jpg";
import grpTankerImg3 from "../../assets/productimage/WaterPump.jpg";
import grpTankerImg4 from "../../assets/productimage/CarLift.jpg";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  // Extended product details data with local images
  const productDetails = {
    "passenger-elevator": {
      subtitle: "Smooth, Silent, and Reliable Vertical Transportation",
      description:
        "Our passenger elevators are designed for modern buildings, offering exceptional comfort, safety, and energy efficiency. Featuring advanced control systems, smooth acceleration, and whisper-quiet operation.",
      images: [passengerImg1, passengerImg2, passengerImg3, passengerImg4],
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
      images: [homeImg1, homeImg2, homeImg3, homeImg4],
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
    "hospital-elevator": {
      subtitle: "Medical Grade Elevators for Healthcare Facilities",
      description:
        "Specifically designed for healthcare environments, our hospital elevators provide smooth, reliable transportation for patients, staff, and medical equipment with enhanced safety features.",
      images: [hospitalImg1, hospitalImg2, hospitalImg3, hospitalImg4],
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
    "panoramic-elevator": {
      subtitle: "Glass-Walled Elevators with Breathtaking Views",
      description:
        "Experience stunning panoramic views while moving between floors. Our glass elevators combine aesthetic appeal with advanced engineering for a truly unique vertical transportation experience.",
      images: [panoramicImg1, panoramicImg2, panoramicImg3, panoramicImg4],
      features: [
        "Full glass cabin design",
        "360-degree panoramic views",
        "Tempered safety glass construction",
        "Energy-efficient LED lighting",
        "Smooth and quiet operation",
        "Customizable glass finishes",
        "Advanced safety systems",
        "Weather-resistant design",
      ],
      specs: [
        { label: "Capacity", value: "Up to 2,000 lbs" },
        { label: "Speed", value: "Up to 400 ft/min" },
        { label: "Travel Height", value: "Up to 400 ft" },
        { label: "Glass Type", value: "Tempered Safety Glass" },
        { label: "Power Supply", value: "3-Phase, 460V" },
        { label: "Control System", value: "Microprocessor" },
        { label: "Safety Features", value: "Multiple Safety Systems" },
        { label: "Warranty", value: "2 Years" },
      ],
    },
    escalator: {
      subtitle: "Efficient People-Moving Solutions",
      description:
        "Our escalators and moving walkways are designed for high-traffic areas like shopping malls, airports, and public transportation hubs, providing reliable and efficient people movement.",
      images: [escalatorImg1, escalatorImg2, escalatorImg3, escalatorImg4],
      features: [
        "Heavy-duty construction",
        "Energy-efficient operation",
        "Safety comb plates",
        "Emergency stop buttons",
        "Weather-resistant models available",
        "Low maintenance design",
        "Customizable handrails",
        "Compliance with safety standards",
      ],
      specs: [
        { label: "Speed", value: "Up to 140 ft/min" },
        { label: "Incline", value: "30-35 degrees" },
        { label: "Step Width", value: "24, 32, or 40 inches" },
        { label: "Power Supply", value: "3-Phase, 460V" },
        { label: "Capacity", value: "Up to 9,000 people/hour" },
        { label: "Safety Features", value: "Multiple Safety Systems" },
        { label: "Warranty", value: "2 Years" },
      ],
    },
    "car-lift": {
      subtitle: "Vertical Transportation Systems for Vehicles",
      description:
        "Efficient car lift systems designed for multi-level parking facilities, offering reliable and safe vehicle transportation with robust construction and advanced safety features.",
      images: [carLiftImg1, carLiftImg2, carLiftImg3, carLiftImg4],
      features: [
        "Heavy-duty steel construction",
        "Safety interlocks and sensors",
        "Smooth hydraulic operation",
        "Easy maintenance access",
        "Space-efficient design",
        "Weather-resistant components",
        "Multiple safety features",
        "Customizable capacity options",
      ],
      specs: [
        { label: "Capacity", value: "Up to 6,000 lbs" },
        { label: "Speed", value: "Up to 100 ft/min" },
        { label: "Travel Height", value: "Up to 20 ft" },
        { label: "Power Supply", value: "3-Phase, 480V" },
        { label: "Control System", value: "Industrial Grade" },
        { label: "Platform Size", value: "Customizable" },
        { label: "Safety Features", value: "Multiple Safety Systems" },
        { label: "Warranty", value: "2 Years" },
      ],
    },
    "fire-alarm": {
      subtitle: "Advanced Fire Detection and Alert Systems",
      description:
        "Comprehensive fire alarm systems providing early warning and evacuation alerts for enhanced building safety. Our systems comply with international safety standards.",
      images: [fireAlarmImg1, fireAlarmImg2, fireAlarmImg3, fireAlarmImg4],
      features: [
        "Early smoke and heat detection",
        "Audio and visual alerts",
        "Central monitoring system",
        "Battery backup power",
        "Easy installation and maintenance",
        "Low false alarm rate",
        "Compliance with safety standards",
        "Remote monitoring capability",
      ],
      specs: [
        { label: "Detection Range", value: "Up to 10,000 sq ft per device" },
        { label: "Power Supply", value: "120V AC with battery backup" },
        { label: "Alarm Sound Level", value: "85 dB minimum" },
        { label: "Compliance", value: "UL, NFPA Standards" },
        { label: "Battery Backup", value: "24 hours minimum" },
        { label: "Communication", value: "Wired/Wireless Options" },
        { label: "Warranty", value: "3 Years" },
      ],
    },
    "co2-extinguisher": {
      subtitle: "Clean Agent Fire Suppression Systems",
      description:
        "CO₂ fire extinguishers are ideal for electrical fires and flammable liquids. They leave no residue, making them perfect for server rooms, laboratories, and industrial settings.",
      images: [co2Img1, co2Img2, co2Img3, co2Img4],
      features: [
        "No residue after discharge",
        "Safe for electrical equipment",
        "Rapid fire suppression",
        "Easy to recharge",
        "Corrosion-resistant construction",
        "Pressure gauge indicator",
        "Safety pin and tamper seal",
        "Compliance with safety standards",
      ],
      specs: [
        { label: "Capacity", value: "2.5, 5, 10, 15 lbs" },
        { label: "Extinguishing Agent", value: "Carbon Dioxide (CO₂)" },
        { label: "Working Pressure", value: "800-900 psi" },
        { label: "Discharge Time", value: "8-30 seconds" },
        { label: "Temperature Range", value: "-40°F to 120°F" },
        { label: "Compliance", value: "UL, ULC Certified" },
        { label: "Warranty", value: "5 Years" },
      ],
    },
    generator: {
      subtitle: "Reliable Backup Power Solutions",
      description:
        "Our generators provide uninterrupted power supply during outages, ensuring continuous operations for residential, commercial, and industrial applications.",
      images: [generatorImg1, generatorImg2, generatorImg3, generatorImg4],
      features: [
        "Automatic transfer switch",
        "Quiet operation technology",
        "Fuel-efficient engines",
        "Remote monitoring capability",
        "Weather-resistant enclosure",
        "Easy maintenance access",
        "Multiple fuel options",
        "Compliance with emission standards",
      ],
      specs: [
        { label: "Power Output", value: "10 kVA to 2000 kVA" },
        { label: "Fuel Type", value: "Diesel, Gas, Natural Gas" },
        { label: "Voltage", value: "120/240V, 480V, or Custom" },
        { label: "Phase", value: "Single or Three Phase" },
        { label: "Noise Level", value: "65-85 dBA at 1 meter" },
        { label: "Automatic Start", value: "Yes" },
        { label: "Warranty", value: "2 Years" },
      ],
    },
    "water-pump": {
      subtitle: "Efficient Water Pumping Systems",
      description:
        "Reliable water pumps for various applications including residential water supply, agricultural irrigation, industrial processes, and commercial buildings.",
      images: [waterPumpImg1, waterPumpImg2, waterPumpImg3, waterPumpImg4],
      features: [
        "High efficiency motors",
        "Corrosion-resistant materials",
        "Automatic pressure control",
        "Low maintenance design",
        "Quiet operation",
        "Energy efficient",
        "Multiple mounting options",
        "Dry run protection",
      ],
      specs: [
        { label: "Flow Rate", value: "Up to 500 GPM" },
        { label: "Head Pressure", value: "Up to 500 feet" },
        { label: "Power", value: "0.5 HP to 100 HP" },
        { label: "Voltage", value: "Single or Three Phase" },
        { label: "Material", value: "Stainless Steel, Cast Iron" },
        { label: "Protection", value: "IP54 or higher" },
        { label: "Warranty", value: "2 Years" },
      ],
    },
    "grp-tanker": {
      subtitle: "Glass Reinforced Plastic Water Storage Tanks",
      description:
        "GRP water tanks offer superior durability, hygiene, and corrosion resistance. Perfect for potable water storage in residential, commercial, and industrial applications.",
      images: [grpTankerImg1, grpTankerImg2, grpTankerImg3, grpTankerImg4],
      features: [
        "Food-grade inner surface",
        "Corrosion resistant",
        "Lightweight construction",
        "Easy installation",
        "Low maintenance",
        "UV resistant",
        "Customizable sizes",
        "Long service life",
      ],
      specs: [
        { label: "Capacity", value: "500 to 50,000 liters" },
        { label: "Material", value: "Food Grade GRP" },
        { label: "Color", value: "White or Custom" },
        { label: "Temperature Range", value: "-30°C to 80°C" },
        { label: "Wall Thickness", value: "6mm to 12mm" },
        { label: "Certification", value: "ISO 9001, NSF/ANSI 61" },
        { label: "Warranty", value: "10 Years" },
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
        // Fallback to first product if not found
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
