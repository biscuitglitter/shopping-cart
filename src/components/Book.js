import React from "react"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const Book = ({ book, addToCart }) => {
  
  const handleClick = (e) => {
    e.preventDefault()
    addToCart(e.currentTarget.id)
  }

  return (
       <Card id={book.isbn13} sx={{ maxWidth: 220 }}>
        <CardContent>
        <CardMedia component="img" image={book.image} />
        <Typography sx={{ fontSize: 14 }} color="text.primary">
        {book.title}
        </Typography>
      </CardContent>
        <button onClick={handleClick} id={book.isbn13} size="small">add to cart</button>
      </Card>
      )
}

export default Book