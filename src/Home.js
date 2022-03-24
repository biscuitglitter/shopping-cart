import React from "react"
import Navbar from "./components/Navbar"
import StickyBar from "./components/StickyBar";

const Home = () => {
  return (
    <div className="homeContainer">
      <StickyBar />
      <Navbar />
    <h1>hello from home</h1>
    </div>
  )
}

export default Home