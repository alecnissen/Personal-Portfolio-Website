import React from 'react'
import linkedInImg from "../assets/linkedIn-portfolio.svg"
import githubImg from "../assets/gh-icon-portfolio.svg"
import gmailImg from "../assets/gmail-icon.png"

function Footer() {
  return (
    <>
    <div className='footer-content-wrapper'>
        <div className='contact-links-container'> 
        <a href='https://www.linkedin.com/in/alec-nissen-9562a4b5/'>
        <img src={linkedInImg}></img>
        </a>

        <a href='https://github.com/alecnissen'>
        <img src={githubImg}></img>
        </a>

        <a href='mailto:alecnissen@yahoo.com'>
        <img src={gmailImg}></img>
        </a>

        </div>
        <p>© 2024 Alec Nissen</p>
    </div>
    </>
  )
}

export default Footer
