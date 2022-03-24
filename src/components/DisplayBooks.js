import React, { useEffect, useState } from "react"
import axios from "axios";
import Book from "./Book";
import _, { set } from 'lodash'

const DisplayBooks = () => {
    const [books, setBooks] = useState([])    

    useEffect(() => {
        axios.get("https://api.itbook.store/1.0/new")
        .then(res => {
            console.log(res.data.books)
            setBooks(_.shuffle(res.data.books))
        })
    }, []);    

    return (
        <div className="booksDisplay"> 
{books.map((book) => {
        return (
            <Book book={book} key={book.isbn13}/>
        )
})}
    </div>
    )
}

export default DisplayBooks

   
  