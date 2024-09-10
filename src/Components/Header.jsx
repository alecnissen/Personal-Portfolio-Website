import React from 'react';

import linkedInImg from '../assets/linkedIn-portfolio.svg';

import githubImg from '../assets/github-142-svgrepo-com.svg';

export default function Header() {
  return (
    <>
      <div className="header-wrapper">
        <div className="logo">
          <p>{'<'}</p>
          <p>Alec</p>
          <p>{'/>'}</p>
        </div>

        <div className="nav-links">
          <a href="#home-section">
            <button>Home</button>
          </a>
          <a href="#skills-section">
            <button>Skills</button>
          </a>
          <a href="#projects-section">
            <button>Projects</button>
          </a>
          <a href="#resume-section">
            <button>Contact</button>
          </a>
        </div>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/alec-nissen-9562a4b5/" target="_blank">
            <img src={linkedInImg}></img>
          </a>

          <a href="https://github.com/alecnissen" target="_blank">
            <img src={githubImg} className="gh-icon-header-colored"></img>
          </a>
        </div>
      </div>
    </>
  );
}
