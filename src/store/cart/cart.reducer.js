const INITIAL_VALUE = []

const cartReducer = (state = INITIAL_VALUE,action) =>{
    const { type , payload } = action
    switch(type){
        case "SET_CART":
            const existingItem = state.find(el=>{
                return el.id === payload.id
            })
            if(existingItem){
                const newArray = state.map(el =>{
                    return el.id === payload.id
                    ? {...el,quality:el.quality+1}
                    : el
                })
                return newArray
            }else{
                return [...state,{...payload,quality:1}]
            }
        case "INCRE_CART":
            const increArray = state.map(el =>{
                return el.id === payload.id
                ?{...el,quality:el.quality+1}
                :el
            }) 
            return increArray
        case "DECRE_CART":
            const dreArray = state.map(el =>{
                return el.id === payload.id
                ?{...el,quality:el.quality-1}
                :el
            }) 
            return dreArray
        case "REMOVE_CART":
            const removedArray = state.filter(el =>{
                return el.id !== payload.id
            }) 
            return removedArray
            
        default:
            return state
    }
}

export default cartReducer