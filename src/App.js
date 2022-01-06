import './App.css';
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div className="app">
        {/* <Navigation /> */}
        <header>
          <nav>
          <a href="#">Top</a>
          <a href="/About">About</a>
          <a href="/Projects">Projects</a>
          </nav>
        </header>
        <body>
        <About/>
        <Projects/>
        </body>
    
     <footer>
       <p>Made with ❤️ by Desiree Garcia</p>
     </footer>
    </div>
  );
}

export default App;
