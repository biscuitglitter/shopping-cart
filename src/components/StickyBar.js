import React from "react"
import { Link } from "react-router-dom"
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StickyBar = ({notifications}) => {
  return (
      <div className="stickyBar">
      <div className="topNavigation">
        <div className="cartWrapper">
          <Link to="/cart" style={{ textDecoration: "none" }}>
          <IconButton aria-label="cart">
          <Badge badgeContent={notifications} color="secondary" style={{ color:"black" }}>
               <ShoppingCartIcon  className="iconSizes" />               
      </Badge>
      </IconButton>
        </Link>
     
        </div>
        <div className="checkoutWrapper">
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="iconSizes">Checkout</div>
          </Link>
          </div> 
          </div> 
    </div>
  )
}

export default StickyBar