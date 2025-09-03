import React from 'react'
import Navbar1 from './Navbar/Navbar1';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services'
import Contact from './Components/Contact';
import Navbar2 from './Navbar/Navbar2';
const App = () => {
  return <div>
          <Router>
              <Navbar1/>
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/index" component={Home}/>
                <Route path="/contact" component={Contact}/>
              </Switch>
          </Router>
          {/* <Navbar2/> */}
        </div>
}
export default App;