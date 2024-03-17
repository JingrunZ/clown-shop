import { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import { UseSelector, useSelector } from "react-redux";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";

//import "./categories.style.scss";

const Categories = () => {
  //const { categoryMap } = useContext(ProductContext);
  const categoryMap = useSelector(state => state.categories)
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