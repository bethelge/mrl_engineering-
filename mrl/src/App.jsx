import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/home';
// import Product from './Components/Product/product';
import Service from './Components/Service/service';
import Inquiry from './Components/Inquiry/inquiry';
// import Contact from './Components/Contact/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/service" element={<Service />} />
        <Route path="/inquiry" element={<Inquiry />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
