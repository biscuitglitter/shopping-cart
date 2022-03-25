import React, { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import StickyBar from "./StickyBar"
import DisplayBooks from "./DisplayBooks"
import LoadingSpinner from "./LoadingSpinner"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import axios from "axios";
import _, { set } from "lodash"
import { useLocation } from "react-router-dom"

const Store = () => {
  const [loading, setLoading] = useState(false)
  
  const [addedItems, setAddedItems] = useState([])
  const [notifications, setNotifications] = useState(0)
  const [books, setBooks] = useState([])    

 
  useEffect(() => {
      axios.get("https://api.itbook.store/1.0/new")
      .then(res => {
        setBooks((_.shuffle(res.data.books)))
      })
  }, []);    

  const addToCart = (id) => {
    let book = books.find((book) => book.isbn13 === id.toString())
    const newList = [...addedItems, book]
    setAddedItems(newList)
    setNotifications(newList.length)
    console.log(notifications)
  }
  
  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  
    return (
      <div className="storeContainer">
        <StickyBar notifications={notifications} addedItems={addedItems} />
        <Link to="/" style={{ textDecoration: "none" }}> <ArrowBackIcon /> </Link> 
        <Link to="/checkout" style={{ textDecoration: "none" }} state={{ notifications: notifications }}> </Link> 
        {loading ? <LoadingSpinner /> : <DisplayBooks books={books} addToCart={addToCart} />   }        
    </div>
  )
}

export default Store