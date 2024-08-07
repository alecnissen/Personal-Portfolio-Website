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
import ppsDemo from '../assets/pps-demo-portfolio.png'

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
          <div className={`memory-card-container ${show ? 'focused' : ''}`}>
            <div className="modal-content-memory-card">
              <h3>Precision Pest Control Demo Site</h3>
              <h3>Mobile Responsive</h3>


              <div className='modal-content-link-container'>
              <a href="https://github.com/alecnissen/Precision-Pest-Control" target="_blank">
                <button>Code</button>
              </a>
              <a href="https://precisionpestcontrol.netlify.app/" target="_blank">
                <button>Live</button>
              </a>
              </div>



            </div>

            <img src={ppsDemo} className="memory-card-demo-styles"></img>
          </div>

   

          <div className={`cv-app-container ${show ? 'focused' : ''}`}>
            <div className="modal-content-cv-app">
              <h3>Vault Jiu Jitsu</h3>
              <h3>Mobile Responsive</h3>


              <div className='modal-content-link-container'>
              <a href="https://github.com/alecnissen/vault-bjj" target="_blank">
                <button>Code</button>
              </a>
              <a href="https://vaultbjj.netlify.app" target="_blank">
                <button>Live</button>
              </a>
              </div>


            </div>
            <img src={vaultBjjDemo2} className="cv-app-demo-styles"></img>
          </div>



          <div className={`shopping-cart-container ${show ? 'focused' : ''}`}>
            {/* <h3>FashionGems Store</h3> */}
            <div className="modal-content">
              <h3>FashionGems Store</h3>
              <h3>Mobile Responsive</h3>


              <div className='modal-content-link-container'>
              <a href="https://github.com/alecnissen/Shopping-Cart" target="_blank">
                <button>Code</button>
              </a>

              <a href="https://fashiongems.netlify.app" target="_blank">
                <button>Live</button>
              </a>
              </div>

            </div>

            <img src={fashionGemsDemo} className="fashion-gems-demo-styles"></img>
          </div>




        </div>
      </div>
    </>
  );
}

export default Projects;
