import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments,getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

import SHOP_DATA from '../shop-data.js'

export const ProductContext = createContext({
    //categoryMap:null,
    //setCategoryMap:()=>null
})

export const ProductProvider = ({children}) =>{
    const [categoryMap, setCategoryMap] = useState({})
    console.log(categoryMap)

    //store data 
    //addCollectionAndDocuments('categories',SHOP_DATA)

    //useEffect(()=>{
    //    const fetchData = async()=>{
    //        const data = await getCategoriesAndDocuments()
    //        setCategoryMap(data)
    //    } 
    //    fetchData()
    //},[])

    const value = {categoryMap, setCategoryMap}

    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}