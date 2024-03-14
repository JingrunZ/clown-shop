import { Route, Routes } from "react-router-dom";

import Home from '../src/routes/home/Home.component'
import Navigation from '../src/routes/navigation/navigation.component'
import SignIn from '../src/routes/sign-in/sign-in.component'
import Shop from '../src/routes/shop/shop.component'
import CheckOut from '../src/routes/checkout/checkout.component'
import "./App.css";


const Contact = () => {
  return (
    <div>
      <h1>I AM Contact</h1>
    </div>
  );
};


const App = () => {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="checkout" element={<CheckOut/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
