import React from "react"
import { Link } from "react-router-dom"

const Cart = () => {
  return (
    <div>
      <h1>your items:</h1>
    <Link to="/checkout">checkout</Link>
    </div>
  )
}

export default Cart