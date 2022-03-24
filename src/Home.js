import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import StickyBar from "./components/StickyBar";

const Home = () => {


  return (
    <div className="homeContainer">
      <StickyBar />
      <Navbar />
      <h1 style={{ fontSize: "13px" }}>Ready to browse some books?
        {/* Visit our <Link to="/store" style={{ textDecoration: "none" }}>Store</Link> */}
      </h1>
    </div>
  )
}

export default Home