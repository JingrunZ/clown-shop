export const setCart = (product) =>{
    return{type:'SET_CART',payload:product} 
}

export const increCart = (product) =>{
    return{type:'INCRE_CART',payload:product} 
}

export const decreCart = (product) =>{
    return{type:'DECRE_CART',payload:product} 
}

export const removeCart = (product) =>{
    return{type:'REMOVE_CART',payload:product} 
}

export const clearCart = () =>{
    return{type:'CLEAR_CART',payload:[]} 
}


