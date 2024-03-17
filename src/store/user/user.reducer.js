const initial_state = null

export const userReducer = (state = initial_state,action) => {
    const {type,payload} = action

    switch(type){
        case "SET_CURRENT_USER":
            return payload
            default:
                return state
    }
}