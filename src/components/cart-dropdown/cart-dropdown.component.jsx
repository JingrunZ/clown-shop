import { CartContext } from "../../context/cart.context";
import { useContext, useState } from "react";
import { useSelector } from 'react-redux'
import CartItem from "../../components/cart-item/cart-item.component";
//import CheckOut from "../routes/checkout/checkout.component";

import "./cart-dropdown.style.scss";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  //const { cartProduct, setCartProduct } = useContext(CartContext);
  const cartProduct = useSelector(state=>state.cart)
  console.log(cartProduct)
  const navigate = useNavigate()

  const navigateToCheckOut = () =>{
    navigate('/checkout')
  }

  return (
    <div className="cart-dropdown-container">
      {cartProduct.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <button className="cart-btn">Check Out</button>
        </div>
      ) : (
        <>
          {cartProduct.map(el =>{return <CartItem key={el.id} product={el} />})}
          <button onClick={navigateToCheckOut} className="cart-btn">Check Out</button>
        </>
      )}
    </div>
  );
};

export default CartDropDown;
