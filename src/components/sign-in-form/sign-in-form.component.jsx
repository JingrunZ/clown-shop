import { useState, useContext} from "react";

import { UserContext } from "../../context/user.context";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signInAuthUserwithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";

import FormInputBox from "../form-input-box/form-input-box.component";

import './sign-in-form.style.scss'

const SignInForm = () => {
  const initializedValue = {
    displayName: "",
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(initializedValue)
  const { displayName, email, password } = formFields

  const { setCurrentUser } = useContext(UserContext)
  
  

  const popUpLogGoogleUser = async () => {
    try{
        const response = await signInWithGooglePopup();
        console.log(response);
        createUserDocumentFromAuth(response);
    }catch(error){
        if(error.code === 'auth/cancelled-popup-request'){
            alert('you cancelled the login')
        }
    }
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInAuthUserwithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      setCurrentUser(response)
    } catch (error) {
      //console.log(error.code);
      if(error.code === 'auth/invalid-credential'){
        alert("wrong password or email, please check")
      }
    }
  };

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  return (
      <div className="sign-in-form">
        <h1>I already have an account</h1>
        <p>Sign in with your email and password</p>
        <form className="input-boxes-container" onSubmit={handleSubmit}>
          <FormInputBox
            placeholder='Email:'
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          
          <FormInputBox
            placeholder='Password:    '
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
            
 
          <div className="buttons-container">
            <button className='sign-in-btn' type="submit" >Sign in</button>
            <button className='google-btn' onClick={popUpLogGoogleUser}>
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    
  );
};

export default SignInForm;
