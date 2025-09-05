import React from 'react'
import {NavLink} from 'react-router'
const Navbar = () => {
  return <nav className='navbar navbar-dark bg-dark navbar-expand-md'>
                    <NavLink to="/index" className='navbar-brand'>Logo</NavLink>
                    <div className='ml-auto'>
                        <ul className='navbar-nav'>
                            <li><NavLink to="/index" className='nav-link'>Home</NavLink></li>
                            <li><NavLink to="/employees" className='nav-link'>Employees</NavLink></li>
                            <li><NavLink to="/login" className='nav-link'>Login</NavLink></li>  
                        </ul>
                    </div>
                </nav>
}

export default Navbar;