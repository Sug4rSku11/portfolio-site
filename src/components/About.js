import React from 'react';
import Typewriter from 'typewriter-effect';
import Ima from '../components/Images/Ima.png';
import Me from '../components/Images/Image.png'

const About = () => {
    return (
        <div className="about">
          <div className="me">
            <h4>Hi, I'm Desiree!</h4>
            <p> I am highly motivated and eager to learn and adapt to new challenges. 
                I understand the importance of staying updated with the latest trends 
                and developments in the web deveolopment landscape. I am committed to 
                continuous learning and professional growth, which includes obtaining 
                industry certifications and pursuing advanced training opportunities.
            </p>
            
          </div>
          <div className="about-img">
          <img src={Me}></img>
          </div>
        </div>
    )
}
export default About;
