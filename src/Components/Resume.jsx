import React from 'react'
import emoji from "../assets/emoji.png"
import downloadIcon from "../assets/icons8-download-64.png"
import msgIcon from "../assets/msg-icon.png"

function Resume() {
  return (
    <>
    <div className='resume-content-wrapper'>
    <h1>Resume</h1>
    <h1>Interested in working with me?</h1>

    <div className='resume-download-container'>
      
      <img src={emoji} className='emoji-styles'></img>
      <div className='text-container'> 
      <p>If you still have any questions, feel free to contact me. Additionally, you can download my resume below!</p>
      
      <div className='resume-contact-links-container'> 
        <button>
        <img src={downloadIcon} className="download-icon-styles"></img>Download CV</button>
        <button>
          <img src={msgIcon} className='msg-icon-styles'></img>
          Contact Me</button>
      </div>
      
      </div>

    

    </div>


    </div>
    </>
  )
}

export default Resume
