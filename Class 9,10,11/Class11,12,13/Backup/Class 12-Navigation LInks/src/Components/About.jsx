import React from 'react'
import '../style.css'

const About = () => {
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h3 className='about'>About Us</h3>
              <p className='text-about'>At Besnik Consultancy,we take pride in our values-services,integrity,and excellence.</p>
            </div>

              <div className="col-4">
                <button className='btn'>Learn More</button>
              </div>
          </div>

          
          <div className="row">
            <div className="col-4">
              <h1 className='con-1'>1.</h1>
              <h4>Who We Are</h4>
              <p>You get a 2-week trial to the kick the Smart tries.We want you to.</p>
            </div>


            <div className="col-4">
              <h1 className='con-1'>2.</h1>
              <h4>What Do We Do</h4>
              <p>We give you a free course that guides you through the process.</p>
            </div>

            
          </div>



          <div className="row">
            <div className="col-4">
              <h1 className='con-1'>3.</h1>
              <h4>How Do We Help</h4>
              <p>Use our multumedia lectuers,videos,and coaching sessions.</p>
            </div>

            <div className="col-4">
              <h1 className='con-1'>4.</h1>
              <h4>Create Success Story</h4>
              <p>With access to online learing resources anyone can transform.</p>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default About;
