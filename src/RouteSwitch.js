import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />      
      <Route path="/checkout" element={<Checkout />} />      
    </Routes>
      </BrowserRouter>
  )
}

export default RouteSwitch