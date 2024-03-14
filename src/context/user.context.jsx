import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth,signOutAuthUser } from "../utils/firebase/firebase.utils";

//as the actual value that you want to acces
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null
})




export const UserProvider = ({children}) =>{
    
    const [currentUser, setCurrentUser] = useState(null)
    

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