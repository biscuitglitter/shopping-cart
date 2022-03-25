import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import StickyBar from "./components/StickyBar";
import { Link } from "react-router-dom";
import axios from "axios"
import _, { set } from 'lodash'
import Book from "./components/Book"

const Home = () => {
  const [books, setBooks] = useState([])    

    useEffect(() => {
        axios.get("https://api.itbook.store/1.0/new")
        .then(res => {
         setBooks(_.take(_.shuffle(res.data.books), 3))
        })
    }, []);  

  return (
    <div className="homeContainer">
      <StickyBar />
      <Navbar />
      <h1 style={{ fontSize: "13px" }}>Ready to browse some books?  </h1>
        <h2>Check out our newest releases</h2>
      <div className="newestBooks"> 
{books.map((book) => {
        return (
          <div className="bookContainer" book={book} id={book.isbn13} key={book.isbn13}>
            <img src={book.image} /> <span> {book.price} </span>
            </div>
        )
})}
      </div>
    </div>
  )
}

export default Home