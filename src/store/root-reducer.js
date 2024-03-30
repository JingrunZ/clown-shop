import { combineReducers } from "redux";


import userReducer  from "./user/user.reducer";
import categoriesReducer  from "./categories/categories.reducer";
import cartReducer  from "./cart/cart.reducer";
import payingReducer from "./payment/payment.reducer";


// root-reducer
export const rootReducer = combineReducers({
    user:userReducer,
    categories:categoriesReducer,
    cart:cartReducer,
    payStatus:payingReducer,
})