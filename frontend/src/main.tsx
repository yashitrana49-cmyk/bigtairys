import ReactDOM from "react-dom/client"
import{ BrowserRouter } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop";
import { StrictMode } from 'react'
import { CartProvider } from "./context/CartContext";
import "./index.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);

