const setCategoryMap = (categories) =>{
    console.log(categories)
    return{
        type:"SET_CATEGORIES",
        payload:categories
    }
}
export default setCategoryMap