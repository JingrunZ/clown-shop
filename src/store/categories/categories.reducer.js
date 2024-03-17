const INITIAL_VALUE = {}

export const categoriesReducer = (state = INITIAL_VALUE,action) =>{
    const {type,payload} = action
    console.log(type)
    console.log(payload)
    switch(type){
        case "SET_CATEGORIES":
            return {...payload}
            default:
                return state
    }
}