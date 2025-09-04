import { Link , BrowserRouter , Routes , Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

let App = ()=>{


  return <div>
      <BrowserRouter>
         <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/index" className="navbar-brand">LOGO</Link>
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li><Link to="/index" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/services" className="nav-link">Services</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </div>
         </nav>

         <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/index" Component ={Home}></Route>
          <Route path="/about" Component ={About}></Route>
          <Route path="/services" Component ={Services}></Route>
          <Route path="/contact" Component ={Contact}></Route>
         </Routes>
      </BrowserRouter>
  </div>
  
}
export default App;