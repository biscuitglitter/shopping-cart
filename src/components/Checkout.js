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
  const data = addedItems
  const [list, setList] = useState(data)

  const handleClick = (e) => {
    e.preventDefault()
    removeBook(e.currentTarget.id)
  }

  const removeBook = (id) => {
    let found = list.find(book => book.isbn13 === id)
    let newList = list.filter(book => book !== found)
    setList(newList)
  }
  // gets id from handleclick and then updates the list by filtering it out for rendering

  return (
    <div className="checkoutContainer">
      <Link to="/store" style={{ textDecoration: "none" }}> <ArrowBackIcon /> </Link>
      <div className="tables">
      {/* ternary operator arrow function that checks whetever list has been populated yet or not and renders accordingly */}
      {data.count === 0 ? <div>You don't have any items in your cart yet</div> :
        list.map((book, idx) => {
          return (
            <center key={book.isbn13 + idx}>
              <table>
                <tbody>
                  <tr>
                    <td className="title">{book.title}</td>
                    <td className="price">{book.price}</td>
                    <td><button type="button" onClick={handleClick} idx={idx} id={book.isbn13}>Remove</button></td>
                  </tr>
                </tbody>
              </table>
            </center>
          )
        })}
        </div>
    </div>
  )
}


export default Checkout