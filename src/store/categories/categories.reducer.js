const INITIAL_VALUE = {
    categories:[],
    isLoading:false,
    error:null
}

 const categoriesReducer = (state = INITIAL_VALUE,action) =>{
    const {type,payload} = action
    
    switch(type){
        case "SET_CATEGORIES_START":
            return {...state,isLoading:true}
        case "SET_CATEGORIES_SUCCESS":
            return {...state,categories:payload,isLoading:false}
        case "SET_CATEGORIES_FAIL":
            return {...state,error:payload,isLoading:true}
        default:
            return state
    }
}
export default categoriesReducer