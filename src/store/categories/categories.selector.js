export const selectCategoriesMap = (state) =>{
    console.log(state)
    return state.categories.categories
}

export const selectCategoriesLoading = (state)=>{
    return state.categories.isLoading
}