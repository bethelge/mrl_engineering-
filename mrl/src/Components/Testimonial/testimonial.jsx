import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import "./testimonial.css";

// Import testimonial images
import testimony1 from "../../assets/testimony1.png";
import testimony2 from "../../assets/testimony2.png";
import testimony3 from "../../assets/testimony3.png";
import testimony4 from "../../assets/testimony4.png";

const Testimonial = () => {
  const testimonialImages = [testimony1, testimony2, testimony3, testimony4];
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(testimonialImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = testimonialImages.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-header">
            {/* <div className="section-label">Testimonials</div> */}
            <h1>What Our Partners Say</h1>
            <p>Discover the experiences of our valued partners and customers</p>
          </div>

          <div className="testimonial-grid">
            {currentImages.map((image, index) => (
              <div key={startIndex + index} className="testimonial-card">
                <div className="testimonial-image-container">
                  <img
                    src={image}
                    alt={`Testimonial ${startIndex + index + 1}`}
                    className="testimonial-image"
                  />
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <i className="fas fa-chevron-left"></i>
                Previous
              </button>

              <div className="pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      className={`pagination-number ${
                        currentPage === page ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Testimonial;
