import React from "react";
import aMarketplace from '../components/Images/aMarketplace.png'
import PotluckPlanner from '../components/Images/PotluckPlanner.png'
import AnywhereFitness from '../components/Images/AnywhereFitness.png'
// import Resume from '../components/Resume'

 import Carousel from 'react-bootstrap/Carousel'

const Projects = () => {
return(
    <div className="projects"> 
    <div>
      <h2>Projects I have worked on.</h2>
      </div>
    <div>
    <Carousel  className="carousel">
  <Carousel.Item>
    <a href="https://front-end-sage-ten.vercel.app/home" target="_blank"><img
      className="d-block w-100"
      src={aMarketplace}
      alt="First slide"
    /></a>
  </Carousel.Item>
  <Carousel.Item>
    <a href="https://potluck-bw-planner.herokuapp.com/" target="_blank"><img
      className="d-block w-100"
      src={PotluckPlanner}
      alt="Second slide"
    /></a>
  </Carousel.Item>
  <Carousel.Item>
    <a href="https://github.com/bw-anywherefitness-3/backend" target="_blank"><img
      className="d-block w-100"
      src={AnywhereFitness}
      alt="Third slide"
    /></a>
  </Carousel.Item>
</Carousel>
</div>
    <div className="descriptions">
      <div className="project-desc">
        <p className="proj-title">African Marketplace</p>
        <li>Collaborative project with members of BloomTech cohort.</li>
            <li>Worked on scaffolding input forms and worked on CSS for the Front End</li>
            <li>Built with HTML, CSS, Javascript, React, NodeJS </li>
            <a href="https://github.com/Build-Week-ft-african-marketplace-3/front-end" target="_blank">GitHub Code</a>
      </div>
      <div className="project-desc">
        <p className="proj-title">Potluck Planner</p>
        <li>Collaborative project with members of BloomTech cohort.</li>
        <li>Worked on coding the Events page for a Users profile in the Front End</li>
        <li>Built with HTML, CSS, ReactJS, NodeJS </li>
        <a href="https://github.com/bwpotluckplanner3/frontend" target="_blank">GitHub Code</a>
      </div>
      <div className="project-desc">
        <p className="proj-title">Anywhere Fitness</p>
        <li>Pair programmed with another member of BloomTech cohort.</li>
        <li>Worked on backend to provide data to the Front End.</li>
        <li>Built with NodeJs, Express, SQL, Knex, PostgreSQL </li>
        <a href="https://github.com/bw-anywherefitness-3/backend" target="_blank">GitHub Code</a>
        </div>
    </div>
    {/* <p><a className="resume" href={Resume} target="_blank">Resume</a></p> */}
    </div>
   
 )

}

export default Projects;

