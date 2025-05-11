
import './cover.css';
import pfp from '../../Assets/pfp.jpg';
import CV from '../../Assets/CV.pdf';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

function Cover() {
    
    const handleContactClick = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
            contactSection.scrollIntoView({ behavior: 'smooth' });
        
    };

    return(
        <div>
            <div className='cover-header'>
            <img src={pfp} alt='pfp2' className='pfp'/> 
                <div className='content'>
                        <p className='tagline'>Hello there🌺 </p>
                        <h1>Welcome To My Awesome Portfolio</h1>
                        <h2>Ntshepeng Makua</h2>
                        <p className='role'>Front-End Developer</p>
                
                    <div className='buttons'>
                        <a href={CV} target="_blank" rel="noopener noreferrer">
                        <button className='button'>Download CV</button>
                        </a>
                        <a href="#contact" onClick={handleContactClick}>
                        <button className='button'>Contact</button>
                        </a>
                    </div>
            
                    <div className='socials'>
                        <a href = 'https://github.com/tsheepie' target='_blank' rel= 'noopener noreferrer'>
                        <FaGithub size={40} />
                        </a>
                        <a href='https://www.linkedin.com/in/tshepi-makua-1a1b43205/' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedinIn size={40} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover;