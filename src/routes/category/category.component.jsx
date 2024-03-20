import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../../context/product.context"
import { CartContext } from "../../context/cart.context"
import Product from "../../components/product/product"
import { useParams } from "react-router-dom"
import { UseSelector, useDispatch, useSelector } from "react-redux"

import './category.style.scss'
import { setCart } from "../../store/cart/cart.action"
import { selectCategoriesMap } from "../../store/categories/categories.selector"

const Category = () =>{
    const { category } = useParams()
    const dispatched = useDispatch()
    const categoryMap = useSelector(selectCategoriesMap)
    
    const handleCart = (product) =>{
        dispatched(setCart(product))
    }

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