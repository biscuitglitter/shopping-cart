import React from "react"
import { Link } from "react-router-dom";
import StickyBar from "./StickyBar";

const Shop = () => {
    return (
      <div className="shopContainer">
        <StickyBar />
        <Link to="/" style={{ textDecoration: "none" }}>go back</Link>
    </div>

  )
}

export default Shop