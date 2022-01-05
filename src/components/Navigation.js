import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';


const Navigation = () => {
 return (
   <Router>
      <nav>
         <Link to="Home">Home</Link>
         <Link to="Projects">Projects</Link>
         <Link to="Contact">Contact</Link>
      </nav>
      <Routes>
         <Route path="/Home" element={<Home />}/>
         <Route path="/Projects" element={<Projects />} />
         <Route path="/Contact" element={<Contact />} />
      </Routes>

   </Router>
 )
}

export default Navigation;

