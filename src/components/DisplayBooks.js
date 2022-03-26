import React from "react"
import Book from "./Book"

const DisplayBooks = ({ books, addToCart }) => {
 
    return (
      <div className="booksDisplay"> 
        {/* rendering idx to use it any time its needed */}
        {books.map((book, idx) => {
        return (  /* mixing two data variables for a key gives unique values instead of values that can exist twice like an ID, or an index */
          <Book book={book} id={book.isbn13} addToCart={addToCart} key={book.isbn13 + idx} />
        )
        })}
    </div>
    )
}

export default DisplayBooks

   
  