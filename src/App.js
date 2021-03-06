import React from 'react'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Packages from './packages/Packages';
import PackageList from './packages/PackageList';
import Profile from './user/Profile';
import Calculator from './calculator/Calculator';
import Signin from "./user/Login";
import Signup from "./user/Signup";
import Edit from "./packages/packageEdit";
import Create from './packages/packageCreate';
import Update from "./user/profileEdit";
import FAQ from"./pages/FAQ";

const App = (props) => {

  const URL = 'http://localhost:4000';
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route exact path='/' element ={<Home  URL={URL} />} />

        <Route path="/packages" element = {<Packages  URL={URL} />} />
        <Route path="/packages/:id" element = {< PackageList  URL={URL}/>} />
        <Route path="/packages/edit/:id" element = {<Edit URL={URL} />} />
        <Route path="create" element ={<Create URL={URL}/>} />
        <Route path="/update" element={<Update URL={URL}/>} />
        <Route path="/about" element = {<About  URL={URL} /> } />
        <Route path="/signin" element = {<Signin  URL={URL} />} />
        <Route path="/signup" element = {<Signup  URL={URL} />} />
        <Route path="/calculator" element= {<Calculator URL={URL} />} />
        <Route path="/user" element= {<Profile URL={URL} />} />
        
        <Route path="/faq" element= {<FAQ URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
