import { compose,createStore,applyMiddleware } from "redux";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { rootReducer } from "./root-reducer";


const loggerMiddleware = store => next => action =>{   
    console.log('Dispatching:', action.type)
    console.log('Payload:', action.payload)
    console.log('Cur state:', store.getState())
    next(action)
    console.log('Next state:', store.getState())
}
const middleWares = [loggerMiddleware,thunk]
const composedEnhancers = compose(applyMiddleware(...middleWares))

const persistConfig ={
    key:'root',
    storage,
    blacklist:['user']
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = createStore(persistedReducer,undefined,composedEnhancers)

export const persistor = persistStore(store)