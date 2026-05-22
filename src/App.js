import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import Category from './category/Category';
import SignIn from './sign/SignIn';
import SignUp from './sign/SignUp';
import Detail from './details/Details';
import data from './data.json';
import {CartProvider} from "./CardContext";
import Detailcard from './context/detailcard';


function App() {
  return (
    <CartProvider >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Category/:id' element={<Detail data={data} />} />
        <Route path='/Category' element={<Category />} />
        <Route path='/Signin' element={<SignIn />} />
        <Route path='/Signin/Signup' element={<SignUp />} />       
        <Route path="/Detailcard" element={<Detailcard  />}/>        
      </Routes>
    </CartProvider >


  );
}

export default App;
