import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../../context/product.context"
import { CartContext } from "../../context/cart.context"
import Product from "../../components/product/product"
import { useParams } from "react-router-dom"

import './category.style.scss'

const Category = () =>{
    const { category } = useParams()
    
    const { cartProduct, setCartProduct,handleCart } = useContext(CartContext);
    const { categoryMap } = useContext(ProductContext);
    console.log(categoryMap[category])
    //const [product,setProduct] = useState([])
    
    //useEffect(()=>{
    //    setProduct(categoryMap[category])
    //    console.log(product)
    //},[category,categoryMap])

    return(
        <div>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className="category-container">
            {categoryMap[category] && categoryMap[category].map( product =>{
                return <Product key={product.id} 
                    productInfo={product}
                    handleCart={() => handleCart(product)}/>
            })}
            </div>
        </div>
    )

}

export default Category