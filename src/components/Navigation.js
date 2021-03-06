import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';


const Navigation = () => {
 return (
   <Router>
      <nav>
         <Link to="/">Home</Link>
         <Link to="About">About</Link>
         <Link to="Projects">Projects</Link>
         <Link to="Contact">Contact</Link>
      </nav>
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/About" element={<About />}/>
         <Route path="/Projects" element={<Projects />} />
         <Route path="/Contact" element={<Contact />} />
      </Routes>

   </Router>
 )
}

export default Navigation;

