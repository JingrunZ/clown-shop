import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/product.context";
import { CartContext } from "../../context/cart.context";
import Product from "../product/product";

import './categories-preview.style.scss'

const CategoriesPreview = ({category,product}) => {
    const { cartProduct, setCartProduct } = useContext(CartContext);

      return (
        <div className="category-preview-container">
            <div className='category-name-container' >
              <Link className='category-name' to={category}>{category.toUpperCase()}</Link >
              
              </div>
            <div className="preview">
                {product.filter((item,index) => {
                    return index < 4
                    }).map(el=>{
                        return <Product 
                        key={el.id} 
                        productInfo={el}
                        
                        />
                    })}
            </div>
        </div>

      );
}
export default CategoriesPreview