//REACT - ROUTER 7

import {NavLink,BrowserRouter as Router,Routes,Route} from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact"; 
import Header from "./heder/Header";
// import { NavLink } from "react-router";

let App = ()=>{
  let mystyles = {color: "red" ,textAlign:"center" , marginTop: "18%" , fontSize:"50px"}


  return <div>
      <Router>
      {/* <Header/> */}


         <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

          {/* <NavLink to="/index" id="nav" className="navbar-brand ">Logo</NavLink> */}
          <img className="logo" src="https://img.freepik.com/free-vector/gradient-technology-logo_23-2148163455.jpg?semt=ais_incoming&w=740&q=80" alt="image" />
          <div className="ml-auto" id="menu">
            <ul className="navbar-nav">
              <li><NavLink to="/index" className="nav-link">Home</NavLink></li>
              <li><NavLink to="/about" className="nav-link">About</NavLink></li>
              <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
              <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
            </ul>
          </div>
         </nav>


         <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/index" Component ={Home}></Route>
          <Route path="/about" Component ={About}></Route>
          <Route path="/services" Component ={Services}></Route>
          <Route path="/contact" Component ={Contact}></Route>
          <Route path="*" element ={<h4 style={mystyles}>404 - PAGE NOT FOUND</h4>}></Route>
         </Routes>
      </Router>
  </div>
  
}
export default App;