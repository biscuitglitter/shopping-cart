import React from "react"

const Book = ({ book }) => {
  return (
    <div className="bookContainer">
      <img className="bookCovers" src={book.image} />
      <div className="bookDetails">
        <p>{book.title}</p>
        <p>{book.price}</p>
      </div>
    </div>
  )
}

export default Book