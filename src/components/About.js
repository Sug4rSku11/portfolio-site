import React from 'react';
import Resume from '../Images/Desiree Garcia.pdf'

const About = () => {
    return (
        <div className='home'>
        <div className='home-a'>
            <h2>Desiree Garcia</h2>
            <p>Full Stack Web Developer</p>
            <p>I have experience in HTML, CSS, ReactJs....</p>
        </div>
        {/* <div className='home-a'>
            <p>Resume:</p>
            <iframe src={Resume} width="500" height="700"></iframe>
            </div> */}
        </div>

    )
}
export default About;