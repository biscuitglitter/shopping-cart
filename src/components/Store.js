import React, { useState, useEffect} from "react"
import { Link } from "react-router-dom";
import StickyBar from "./StickyBar";
import DisplayBooks from "./DisplayBooks"
import LoadingSpinner from "./LoadingSpinner";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Store = () => {
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   const timer = setTimeout(() => setLoading(false), 1800)
  //   return () => clearTimeout(timer)
  // }, [])

    return (
      <div className="storeContainer">
        <StickyBar />
        <Link to="/" style={{ textDecoration: "none" }}> <ArrowBackIcon /> </Link> 
        {loading ? <LoadingSpinner /> : <DisplayBooks />}
    </div>

  )
}

export default Store