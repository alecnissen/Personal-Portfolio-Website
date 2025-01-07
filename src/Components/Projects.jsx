import React, { useState, useEffect, useRef } from 'react';
import fashionGemsDemo from '../assets/tablet-view.png';
import '../Styles/projects_section_styles.scss';
import vaultBjjDemo2 from '../assets/vault-preview-2.png';
import ppsDemo from '../assets/pps-demo-portfolio.png';
import fileUploaderDemo from '../assets/File-Uploader-Project-Breakdown.mp4';
import fileUploaderThumbnail from '../assets/File-Upload-Breakdown-Thumbnail.png';
import fileUploaderImg from '../assets/File-Uploader-TN.png';

function Projects() {
  const [show, setShow] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
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

              <div className="modal-content-link-container">
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

              <div className="modal-content-link-container">
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
            <div className="modal-content">
              <h3>FashionGems Store</h3>
              <h3>Mobile Responsive</h3>

              <div className="modal-content-link-container">
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



         

            {/* <video src={fileUploaderDemo} className="fashion-gems-demo-styles" controls poster={fileUploaderThumbnail}>
              <source src="movie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}


        <div className={`shopping-cart-container ${show ? 'focused' : ''}`}>
            <div className="modal-content">
              <h3>File Uploader</h3>
              <h3>Not Mobile Responsive</h3>
              <h3>View a demo recording by clicking the button below</h3>

              <div className="modal-content-link-container">
                <a href="https://github.com/alecnissen/File-Uploader-2" target="_blank">
                  <button>Code</button>
                </a>

                
              </div>
            </div>

            <img src={fileUploaderImg} className="fashion-gems-demo-styles" id="file-uploader-img-styles"></img>
          </div>
       




        </div>
      </div>
    </>
  );
}

export default Projects;
