import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleCart() {
    setInCart((inCart) => !inCart);
  }
  const status = inCart ? "remove item" : "add item";

  return (
    <li className = {inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className={status} 
      onClick = {handleCart}>
        {status}</button>
    </li>
  );
}

export default Item;
