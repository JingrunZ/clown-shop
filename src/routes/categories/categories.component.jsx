import { useContext } from "react";
import { ProductContext } from "../../context/product.context";

import CategoriesPreview from "../../components/categories-preview/categories-preview.component";

//import "./categories.style.scss";

const Categories = () => {
  const { categoryMap } = useContext(ProductContext);
  console.log(categoryMap)

  return (
    <div className="shop-container"> 
      {Object.keys(categoryMap).map((category) => {
        return <CategoriesPreview key={category} category={category} product={categoryMap[category]} />
      })}
      
    </div>
  );
};

export default Categories;