import { Fragment, useContext } from "react";
import { Route,Routes } from "react-router-dom";
import { ProductContext } from "../../context/product.context";
import { CartContext } from "../../context/cart.context";

import Product from "../../components/product/product";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";

//import "./shop.style.scss";

import Categories from "../categories/categories.component";
import Category from "../category/category.component";

const Shop = () => {
  const { categoryMap } = useContext(ProductContext);
  const { cartProduct, setCartProduct } = useContext(CartContext);

  return (
    <>
      <Routes>
        <Route index element = {<Categories/>}/>
        <Route path=":category" element = {<Category/>}/>
      </Routes>
    </>
  );
};

export default Shop;
