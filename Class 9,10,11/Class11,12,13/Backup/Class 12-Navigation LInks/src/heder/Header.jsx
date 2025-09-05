import { useNavigate } from "react-router";

let Header =()=>{
    let navigation = useNavigate();
    let Home = (e)=>{
    e.preventDefault();
    navigation('/index')
    }

    let About = (e)=>{
    e.preventDefault();
    navigation('/about')
    }

    let Services = (e)=>{
    e.preventDefault();
    navigation('/services')
    }

    let Contact = (e)=>{
    e.preventDefault();
    navigation('/contact')
    }

    
    return(
        <>
        <div className="navbar navbar-dark bg-dark navbar-expand-lg">
            <img className="logo" src="https://logomoose.com/wp-content/uploads/2016/01/18.jpg" alt="image" />
            <div className="ml-auto navbar-brand">
                <ul className="navbar nav">
                    <li onClick={Home} className="nav-link">Home</li>
                    <li onClick={About} className="nav-link">About</li>
                    <li onClick={Services} className="nav-link">Services</li>
                    <li onClick={Contact} className="nav-link">Contact</li>
                    
                </ul>
            </div>
        </div>
        </>
    )
}
export default Header;