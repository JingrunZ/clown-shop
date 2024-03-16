import { useContext, useEffect } from "react";

import { CartContext } from "../../context/cart.context";

import "./checkout-card.style.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const CheckOutCard = ({ product }) => {
  const { name, id, imageUrl, quality, price } = product;

    const {cartProduct,handleIncrement,handleDecrement,removeItem} = useContext(CartContext) 

    //const removeItem = (productToClear) =>{
        //const removedArray = cartProduct.cartProduct.filter(el=>el.id !== productToClear.id)
        //setCartProduct(removedArray)
    //}
    useEffect(()=>{
      cartProduct.forEach(el =>{
        return el.quality === 0
        ?removeItem(el)
        :el
      })
    },[cartProduct])

  return (
    <div className="checkout-card-container">
      <div className="item">
        <img className="item-image" src={`${imageUrl}`} />
      </div>
      <p className="item">{name}</p>

      <div className="item">
        <div onClick={()=>handleDecrement(product)} className="arrow">
          <i className="bi bi-caret-left"></i>
        </div>
        {quality}
        <div onClick={()=>handleIncrement(product)} className="arrow">
          <i className="bi bi-caret-right"></i>
        </div>
      </div>
      <p className="item">{price}</p>
      <p className="item" onClick={()=>removeItem(product)}>
        <i className="bi bi-x-circle"></i>
      </p>
      
    </div>
  );
};

export default CheckOutCard;
