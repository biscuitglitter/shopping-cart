import React, { useEffect, useState } from "react"
import axios from "axios";
import Book from "./Book"
import _, { set } from "lodash"
import Cart from "./Cart"

const DisplayBooks = () => {
  const [books, setBooks] = useState([])    
  const [addedItems, setAddedItems] = useState([])
  const [notifications, setNotifications] = useState(1)

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
    setNotifications(newList.length + 1)
    console.log(notifications)
  }


    return (
        <div className="booksDisplay"> 
        {books.map((book) => {
        return (
          <Book book={book} id={book.isbn13} addToCart={addToCart} key={book.isbn13} />
        )
        })}
        <Cart notifications={notifications} setNotifications={setNotifications} />
    </div>
    )
}

export default DisplayBooks

   
  