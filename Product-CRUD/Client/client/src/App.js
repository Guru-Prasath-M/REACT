import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from './Components/Home'
import Products from './Components/Products'
import Admin from './Components/Admin'
import CreateProduct from "./Components/CreateProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/index' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/createproduct' element={<CreateProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
