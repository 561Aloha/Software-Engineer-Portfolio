
import ReactDOM from 'react-dom/client';
import {useRoutes, useNavigate, useLocation, Link} from 'react-router-dom';
import About from './About.jsx';
import './App.css';
import github from './assets/github-b.png';
import instagram from './assets/instagram-b.png';
import linkedin from './assets/linkedin-b.png';
import aiImage from './assets/ai-image.png';
import enurse from './assets/enurse.png';
import crypto from './assets/crypto.png';
import nature from './assets/nature.png';
import habittrack from './assets/habittrack.png';
import close from './assets/x.png';
import NotFound from './notfound.jsx';
import Projects from './projects.jsx';
import UXDesign from './uxdesign.jsx';
import Contact from "./contact.jsx";
import React, { useState,useEffect} from "react";
import hamburger from "./assets/hamburger.png";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const navigateToContact = () => {
    navigate('/#contact');
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className="navbar">
      {/* Regular Menu */}
    <div className="log-h2-combo">
      <div className="logo-box"></div>
      <h2>Made By Dianna</h2>
    </div>
         <div className="menu-items">
        <Link to="/">Home</Link>
        <Link to="/projects">Software Projects</Link>
        <Link to="/uxdesign">UX Projects</Link>
        <button onClick={() => navigateToContact()}>Contact</button>

      </div>

      {/* Hamburger menu for small screens initally hidden*/}
      <div className="hamburger-container" onClick={() => setMenuOpen(true)}>
          <img src={hamburger} alt="menu" className="hamburger" />
          <h4>Menu</h4>
      </div>

      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <div className={`menu-overlay ${menuOpen ? 'menu-animate' : ''}`}>
        <img
          className='img-close'
          src={close}
          alt="close"
          onClick={() => setMenuOpen(false)} // Ensures menu closes when the icon is clicked
        />
          <ul>
            <li><Link to="/" onClick={toggleMenu}> About Me </Link> </li>
            <li><Link to="/projects" onClick={toggleMenu}> Projects  </Link></li>
            <li><Link to="/uxdesign" onClick={toggleMenu}>UX Design Projects</Link> </li>
            <li><a onClick={() => { scrollToContact(); toggleMenu(); }}>Contact</a></li>
            <div className="icon-barr">
              <Link to ="https://www.github.com/561Aloha"><img src={github} alt="github" /></Link>
              <Link to ="https://www.linkedin.com/in/DiannaD"> <img src={linkedin} alt="linkedin" /></Link>
              <Link to ="https://www.instagram.com/madebydianna"><img src={instagram} alt="instagram" /></Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#contact') {
      const section = document.getElementById('contact-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]); 

  return (
    <>
      <NavBar />
      <div className="header">
        <div className="header-box">
          <div className="header-left">
          <img src={aiImage} alt="AI avatar" className="ai-image" />
            <h2 className='myname'>Dianna Dimambro</h2>
            <hr></hr>
            <h3 >UX Designer and Developer</h3>
            <div className="icon-bar">
              <Link to ="https://www.github.com/561Aloha"><img src={github} alt="github" /></Link>
              <Link to ="https://www.linkedin.com/in/DiannaD"><img src={linkedin} alt="linkedin" /></Link>
              <Link to ="https://www.instagram.com/madebydianna"><img src={instagram} alt="instagram" /></Link>
            </div>
          </div>
          <div className="header-right">
            <h1>Hello!</h1>
            <h2>Welcome to my UX Engineering Portfolio </h2>
            <div className="button-group">
  {/* External Link */}
  <a href="https://www.github.com/561Aloha" target="_blank" rel="noopener noreferrer">
    <button>View Github</button>
  </a>

  {/* Internal Link */}
  <Link to="/projects">
    <button>View Projects</button>
  </Link>
</div>

            <p>
              I am a recent college graduate with my computer science degree and working with clients in web development<br />
              <br />
              <strong>Made by Dianna</strong> showcases my projects in software engineering and ux design. I am available to hire.
            </p>
          </div>
        </div>
        <div className="dynamic-section">
          <h1>My Past Work</h1>
          <div className="box-container">
            <div className="box">
              <img src={nature} alt="Nature" />
              <Link to="/uxdesign">
                <button>Learn More</button>
              </Link>
            </div>
            <div className="box">
              <img src={crypto} alt="Crypto" />
              <Link to ="https://github.com/561Aloha/CryptoHustle">
                <button>Learn More</button>
              </Link>
            </div>
            <div className="box">
              <img src={enurse} alt="E-Nurse" />
              <Link to="https://github.com/561Aloha/Nurse-Management">
                <button>Learn More</button>
              </Link>
            </div>
            <div className="box">
              <img src={habittrack} alt="Habit Tracker" />
              <Link to="https://github.com/561Aloha/Habit-Tracker">
                <button>Learn More</button>
              </Link>
            </div>
          </div>
          {/* <Experience/> */}
        </div> 
        <div id="contact-section">
        <Contact/></div>
      </div>
    </>
  );
}

function App() {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/not-found", element: <NotFound /> },
    { path: "/about-us", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/projects", element: <Projects /> },
    { path: "/uxdesign", element: <UXDesign /> },
    { path: "/crypto", element: <div>Crypto Project Page</div> },
    { path: "/enurse", element: <div>E-Nurse Project Page</div> },
    { path: "/habit-tracker", element: <div>Habit Tracker Project Page</div> },
  ]);

  return <main>{element}</main>;
}

export default App;