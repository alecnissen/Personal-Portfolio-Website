import React, { useState, useEffect }  from 'react'
import laptopImg from "../assets/laptop.png";

function WelcomeText() {

  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0); // Add a state variable for current index

  const fullText = "Hello! My name is Alec and I am a Frontend Developer!";

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1); // Increment current index
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed as needed

    return () => clearInterval(interval);
  }, [currentIndex]); // Re-run effect whenever currentIndex changes

  return (
    <> 
   <main> 
    <div className='welcome-title-container'> 
        <div className='welcome-portfolio-title-text'> 
        <h3>Welcome to my Portfolio</h3>
        </div>

        <div className='name-title-container'> 
        {/* <h1>Hello! My name is Alec and I am a Frontend Developer!</h1> */}
        <h1>{displayedText}</h1>
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
