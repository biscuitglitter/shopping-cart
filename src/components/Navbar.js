import React from "react"
import Cart from "./Cart"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="categories">
      <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>       
      <Link to="/shop" style={{ textDecoration: 'none' }}>Shop</Link>       
      </div>
      </div>
  )
}

export default Navbar  
