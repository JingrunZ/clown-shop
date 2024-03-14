import { createContext,useState } from "react";


export const CartContext = createContext({
    cartProduct:[],
    setCartProduct:()=>null
    
    
})

export const CartProvider = ({children}) =>{
    const [cartProduct,setCartProduct] = useState([])
    const value = {cartProduct,setCartProduct}
    console.log(cartProduct)

    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}
