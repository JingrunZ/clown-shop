import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./checkout-card.style.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const CheckOutCard = ({ product }) => {
  const { name, id, imageUrl, quality, price } = product;

    const {cartProduct,setCartProduct} = useContext(CartContext) 

   
    const handleIncrement = (productToAdd) => {
        const increArray = cartProduct.map(el=>{
            return el.id === productToAdd.id
            ?{...el,quality:el.quality+1}
            :el
        })
        setCartProduct(increArray)
    }

    const handleDecrement = (productToRemove) => {
        console.log(cartProduct)
        const decreArray = cartProduct.map(el=>{
            return el.id === productToRemove.id && el.quality > 0 
            ?{...el,quality:el.quality-1}
            :el
        })

        const removeProduct = decreArray.filter(el=>{
            return el.quality > 0
        })
        setCartProduct(removeProduct)
    }

    const removeItem = (productToClear) =>{
        const removedArray = cartProduct.filter(el=>el.id !== productToClear.id)
        setCartProduct(removedArray)
    }

  return (
    <div className="checkout-card-container">
      <div className="item">
        <img className="item-image" src={`${imageUrl}`} />
      </div>
      <p className="item">{name}</p>

      <p className="item">
        <div onClick={()=>handleDecrement(product)} className="arrow">
          <i className="bi bi-caret-left"></i>
        </div>
        {quality}
        <div onClick={()=>handleIncrement(product)} className="arrow">
          <i className="bi bi-caret-right"></i>
        </div>
      </p>
      <p className="item">{price}</p>
      <p className="item" onClick={()=>removeItem(product)}>
        <i class="bi bi-x-circle"></i>
      </p>
      
    </div>
  );
};

export default CheckOutCard;
