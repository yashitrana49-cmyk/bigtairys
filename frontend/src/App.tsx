import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Product from "./pages/Product"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"

function App() {
  return (
      <Routes>
       <Route element={<MainLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
       </Route>
      </Routes>
  )
}

export default App