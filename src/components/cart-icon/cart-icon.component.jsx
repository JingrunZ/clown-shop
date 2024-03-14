import { CartContext } from '../../context/cart.context'

import {ReactComponent as CartLogo} from '../../assets/shopping-bag.svg'

import './cart-icon.style.scss'
import { useContext } from 'react'

const CartIcon = ({handleCart}) =>{
    const {cartProduct} = useContext(CartContext)
    
    const productNum = cartProduct.reduce((accumulator,currentValue)=>{
        return accumulator += currentValue.quality
    },0)
    

    return(
        <div className='cart-icon-container' onClick={handleCart}>
            <CartLogo className='shopping-icon'/>
            <span className='item-count'> {productNum} </span>
        </div>
    )
}

export default CartIcon