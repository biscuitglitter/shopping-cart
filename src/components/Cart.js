import React from "react"
import { Link } from "react-router-dom"

const Cart = () => {
  return (
    <div>
    <Link to="/" style={{ textDecoration: "none" }}> <img className="icons" src="./img/icons8-go-back-48.png" /></Link> 
    <Link to="/checkout">checkout</Link>
    </div>
  )
}

export default Cart