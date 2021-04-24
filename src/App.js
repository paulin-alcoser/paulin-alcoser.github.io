
import './App.css';
import Header from './Components/Header/Header'
import Work from './Components/Work/Work'
import Home from './Components/Home/Home.js'
import About from './Components/About/About.js'
import Skills from './Components/Skills/Skills.js'
import Contact from './Components/Contact/Contact.js'
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <div className="app">
        <Header/>
        <Home id="section__home"/>
        <About id="section__about"/>
        <Skills id="section__skills"/>
        <Work id="section__work"/>
        <Contact id="section__contact"/>
    </div>
  );
}

export default App;
