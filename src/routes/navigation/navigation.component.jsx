import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { useSelector } from "react-redux";
import setCurrentUser from "../../store/user/user.action";
import { useDispatch } from "react-redux";
import { auth } from "../../utils/firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import "./navigation.style.scss";

import { useContext } from "react";
import { UserContext } from "../../context/user.context";

import { signOutAuthUser, Auth } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  //const { currentUser, setCurrentUser } = useContext(UserContext);
  const dispatched = useDispatch()
  const currentUser = useSelector(state => state.user)

  const [cartOpen, setCartOpen] = useState(false);
  


  const handleSignOut = () => {
    signOutAuthUser();
    dispatched(setCurrentUser(null));
  };

  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
    console.log(cartOpen);
  };

  return (
    <div>
      <div className="navigation-bar">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          {currentUser === null ? (
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          ) : (
            <span className="nav-link" onClick={handleSignOut}>
              SIGN OUT
            </span>
          )}
          <CartIcon handleCart={handleCartOpen} />
        </div>

        
      </div>
      {cartOpen === true ? <CartDropDown className="cart-container" /> : null}
    </div>
  );
};

export default Navigation;
