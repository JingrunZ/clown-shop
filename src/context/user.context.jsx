import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth,signOutAuthUser } from "../utils/firebase/firebase.utils";

//as the actual value that you want to acces

export const UserContext = createContext({
    //currentUser:null,
    //setCurrentUser:()=>null
})

const CURRENT_USER = null

const USER_ACTION_TYPES ={
    SET_CURRENT_USER:"SET_CURRENT_USER",
}

const userReducer = (state,action) => {
    const {type,payload} = action
    //console.log('dispatched')
    //console.log(action)
    //console.log(state)
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return payload
            default:
                throw new Error('unhandled error')
    }
}

export const UserProvider = ({children}) =>{
    //const [currentUser, setCurrentUser] = useState(null)
    const [currentUser,dispatch] = useReducer(userReducer,CURRENT_USER)
    //console.log(currentUser)
    const setCurrentUser  = (user) =>{
        dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER,payload:user})
        
    }

    const value = {currentUser,setCurrentUser}
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                console.log(user)
                setCurrentUser(user)
            }else{
                setCurrentUser(null);
            }
        })
    },[])
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}