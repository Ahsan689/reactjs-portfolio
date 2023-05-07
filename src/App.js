import logo from './logo.svg';
import './App.css';
import './responsive.css'
import {BrowserRouter, Routes, Route, Link ,useLocation} from "react-router-dom"
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { AnimatePresence } from "framer-motion";
import Navbar from './component/Navbar';
import { Project } from './pages/Projects';

function App() {
 

  const location = useLocation();
  return (
    <>
    <AnimatePresence mode="wait" initial={false}>
      <Navbar/>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
  
    </AnimatePresence>
    </>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
