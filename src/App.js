import { Route, Routes } from "react-router-dom";
import {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import setCurrentUser from './store/user/user.action';
import setCategoryMap from './store/categories/categories.action';
import {auth} from './utils/firebase/firebase.utils'
import { onAuthStateChanged } from "firebase/auth";
import { getCategoriesAndDocuments } from "./utils/firebase/firebase.utils";

import Home from '../src/routes/home/Home.component'
import Navigation from '../src/routes/navigation/navigation.component'
import SignIn from '../src/routes/sign-in/sign-in.component'
import Shop from '../src/routes/shop/shop.component'
import CheckOut from '../src/routes/checkout/checkout.component'

import "./App.css";

const App = () => {

  const dispatched = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(!user){
        dispatched(setCurrentUser(null))
      }else{
        dispatched(setCurrentUser(user))
      }
    }) 
  }, [])

  useEffect(()=>{
    const fetchData = async() =>{
      const data = await getCategoriesAndDocuments()
      
      dispatched(setCategoryMap(data))
    }
    fetchData()
  },[])

  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        {/**<Route path="contact" element={<Contact />} />*/}
        <Route path="sign-in" element={<SignIn />} />
        <Route path="checkout" element={<CheckOut/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
