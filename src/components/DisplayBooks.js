import React, { useEffect, useState } from "react"
import Book from "./Book"

const DisplayBooks = ({ books, addToCart }) => {
 
    return (
        <div className="booksDisplay"> 
        {books.map((book, idx) => {
        return (
          <Book book={book} id={book.isbn13} addToCart={addToCart} key={book.isbn13 + idx} />
        )
        })}
    </div>
    )
}

export default DisplayBooks

   
  