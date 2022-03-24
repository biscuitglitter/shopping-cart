import React from "react"
import { Link } from "react-router-dom"

const StickyBar = () => {
  return (
      <div className="stickyBar">
       <div className="cartContainer">
      <Link to="/cart" style={{ textDecoration: "none" }}>My cart</Link>
          </div> 
    </div>
  )
}

export default StickyBar