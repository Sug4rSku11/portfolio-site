import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact';
import Home from './components/Home'
import name from '../src/components/Images/Desiree_Garcia.png'

function App() {
  return (
    <div className="app">
        {/* <Navigation /> */}
        <header>
          <nav>
          <img className="nav-name" src={name}></img>
            <a href="https://github.com/Sug4rSku11" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/d3sir33g/" target="_blank">LinkedIn</a>
          </nav>
        </header>
        <body>
          <About/>
          <Projects/>
          {/* <Home /> */}
          <Contact />
        </body>
    
     <footer>
       <p> Desiree Garcia -2022-</p>
       <p>
       <a href="github.com/Sug4rSku11/"><i class="fa-brands fa-github"></i></a>
       </p>
       <p>
       <a href="linkedin.com/d3sir33g/"><i class="fa-brands fa-linkedin"></i></a>
       </p>
       
       
     </footer>
    </div>
  );
}

export default App;
