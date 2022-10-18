import React from "react";
import {Routes,Route,Link} from 'react-router-dom';
import AboutUS from "./component/Aboutus";
import ContactUs from "./component/Contactus";
import Images from "./component/Imagesss";
import Services from "./component/Services";
import Home from "./component/Home";
import Adminlogin from "./component/adminlogin";
import Api from "./component/api";
import './App.css';
const App=()=>{
  return(
    <>
    <div className="fixed-top top-0">
    <h1 className="text-center bg-black text-white pt-2 top-0" id="t1">Math's Physics Couching Classes (MPC<sup>2</sup>)</h1>
    <nav className=" bg-dark text-white pb-1 ">
      <Link to="/" class="p1">Home</Link>
      <Link to="/AboutUs"  class="p1">About US</Link>
      <Link to="/ContactUs"  class="p1">Contact Us</Link>
      <Link to="/Services"  class="p1">Services</Link>
      <Link to="/Imagess"  class="p1">Images</Link>
    </nav>
    </div>
    <div className="p-5 m-md-5">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/AboutUs" element={<AboutUS/>}></Route>
      <Route path="/ContactUs" element={<ContactUs/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
      <Route path="/Imagess" element={<Images/>}></Route>
      <Route path="/adminlogin" element={<Adminlogin/>}></Route>
      <Route path="/api" element={<Api/>}></Route>
    </Routes>
    </div>
</>
  )
}
export default App;
