import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../../context/product.context"
import { CartContext } from "../../context/cart.context"
import Product from "../../components/product/product"
import { useParams } from "react-router-dom"

import './category.style.scss'

const Category = () =>{
    const { category } = useParams()
    console.log(category)
    const { cartProduct, setCartProduct } = useContext(CartContext);
    const { categoryMap } = useContext(ProductContext);
    const [product,setProduct] = useState([])
    
    useEffect(()=>{
        setProduct(categoryMap[category])
        console.log(product)
    },[category,categoryMap])

    const handleCart = (product) => {
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

    return(
        <div>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className="category-container">
            {product && product.map( product =>{
                return <Product key={product.id} 
                    productInfo={product}
                    handleCart={() => handleCart(product)}/>
                
                
            })}
            </div>
        </div>
    )

}

export default Category