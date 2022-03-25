/* eslint-disable */

import React, { useState } from "react"
import { Link } from "react-router-dom"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useLocation } from "react-router-dom"
import StickyBar from "./StickyBar"
import _, { set } from "lodash"

const Checkout = () => {
const location = useLocation()
const { addedItems } = location.state
  
let length 
const data = addedItems

  if (data !== 0) {
    length === data.length
  } else {
    length === 0
  }
  console.log( _.values(_.groupBy(data)).map(d => ({name: d[0], count: d.length})))
  
  return (
    <div className="checkoutContainer">
      <StickyBar notifications={length} />
      <Link to="/store" style={{ textDecoration: "none" }}> <ArrowBackIcon /> </Link>
      {addedItems.length === 0 ? <div>You don't have any items in your cart yet</div> : 
      data.map(book => {
        return (
          <div className="ListOfBooksPicked" book={book} id={book.isbn13} key={book.isbn13}>
              <span className="title">{book.title}</span> <span className="count">{book.length}</span>
              <span className="price">{book.price}</span>
          </div>
        )
      })}
    </div>
  )
}


export default Checkout