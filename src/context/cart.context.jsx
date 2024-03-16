import { createContext, useReducer, useState } from "react";

export const CartContext = createContext({});

const CART_ACTION = {
  HANDLE_CART:'HANDLE_CART',
  INCRE_CART:'INCRE_CART',
  DECRE_CART:'DRE_CART',
  REMOVE_CART:'REMOVE_CART'
}

const INITIAL_VALUE = {
  cartProduct:[]
}

const callAddProductToCart = (state,payload) =>{
  const existingCartItem = state.cartProduct.find( el =>{
    return el.id === payload.id
  })
  if(existingCartItem){
    console.log('already have it')
    const ArrayexistItemAddQuality = state.cartProduct.map(el =>{
      return el.id === payload.id
        ?{...el,quality:el.quality+1}
        :el
    })
    return {cartProduct:ArrayexistItemAddQuality}
  }else{
    console.log('no product')
    const newItem = [...state.cartProduct,{...payload,quality:1}]
    return{cartProduct:newItem}
  }
}
const callIncrement = (state,payload) =>{
  const incredArray = state.cartProduct.map( el =>{
    return el.id === payload.id
    ? {...el,quality:el.quality+1}
    : el
  })
  return{cartProduct:incredArray}
}

const callDecrement = (state,payload) =>{
const decredArray = state.cartProduct.map( el =>{
  return el.id === payload.id && el.quality > 0
  ? {...el,quality:el.quality-1}
  : el
})
return{cartProduct:decredArray}
}
const callRemove = (state,payload) =>{
const removedArray = state.cartProduct.filter( el =>{
  return el.id !== payload.id
})
return{cartProduct:removedArray}
}

const cartReducer = (state,action) =>{
  const {type,payload} = action
  console.log(state)
  console.log(payload)

  switch(type){
    case CART_ACTION.HANDLE_CART:
      const addProduct = callAddProductToCart(state,payload)
      return addProduct
      
    case CART_ACTION.INCRE_CART:
      const incredProduct = callIncrement(state,payload)
      return incredProduct

      case CART_ACTION.DECRE_CART:
        const decredProduct = callDecrement(state,payload)
        return decredProduct
        
      case CART_ACTION.REMOVE_CART:
        const removedProduct = callRemove(state,payload)
        return removedProduct
  }
}


export const CartProvider = ({ children }) => {
  //const [cartProduct, setCartProduct] = useState([]);
  const [cartProduct,dispatch] = useReducer(cartReducer,INITIAL_VALUE)

  const handleCart = (product) => {
    console.log('add product now!!')
    dispatch({type:CART_ACTION.HANDLE_CART,payload:product})
  }
  const handleIncrement = (product) => {
    console.log('incre!!')
    dispatch({type:CART_ACTION.INCRE_CART,payload:product})
  }
  const handleDecrement = (product) => {
    dispatch({type:CART_ACTION.DECRE_CART,payload:product})
  }

  const removeItem = (product) => {
    dispatch({type:CART_ACTION.REMOVE_CART,payload:product})
  }
/*   const handleCart = (product) => {
    const existingCartItem = cartProduct.find((el) => {
      return el.id === product.id;
    });
    if (existingCartItem) {
      const newCartItems = cartProduct.map((item) => {
        return item.id === product.id
          ? { ...product, quality: item.quality + 1 }
          : item;
      });
      setCartProduct(newCartItems);
    } else {
      setCartProduct([...cartProduct, { ...product, quality: 1 }]);
    }
  };

  const handleIncrement = (productToAdd) => {
    const increArray = cartProduct.map((el) => {
      return el.id === productToAdd.id
        ? { ...el, quality: el.quality + 1 }
        : el;
    });
    setCartProduct(increArray);
  };

  const handleDecrement = (productToRemove) => {
    console.log(cartProduct);
    const decreArray = cartProduct.map((el) => {
      return el.id === productToRemove.id && el.quality > 0
        ? { ...el, quality: el.quality - 1 }
        : el;
    });

    const removeProduct = decreArray.filter((el) => {
      return el.quality > 0;
    });
    setCartProduct(removeProduct);
  }; */

  const value = {
    cartProduct :cartProduct.cartProduct,
    //setCartProduct,
    handleCart,
    handleIncrement,
    handleDecrement,
    removeItem
  };
  console.log(cartProduct);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
