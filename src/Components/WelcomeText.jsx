import React from 'react'
import laptopImg from "../assets/laptop.png";

function WelcomeText() {
  return (
    <> 
   <main> 
    <div className='welcome-title-container'> 
        <div className='welcome-portfolio-title-text'> 
        <h3>Welcome to my Portfolio</h3>
        </div>

        <div className='name-title-container'> 
        <h1>Hello! My name is Alec and I am a Frontend Developer!</h1>
        <p>Welcome to my site! My passion is to build amazing user interfaces. Here you can find my projects which showcase my ability!</p>
        </div>



    </div>

    <div className='circles-container'> 
    <div className='circles'> 
        <div></div>
        <div></div>
        <div></div>
        <span></span>
    </div>
    </div>
    
        {/* <img src={laptopImg}></img> */}
   </main>
   </>
  )
}

export default WelcomeText
