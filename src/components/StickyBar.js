import React from "react"
import { Link } from "react-router-dom"
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const StickyBar = ({notifications, addedItems}) => {
  return (
      <div className="stickyBar">
      <div className="topNavigation">
        <div className="cartWrapper">
        <Link to="/checkout" style={{ textDecoration: "none" }} state={{ addedItems: addedItems }}  >
          <IconButton aria-label="cart">
          <Badge badgeContent={notifications} color="secondary" style={{ color:"black" }}>
               <ShoppingCartIcon className="iconSizes" />               
      </Badge>
            </IconButton>  
            </Link>
      </div>
          </div> 
    </div>
  )
}

export default StickyBar