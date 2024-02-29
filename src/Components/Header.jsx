import React from 'react'
import linkedInImg from "../assets/linked-in-icon-white.png"
import githubImg from "../assets/gh-colored-icon.png"

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
    <a href="#resume-section">
    <button>Resume

    </button>
    </a>
    </div>

    <div className='contact-links'> 
        <a href='https://www.linkedin.com/in/alec-nissen-9562a4b5/'> 
        {/* <img src={linkedInImg}></img> */}
        {/* <i className="devicon-linkedin-plain"></i> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
        </a>


        <a href='https://github.com/alecnissen'> 
        <img src={githubImg} className='gh-icon-header-colored'></img>
        
        
          
        </a>

    </div>
    
    </div> 
    </>
  )
}


