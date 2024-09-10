import React from 'react';
import linkedInImg from '../assets/linkedIn-portfolio.svg';
import githubImg from '../assets/github-142-svgrepo-com.svg';
import gmailImg from '../assets/gmail-svgrepo-com.svg';
import { useRef, useEffect, useState } from 'react';

function Footer() {
  const footerContainer = useRef(null);
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

    if (footerContainer.current) {
      observer.observe(footerContainer.current);
    }

    return () => {
      if (footerContainer.current) {
        observer.unobserve(footerContainer.current);
      }
    };
  }, []);

  return (
    <>
      <div className={`footer-content-wrapper ${show ? 'focused' : ''}`} ref={footerContainer}>
        <div className="contact-links-container">
          <a href="https://www.linkedin.com/in/alec-nissen-9562a4b5/" target="_blank">
            <img src={linkedInImg}></img>
          </a>

          <a href="https://github.com/alecnissen" target="_blank">
            <img src={githubImg}></img>
          </a>

          <a href="mailto:alecnissen@yahoo.com" target="_blank">
            <img src={gmailImg}></img>
          </a>
        </div>
        <p>© 2024 Alec Nissen</p>
      </div>
    </>
  );
}

export default Footer;
