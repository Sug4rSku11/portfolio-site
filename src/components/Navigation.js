import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';
import Services from './Services';


const Navigation = () => {
 return (
   <Router>
      <nav  className="nav">
         
         <Link to="/">Home</Link>
         <Link to="Services">Services</Link>
         <Link to="Projects">Projects</Link>
         <Link to="About">About</Link>
         <Link to="Contact">Contact</Link>
         
      </nav>
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/About" element={<About />}/>
         <Route path="/Services" element={<Services/>} />
         <Route path="/Projects" element={<Projects />} />
         <Route path="/Contact" element={<Contact />} />
      </Routes>

   </Router>
 )
}

export default Navigation;

