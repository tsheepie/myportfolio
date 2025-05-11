
import './App.css';
import Nav from './Components/Navigation-bar/Nav.jsx';
import Cover from './Components/Cover/cover.jsx';
import About from './Components/About/about.jsx';
import Skills from './Components/Skills/skills.jsx';
import Work from './Components/Work/work.jsx';
import Contact from './Components/Contact/contact.jsx';
import Footer from './Components/Footer/footer.jsx';

function App() {
  return (
   <>
    <Nav/>
    <Cover/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
    <Footer/>
   </>
  );
}

export default App;
