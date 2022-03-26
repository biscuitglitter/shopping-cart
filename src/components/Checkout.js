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
  const [list, setList] = useState(addedItems)

  const handleClick = (e) => {
    e.preventDefault()
    removeItem(e.currentTarget.id)
    "clicked!"
  }

  const removeItem = (id) => {
    setList(addedItems.filter(item => item.isbn13 !== id.toString()));
  }

  // let length 

  // if (data !== 0) {
  //   length === data.length
  // } else {
  //   length === 0
  // }
  // console.log( _.values(_.groupBy(data)).map(d => ({name: d[0], count: d.length})))

  return (
    <div className="checkoutContainer">
      <StickyBar notifications={length} />
      <Link to="/store" style={{ textDecoration: "none" }}> <ArrowBackIcon /> </Link>
      {addedItems.length === 0 ? <div>You don't have any items in your cart yet</div> :
        data.map(book => {
          return (
            <center key={book.isbn13}>
              <table  book={book} id={book.isbn13} className="encounters">
                <tbody>
                <tr>
                  <td className="title">{book.title}</td>
                  <td className="price">{book.price}</td>
                  {/* <td className="length">{book.length}</td> */}
                  <td><button type="button" onClick={handleClick} id={book.isbn13}>Remove</button></td>
                </tr>
                </tbody>
              </table>
            </center>
          )
        })}
    </div>
  )
}


export default Checkout