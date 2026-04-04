import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Product from "./pages/Product"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Contact from "./pages/ContactPage"
import Cart from "./pages/Cart"
import ContactUs from "./pages/Contact-us"
import ShippingPolicy from "./pages/Shipping-policy"
import RefundPolicy from "./pages/RefundPolicy"
import PrivacyPolicy from "./pages/Privacy-policy"
import TrackOrder from "./pages/Track-order"
import Exchange from "./pages/Exchange"

function App() {
  return (
      <Routes>
       <Route element={<MainLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
       </Route>
      </Routes>
  )
}
export default App