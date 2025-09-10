import { NavLink } from "react-router-dom";

let Navbar = ()=>{
    return <div> 
        <nav className="navbar navbar-dark bg-dark expand-lg">
        <NavLink to='/' className='navbar-brand'>Logo</NavLink>

        <div className="ml-auto">
            <ul className="navbar nav">
                <li><NavLink to='/index' className='nav-link'>Home</NavLink></li>
                <li><NavLink to='/products' className='nav-link'>Products</NavLink></li>
                <li><NavLink to='/admin' className='nav-link'>Admin</NavLink></li>
            </ul>
        </div>
    </nav>
    </div>

}
export default Navbar;