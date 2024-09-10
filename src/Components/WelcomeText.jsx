import React, { useState, useEffect } from 'react';

function WelcomeText() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = 'Hello! My name is Alec and I am a Frontend Developer!';

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText((prevText) => prevText + fullText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <main id="home-section">
        <div className="welcome-title-container">
          <div className="welcome-portfolio-title-text">
            <h3>Welcome to my Portfolio</h3>
          </div>

          <div className="name-title-container">
            <h1>{displayedText}</h1>
            <p id="skills-section">
              Welcome to my site! My passion is to build amazing user interfaces. Here you can find my projects which
              showcase my ability!
            </p>
          </div>
        </div>

        <div className="circles-container">
          <div className="circles">
            <div></div>
            <div></div>
            <div></div>
            <span></span>
          </div>
        </div>
      </main>
    </>
  );
}

export default WelcomeText;
