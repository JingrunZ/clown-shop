const INITIAL_VALUE = {
    payingStatus:false,
}

const payingReducer = (state=INITIAL_VALUE,action) =>{
    const {type,payload} = action
    switch(type){
        case "SET_PAYMENT_STATUS": 
            return{
                ...state,payingStatus:payload
            }
        
        default:
            return state
    }
}

export default payingReducer