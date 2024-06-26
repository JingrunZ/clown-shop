import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../store/cart/cart.action";

import CheckOutCard from "../../components/checkout-card/checkout-card.component";
import PaymentForm from '../../components/payment-form/payment-form.component'

import { selectPayment } from "../../store/payment/payment.selector";

import './checkout.style.scss'
import { selectCartItem } from "../../store/cart/cart.selector";

const CheckOut = () => {
    
   

    const cartProduct = useSelector(selectCartItem)
    const [total,setTotal] = useState(0)

    useEffect(()=>{
        const totalPrice = cartProduct.reduce((accumulator,product)=>{
            return accumulator + product.price * product.quality
        },0)
        setTotal(totalPrice)
    },[cartProduct])

  return(
    <>
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
        <PaymentForm/>
      </div>   
    </>
    
  
  );
};
export default CheckOut;
