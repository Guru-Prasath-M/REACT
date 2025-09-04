import React from 'react'
import '../style.css'

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
            <button className='button1'>Contact Me</button>
            <button className='button2'>LinkedIn</button>
          </div>


        </div>

    </div>
  )
}

export default Home;
