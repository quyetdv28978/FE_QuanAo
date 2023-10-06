import { Routes, Route } from 'react-router-dom'
import Signin from "./Component/signin.js"
import Signup from "./Component/signup.js"
import Forgot from "./Component/forgotPass.js"
import Home from './Component/home/Home';
import Products from './Component/shops/shops.js';
import Cart from './Component/Cart/Cart';
import User from './Component/user/user';
import ProductDetail from './Component/productDetail/productDetail.js';
import { useContext } from 'react';
import context from './context/context.js';


function App() {
  return (
    <div>
      {/* <ProductDetail></ProductDetail> */}
      <Routes>
        {/* Dang nhap, dang ky */}
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/forgotPass" element={<Forgot/>}/>

        {/* website user */}
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/User" element={<User/>}/>
      </Routes>
    </div>

  );
}

export default App;
