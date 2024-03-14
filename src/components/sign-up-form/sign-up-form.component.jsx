import { useState,useContext } from "react";

import {
  createAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInputBox from "../form-input-box/form-input-box.component";
import { UserContext } from "../../context/user.context";

import './sign-up-form.component.scss'

const SignUp = () => {
  const initializedValue = {
    displayName: "",
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(initializedValue);

  const {currentUser,setCurrentUser} = useContext(UserContext)
  //console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const returnObj = await createAuthWithEmailAndPassword(
        formFields.email,
        formFields.password
      )
      returnObj.user.displayName = formFields.displayName;
        console.log(returnObj);
      createUserDocumentFromAuth(returnObj)
      setCurrentUser(returnObj)
    } catch (error) {
      console.log(error.code)
      if(error.code === 'auth/email-already-in-use'){
        alert("your account has been created")
      }
    }
  };

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-up-container">
      <h1>I do not have an account</h1>
      <p>Sign up for an account</p>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        
        <FormInputBox
          placeholder='Display name'
          type="text"
          onChange={handleChange}
          name="displayName"
          value={formFields.displayName}
          required
        />
        
        <FormInputBox
          placeholder='Email'
          type="email"
          onChange={handleChange}
          name="email"
          value={formFields.email}
          required
        />
        
        <FormInputBox
        placeholder='Password'
          type="password"
          onChange={handleChange}
          name="password"
          value={formFields.password}
          required
        />
        <div className="btn-container">
          <button >Create your Account</button>
        </div>
        
      </form>
    </div>
  );
};

export default SignUp;
