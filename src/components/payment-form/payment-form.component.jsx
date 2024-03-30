import React, { useState } from 'react';
import { useRef,useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux"

import { selectCartTotal } from "../../store/cart/cart.selector"

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { selectUser } from "../../store/user/user.selector"
import Spinner from '../../components/spinner/spinner.componenet'
import './payment-form.style.scss'

import { clearCart } from '../../store/cart/cart.action';

const PaymentForm = () =>{
    const [isLoading,setIsLoading] = useState(false)

    const dispatched = useDispatch()

    const stripe = useStripe()
    const elements = useElements()

    const cartTotal = useSelector(selectCartTotal)
    const currentUser = useSelector(selectUser)
    

    console.log("render from payment")

    
    const paymentHandler = async(e) =>{
        e.preventDefault()

        if(!stripe || !elements){
            return 
        }
        
        try{    
            
            setIsLoading(true)
            const response  = await fetch('/.netlify/functions/create-payment-intent',{
                method:'post',
                headers:{
                    'Content-Type':'application/json',       
                },
                body:JSON.stringify({amount:10000})
            }).then(res=>res.json())
            const {paymentIntent:{client_secret}} = response
            console.log(elements.getElement(CardElement))
            const paymentResult = await stripe.confirmCardPayment(client_secret,{
                payment_method:{
                    card:elements.getElement(CardElement),
                    billing_details: {
                        name: currentUser?currentUser.displayName:'Guest',
                      },
                }
                
            })
            console.log(paymentResult)
            if(paymentResult.paymentIntent.status == "succeeded"){
                alert('succeeded')
            }else{
                alert('error')
            }
        }catch(error){
            console.log(error)
        }finally{
            setIsLoading(false)
            dispatched(clearCart())
        }
        
        
    }

    return(
        <div className="payment-form-container">
            <form className="form-container" onSubmit={paymentHandler}>
                <h2>Credit Card Payment</h2>
                <CardElement />
                <div className="payment-button-container">
                {isLoading === false
                ?<button className="payment-button"  onClick={paymentHandler}>PAY NOW</button>
                :<Spinner />}
                </div>
            </form>
        </div>
    )
}

export default PaymentForm