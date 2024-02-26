import React, { useState } from 'react'
// import fashionGemsDemo from "../assets/fashion-gems-site-demo.png"
import memoryCardDemo from "../assets/memory-card-cropped-2.png"
import fashionGemsDemo from "../assets/tablet-view.png"
import cvAppDemo from "../assets/cv-app-4.png"
import HoverClassProjectCards from './HoverClassProjectCards';


function Projects() {

  const [show, setShow] = useState(false);



  return (
    <>
    <div className='projects-section-wrapper'>
        <h1>Projects</h1>
        <p>Welcome to the projects section! Here you find some of my projects that highlight my ability as a front end developer.
        Here you can see my progress, all the trial and error, and hands on learning that took place on each of these Projects! 
        </p>

    <div className='projects-container'> 
        <div className='shopping-cart-container'> 
        {/* <h3>FashionGems Store</h3> */}
      <div className='modal-content'>

        <h3>FashionGems Store</h3>

        <button>Code</button>
        <button>Live</button>

      </div>



        <img src={fashionGemsDemo} className='fashion-gems-demo-styles'
        
        ></img>

        </div>

        <div className='memory-card-container'> 
        <h3>Memory Card Game</h3>
        <img src={memoryCardDemo} className='memory-card-demo-styles'></img>
        </div>

        <div className='cv-app-container'> 
        <h3>CV/Resume Generator</h3>
        <img src={cvAppDemo}></img>
        </div>

    </div>

    </div>
    </>
  )
}

export default Projects
