import React from "react";


const Projects = () => {
return(
    <div className="projects"> 
    <div>
      <h2>Projects</h2>
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

