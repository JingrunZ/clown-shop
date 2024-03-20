import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useDispatch } from "react-redux";
import './product.style.scss'
import {setCart} from "../../store/cart/cart.action";

const Product = ({productInfo}) => { 
    const {imageUrl,name,price} = productInfo
    const dispatched = useDispatch()
    //const {handleCart} = useContext(CartContext)
    //console.log(productInfo)
    
    const handleCart = (productInfo) =>{
      dispatched(setCart(productInfo))
    }
    
  return (
    <div className="card-container">
      <img src={imageUrl} alt={`${name}`}/>
      <footer className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </footer>
      <button onClick={()=>handleCart(productInfo)}>Add to cart</button>
    </div>
  );
};

export default Product;
