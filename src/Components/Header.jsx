import React from 'react'
import linkedInImg from "../assets/linkedIn-portfolio.svg"
import githubImg from "../assets/gh-icon-portfolio.svg"

export default function Header() {
  return (
    <> 
    <div className='header-wrapper'> 
    
       
    <div className='logo'>  
        <p>{'<'}</p>
        <p>Alec</p>
        <p>{'/>'}</p>
        
    </div>

    
    <div className='nav-links'> 
    <button>Home</button>
    <button>Skills</button>
    <button>Projects</button>
    <button>Resume</button>
    </div>

    <div className='contact-links'> 
        <a href='https://www.linkedin.com/in/alec-nissen-9562a4b5/'> 
        <img src={linkedInImg}></img>
        </a>


        <a href='https://github.com/alecnissen'> 
        <img src={githubImg}></img>
        </a>

    </div>
    
    </div> 
    </>
  )
}


