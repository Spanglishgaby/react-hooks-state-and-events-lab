import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart ,setInCart] =useState(false)
  const listClass = inCart ? "in-cart" : " "
  const buttontext =inCart ? " Remove From Cart " : "Add to Cart"
  const buttoncolor = inCart ? "remove" : "add"
  const toggleCart = () => {
   //console.log('Add to the cart')
   setInCart( inCart => !inCart)
  }
  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttoncolor} onClick ={toggleCart} >{buttontext}</button>
    </li>
  );
}

export default Item;
