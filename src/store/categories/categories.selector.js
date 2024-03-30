export const selectCategoriesMap = (state) =>{
    return state.categories.categories
}

export const selectCategoriesLoading = (state)=>{
    return state.categories.isLoading
}