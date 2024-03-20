import { selectCategoriesLoading, selectCategoriesMap } from "../../store/categories/categories.selector";
import { useSelector } from "react-redux";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import Spinner from "../../components/spinner/spinner.componenet";

//import "./categories.style.scss";

const Categories = () => {
  const categoryMap = useSelector(selectCategoriesMap)
  const categoryLoading = useSelector(selectCategoriesLoading)
  
  return (
    <div className="shop-container"> 
    {categoryLoading === true
    ?<Spinner/>
    :Object.keys(categoryMap).map((category) => {
      return <CategoriesPreview key={category} category={category} product={categoryMap[category]} />
    })}
    </div>
    );
};

export default Categories;