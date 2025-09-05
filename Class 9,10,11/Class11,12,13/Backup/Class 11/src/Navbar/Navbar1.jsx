//REACT ROUTER 5
//SINGLE PAGE WITHOUT RELOAD

import React from "react";
import {Link} from "react-router-dom"

let Navbar1 = ()=>{


    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="/index" className="navbar-brand">Logo</a>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li><Link to="/index" className="nav-link text-white">Home</Link></li>
                <li><Link to="/about" className="nav-link text-white">About</Link></li>
                <li><Link to="/services" className="nav-link text-white">Services</Link></li>
                <li><Link to="/contact" className="nav-link text-white">Contact</Link></li>
                <li><Link to="/products" className="nav-link text-white">Products</Link></li>

            </ul>
        </div>
    </nav>
}

export default Navbar1;