import { Link } from "react-router-dom";
import Product from "../product/product";

import './categories-preview.style.scss'

const CategoriesPreview = ({category,product}) => {

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