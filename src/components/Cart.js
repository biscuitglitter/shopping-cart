import React from "react"

const Cart = ({ notifications }) => {
  
  console.log(notifications)
  return (
    <div className="cartContainer">
      you have {notifications} items
    </div>
  )
}

export default Cart