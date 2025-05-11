import React from 'react';
import '../Footer/footer.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <h3>Ntshepeng Makua</h3>
            <p>Front-End Developer based in South Africa</p>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com/tsheepie" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/tshepi-makua-1a1b43205/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FaLinkedinIn />
            </a>
            <a href="https://makuatshepi10@gmail.com" className="footer-social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Ntshepeng Makua. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;