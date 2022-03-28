import React, { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import StickyBar from "./StickyBar"
import DisplayBooks from "./DisplayBooks"
import LoadingSpinner from "./LoadingSpinner"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import axios from "axios";
import _, { set } from "lodash"

const Store = () => {
  const [loading, setLoading] = useState(false)  
  const [addedItems, setAddedItems] = useState([])
  const [notifications, setNotifications] = useState(0)
  
  // settings the notifications to 0 instead of () helps in two ways: (two assumptions) 
  // the variable is a number (integer)
  // count starts from 1 instead of 0 (real world logic)
  
  const [books, setBooks] = useState([])    

 
  useEffect(() => {
      axios.get("https://api.itbook.store/1.0/new")
      .then(res => {
        setBooks((_.shuffle(res.data.books)))
        // shuffles data (books) after every refresh
      })
  }, []);    

  const addToCart = (id) => {
    let book = books.find((book) => book.isbn13 === id.toString())
    const newList = [...addedItems, book]
    setAddedItems(newList)
    setNotifications(newList.length)
    // the notifications are pushed to an array that updates the number will found in the Stickybar component
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
        {/* passing data through the state using Link from react-router */}
        <Link to="/checkout" style={{ textDecoration: "none" }} state={{ notifications: notifications }}> </Link> 
        {loading ? <LoadingSpinner /> : <DisplayBooks books={books} addToCart={addToCart} />   }        
    </div>
  )
}

export default Store