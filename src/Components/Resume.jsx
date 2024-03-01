import React from 'react'
import emoji from "../assets/emoji.png"
import downloadIcon from "../assets/icons8-download-64.png"
import msgIcon from "../assets/msg-icon.png"
import { useRef, useEffect, useState } from 'react'

function Resume() {

  const resumeContainer = useRef(null);
  const [show, setShow] = useState(false);


  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
    }, options);
  
    if (resumeContainer.current) {
      observer.observe(resumeContainer.current);
    }
  
    return () => {
      if (resumeContainer.current) {
        observer.unobserve(resumeContainer.current);
      }
    };
  }, []);

  return (
    <>
    {/* <div className={`resume-content-wrapper ${show} ? 'focused' : ''}`} ref={resumeContainer}> */}
    <div className={`resume-content-wrapper ${show ? 'focused' : ''}`} ref={resumeContainer}>
    <h1 id='resume-section'>Resume</h1>
    <h1>Interested in working with me?</h1>
    {/* <div className={`resume-download-container ${show ? 'focused' : ''}`} ref={resumeContainer}> */}

    <div className={'resume-download-container'}>
      
      <img src={emoji} className='emoji-styles'></img>
      <div className='text-container'> 
      <p>If you still have any questions, feel free to contact me. Additionally, you can download my resume below!</p>
      
      <div className='resume-contact-links-container'> 
          <a href='../assets/mock-resume-portfolio.png.docx' download={true}>
        <button>
        <img src={downloadIcon} className="download-icon-styles"></img>
        Download CV
        </button>
        </a>
        <a href='https://www.linkedin.com/in/alec-nissen-9562a4b5/'>
        <button>
          <img src={msgIcon} className='msg-icon-styles'></img>
          Contact Me
        </button>
        </a>


      </div>
      
      </div>

    

    </div>


    </div>
    </>
  )
}

export default Resume
