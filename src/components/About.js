import React from 'react';
import Typewriter from 'typewriter-effect';
import Ima from '../components/Images/Ima.png'

const About = () => {
    return (
        <div className='about-container'>
            <div className='ima'>
                <img src={Ima}></img>
          </div>
          <div  className="typewriter">
          <Typewriter
                options={{
                    strings: ["Front-End Developer.", "Back-End Developer.",
                                "Full Stack Developer."],
                    autoStart: true,
                    loop: true,
                }}
            />
            </div>
        </div>
    )
}
export default About;
