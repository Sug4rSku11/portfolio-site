import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  return (
    <div className="app">
        {/* <Navigation /> */}
        <header>
          <nav>
            <h5>Desiree Garcia</h5>
            <a href="https://github.com/Sug4rSku11" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/d3sir33g/" target="_blank">LinkedIn</a>
          </nav>
        </header>
        <body>
          <About/>
          <Projects/>
          <Contact />
        </body>
    
     <footer>
       <p>Designed and coded by Desiree Garcia</p>
     </footer>
    </div>
  );
}

export default App;
