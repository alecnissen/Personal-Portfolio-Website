import React, { useState, useEffect, useRef } from 'react';
// import fashionGemsDemo from "../assets/fashion-gems-site-demo.png"
import memoryCardDemo from '../assets/memory-card-cropped-2.png';
import fashionGemsDemo from '../assets/tablet-view.png';
import cvAppDemo from '../assets/cv-app-4.png';
import todoListDemo from '../assets/todo-demo.png';
import battleshipDemo from '../assets/battleship-demo.png';
import vaultBjjDemo from '../assets/vault-bjj-demo-3.png';
import HoverClassProjectCards from './HoverClassProjectCards';
import '../Styles/projects_section_styles.scss';
import vaultBjjDemo2 from '../assets/vault-preview-2.png';

function Projects() {
  const [show, setShow] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    // const options = {
    //   root: null,
    //   rootMargin: '0px',
    //   threshold: 0.5, // Trigger when 50% of the projects container is visible
    // };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect(); // Disconnect the observer once triggered
        }
      });
    });

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="projects-section-wrapper">
        <h1 id="projects-section">Projects</h1>
        <p>
          Welcome to the projects section! Here you find some of my projects that highlight my ability as a front end
          developer. Here you can see my progress, all the trial and error, and hands on learning that took place on
          each of these projects!
        </p>

        <div className="projects-container" ref={projectsRef}>
          <div className={`shopping-cart-container ${show ? 'focused' : ''}`}>
            {/* <h3>FashionGems Store</h3> */}
            <div className="modal-content">
              <h3>FashionGems Store</h3>
              <h3>Mobile Responsive</h3>

              <a href="https://github.com/alecnissen/Shopping-Cart">
                <button>Code</button>
              </a>

              <a href="https://fashiongems.netlify.app">
                <button>Live</button>
              </a>
            </div>

            <img src={fashionGemsDemo} className="fashion-gems-demo-styles"></img>
          </div>

          {/* <div className={`vault-bjj-container ${show ? 'focused' : ''}`}> 
        
        <div className='modal-content-vault-bjj'>

        <h3>Vault Jiu Jitsu</h3>

        <button>Code</button>
        <button>Live</button>

        </div>
        <img src={vaultBjjDemo} className='vault-bjj-demo-styles'></img>
        </div> */}

          <div className={`cv-app-container ${show ? 'focused' : ''}`}>
            <div className="modal-content-cv-app">
              <h3>Vault Jiu Jitsu</h3>
              <h3>Mobile Responsive</h3>

              <a href="https://github.com/alecnissen/vault-bjj">
                <button>Code</button>
              </a>
              <a href="https://vaultbjj.netlify.app">
                <button>Live</button>
              </a>
            </div>
            <img src={vaultBjjDemo2} className="cv-app-demo-styles"></img>
          </div>

          <div className={`memory-card-container ${show ? 'focused' : ''}`}>
            {/* <h3>Memory Card Game</h3> */}
            <div className="modal-content-memory-card">
              <h3>Memory Card Game</h3>
              <h3>Mobile Responsive</h3>

              <a href="https://github.com/alecnissen/Memory-Card">
                <button>Code</button>
              </a>
              <a href="https://memory-card-game-top.netlify.app/">
                <button>Live</button>
              </a>
            </div>

            <img src={memoryCardDemo} className="memory-card-demo-styles"></img>
          </div>

          <div className={`cv-app-container ${show ? 'focused' : ''}`}>
            {/* <h3>CV/Resume Generator</h3> */}
            <div className="modal-content-cv-app">
              <h3>CV App</h3>
              <h3>Best viewed on desktop</h3>

              <a href="https://github.com/alecnissen/CV-App">
                <button>Code</button>
              </a>

              <a href="https://cv-resume-generator-top.netlify.app/">
                <button>Live</button>
              </a>
            </div>
            <img src={cvAppDemo} className="cv-app-demo-styles"></img>
          </div>

          <div className={`cv-app-container ${show ? 'focused' : ''}`}>
            {/* <h3>CV/Resume Generator</h3> */}
            <div className="modal-content-cv-app">
              <h3>Todo List</h3>
              <h3>Mobile Responsive</h3>
              <a href="https://github.com/alecnissen/to-do-list-A">
                <button>Code</button>
              </a>
              <a href="https://alecnissen.github.io/to-do-list-A/">
                <button>Live</button>
              </a>
            </div>
            <img src={todoListDemo} className="cv-app-demo-styles"></img>
          </div>

          <div className={`cv-app-container ${show ? 'focused' : ''}`}>
            <div className="modal-content-cv-app">
              <h3>Battleship</h3>
              <h3>Best viewed on desktop</h3>
              <a href="https://github.com/alecnissen/Battleship">
                <button>Code</button>
              </a>

              <a href="https://alecnissen.github.io/Battleship/">
                <button>Live</button>
              </a>
            </div>
            <img src={battleshipDemo} className="cv-app-demo-styles"></img>
          </div>

          {/* <div className={`cv-app-container ${show ? 'focused' : ''}`}> 
        
        <div className='modal-content-cv-app'>

        <h3>CV/Resume Generator</h3>

        <button>Code</button>
        <button>Live</button>

        </div>
        <img src={vaultBjjDemo} className='cv-app-demo-styles'></img>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default Projects;
