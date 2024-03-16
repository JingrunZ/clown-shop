import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../context/cart.context";

import CheckOutCard from "../../components/checkout-card/checkout-card.component";

import './checkout.style.scss'

const CheckOut = () => {

    const {cartProduct} = useContext(CartContext)

    const [total,setTotal] = useState(0)

    useEffect(()=>{
        const totalPrice = cartProduct.reduce((accumulator,product)=>{
            return accumulator + product.price * product.quality
        },0)
        
        setTotal(totalPrice)
    },[cartProduct])

  return(
  <div className="checkout-container">
    <div className="label-container">
        <p className="name">Product</p>
        <p className="name">Description</p>
        <p className="name">Quality</p>
        <p className="name">Price</p>
        <p className="name">Remove</p>
    </div>

    {
        cartProduct.map(el =>{
            return <div key={el.id}>
             <CheckOutCard product={el}/>
            </div>
        })
    }
    <h1>total: {total}</h1>
  </div>
  );
};
export default CheckOut;
