import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="categories">
      <Link to="/" style={{ textDecoration: "none", fontSize: "14px" }}><span>Home</span></Link>       
      <Link to="/store" style={{ textDecoration: "none", fontSize: "14px" }} > <span>Store</span> </Link>
      </div>
      </div>
  )
}

export default Navbar  
