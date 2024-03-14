import SignUp from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import signInImage from "../../assets/signin-poster.jpg";
import "./sign-in.style.scss";

const SignIn = () => {


  return (
    <div className="sign-in-container">
      <div className="image-container">
        <img src={signInImage} />
      </div>
      <div className="forms-container">
        <SignInForm />
        <hr></hr>
        <SignUp />
      </div>
    </div>
  );
};

export default SignIn;
