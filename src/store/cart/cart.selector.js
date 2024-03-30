export const selectCartItem = (state) =>{
    return state.cart
}

export const selectCartTotal = (state) =>{
    return state.cart.reduce((total,cartItem)=> total + cartItem.quality * cartItem.price,0)
}