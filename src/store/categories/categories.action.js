//export const setCategoryMap = (categories) =>{
//    return{
//        type:"SET_CATEGORIES",
//        payload:categories
//    }
//}

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"

export const setCategoryStart = () =>{
    return{
        type:"SET_CATEGORIES_START",
        
    }
}

export const setCategorySuccess = (categories) =>{
    return{
        type:"SET_CATEGORIES_SUCCESS",
        payload:categories
    }
}

export const setCategoryFail = (error) =>{
    return{
        type:"SET_CATEGORIES_FAIL",
        payload:error
    }
}

export const fetchCategoriesAsync = () => {
    console.log("start fetching......")
    return async(dispatch)=>{
        dispatch(setCategoryStart())
        try {
            const categoriesArray = await getCategoriesAndDocuments()
            dispatch(setCategorySuccess(categoriesArray))
        } catch (error) {
            dispatch(setCategoryFail(error))
        }
        
    }
}