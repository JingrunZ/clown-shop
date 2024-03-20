import { useContext, useEffect } from "react";

import { CartContext } from "../../context/cart.context";
import { increCart,decreCart,removeCart } from "../../store/cart/cart.action";

import "./checkout-card.style.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";

const CheckOutCard = ({ product }) => {
  const { name, id, imageUrl, quality, price } = product;
  console.log(product)

    const dispatched = useDispatch()

    const cartProduct = useSelector(state=>state.cart)
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

    const handleIncrement = (product) =>{
      dispatched(increCart(product))
    }
    const handleDecrement = (product) =>{
      dispatched(decreCart(product))
    }
    const removeItem = (product) =>{
      dispatched(removeCart(product))
    }
    

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
