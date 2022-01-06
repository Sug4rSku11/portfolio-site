import React from "react";
import aMarketplace from '../Images/AMarketplace.png'
import PotluckPlanner from '../Images/PotluckPlanner.png'
import AnywhereFitness from '../Images/AnywhereFitness.png'
import ToDoApp from '../Images/ToDoApp.gif'


const Projects = () => {
return(
   
    <div>
        <h2 className="projects-title">Projects</h2>
        <div className="projects-container">
        <div className="projects">
        <h4>African Marketplace</h4>
            <a href='https://front-end-sage-ten.vercel.app/home' target="_blank">
            <img src={aMarketplace}/></a>
            <p>Collaborative project with members of BloomTech cohort.</p>
            <p>Worked on scaffolding input forms and worked on CSS for the Front End</p>
            <p>Built with HTML, CSS, Javascript, React, NodeJS </p>
            <a href="https://github.com/Build-Week-ft-african-marketplace-3/front-end" target="_blank">GitHub Code</a>
        </div>
        <div className="projects">
        <h4>Potluck Planner</h4>
            <a href='https://potluck-bw-planner.herokuapp.com/' target="_blank">
            <img src={PotluckPlanner}/></a> 
            <p>Collaborative project with members of BloomTech cohort.</p>
            <p>Worked on coding the Events page for a Users profile in the Front End</p>
            <p>Built with HTML, CSS, ReactJS, NodeJS </p>
            <a href="https://github.com/bwpotluckplanner3/frontend" target="_blank">GitHub Code</a>
        </div>
        <div className="projects">
        <h4>Anywhere Fitness</h4>
            <a href='' target="_blank"></a>
            <img src={AnywhereFitness}/> 
            <p>Pair programmed with another member of BloomTech cohort.</p>
            <p>Worked on backend to provide data to the Front End.</p>
            <p>Built with NodeJs, Express, SQL, Knex, PostgreSQL </p>
            <a href="https://github.com/bw-anywherefitness-3/backend" target="_blank">GitHub Code</a>
        </div>
        <div className="projects">
        <h4>ToDo App</h4>
            <a href='https://web-module-project-class-components-sandy.vercel.app/' target="_blank">
            <img src={ToDoApp}/></a> 
            <p>Individual project as part of BloomTech curriculum</p>
            <p>Built with HTML, CSS, Javascript </p>
            {/* <p>Github link</p> */}
        </div>
        </div>
    </div>
   
 )

}

export default Projects;

