const initial_state = null

const userReducer = (state = initial_state,action) => {
    const {type,payload} = action

    switch(type){
        case "SET_CURRENT_USER":
            return payload
            default:
                return state
    }
}
export default userReducer