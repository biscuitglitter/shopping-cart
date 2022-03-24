import React, { useState, useEffect} from "react"
import { Link } from "react-router-dom";
import StickyBar from "./StickyBar";
import DisplayBooks from "./DisplayBooks"
import LoadingSpinner from "./LoadingSpinner";

const Store = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
     let timer = setTimeout(() => {
        setLoading(false)
      }, 1800)
    return () => {
     clearTimeout(timer);
  }
  }, [])


    return (
      <div className="storeContainer">
        <StickyBar />
        <Link to="/" style={{ textDecoration: "none" }}> <img className="icons" src="./img/icons8-go-back-48.png" /></Link> 
        {loading ? <LoadingSpinner /> : <DisplayBooks />}
    </div>

  )
}

export default Store