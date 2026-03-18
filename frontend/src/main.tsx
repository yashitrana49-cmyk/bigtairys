import React from "react"
import ReactDOM from "react-dom/client"
import{ BrowserRouter } from "react-router-dom"
import { StrictMode } from 'react'
import { CartProvider } from "./context/CartContext";
import './index.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StrictMode>
    <BrowserRouter>
    <CartProvider>
    <App />
    </CartProvider>
    </BrowserRouter>
    </StrictMode>
  </React.StrictMode>,
)
