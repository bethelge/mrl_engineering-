import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home/home";
import ProductPage from "./Components/Product/productPage";
import ProductDetail from "./Components/Product/productDetail";
import Service from "./Components/Service/service";
import Inquiry from "./Components/Inquiry/inquiry";
import Contact from "./Components/Contact/contact";
import "./App.css";

// Redirect component for old URLs
const ProductDetailRedirect = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const product = searchParams.get("product");

  if (product) {
    return <Navigate to={`/product/${product}`} replace />;
  }

  return <Navigate to="/products" replace />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/service" element={<Service />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add this route to handle old productDetail.html URLs */}
          <Route
            path="/productDetail.html"
            element={<ProductDetailRedirect />}
          />
          {/* Add this catch-all route for any other productDetail paths */}
          <Route path="/productDetail" element={<ProductDetailRedirect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
