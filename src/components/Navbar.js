import React from "react"
import Cart from "./Cart"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="categories">
      <Link to="/" style={{ textDecoration: 'none', fontSize: "14px" }}>Home</Link>       
      <Link to="/store" style={{ textDecoration: 'none', fontSize: "14px" }}>Store</Link>       
      </div>
      </div>
  )
}

export default Navbar  
