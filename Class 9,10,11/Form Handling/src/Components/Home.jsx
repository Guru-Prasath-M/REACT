import React from 'react'
import '../style.css'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <div className='home_bg'>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h4 className='home'>Hello , my name is</h4>
              <h2 className='name'>GuruPrasath M</h2>
              <h2 className='name'>I Design and build</h2>
              <h2 className='name'>Meaningful experiences.</h2>
            </div>

            <div className="col-4">
              <img className='img' src="https://indoreinstitute.com/wp-content/uploads/2020/06/IIST.jpg-1.png" alt="image" />
            </div>
          </div>
          
          <div className="row">
            <div className="col-8">
              <p className='text'>I am a digital polymath - a constantly evolving digital creator driven by a passion for lifelong learing and the desire to leave a lasting impact.</p>
            </div>
          </div>

          <div>
            <NavLink to="/contact">
              <button className='button1'>Contact Me</button>
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/guruprasath-m-b90860267/">
              <button className='button2'>LinkedIn</button>
            </NavLink>
            
          </div>


        </div>

    </div>
  )
}

export default Home;
