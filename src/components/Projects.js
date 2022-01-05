import React from "react";
import aMarketplace from '../Images/AMarketplace.png'
import PotluckPlanner from '../Images/PotluckPlanner.png'

const Projects = () => {
return(
   
    <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects">
        <h4>African Marketplace</h4>
            <a href='https://front-end-sage-ten.vercel.app/home' target="_blank">
            <img src={aMarketplace}/></a>
            <p>Collaborative project</p>
            <p>Built with html, css, Javascript, </p>
            <p>Github link</p>
        </div>
        <div className="projects">
        <h4>Potluck Planner</h4>
            <a href='https://potluck-bw-planner.herokuapp.com/' target="_blank">
            <img src={PotluckPlanner}/></a> 
            <p>Collaborative project</p>
            <p>Built with html, css, Javascript, </p>
            <p>Github link</p>
        </div>
    </div>
   
 )

}

export default Projects;

