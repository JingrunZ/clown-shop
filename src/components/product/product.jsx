import { useState } from "react";

import './product.style.scss'

const Product = ({productInfo,handleCart}) => { 
    const {imageUrl,name,price} = productInfo

    
    
  return (
    <div className="card-container">
      <img src={imageUrl} alt={`${name}`}/>
      <footer className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </footer>
      <button onClick={handleCart}>Add to cart</button>
    </div>
  );
};

export default Product;
