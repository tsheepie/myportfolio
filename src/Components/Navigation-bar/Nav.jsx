import {useState} from 'react';
import './Nav.css';
import logo from '../../Assets/logo.jpg';

function Nav(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleContactClick = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
            contactSection.scrollIntoView({ behavior: 'smooth' });
        
    };

        const handleAboutClick = (e) => {
            e.preventDefault();
            const contactSection = document.getElementById('about');
                contactSection.scrollIntoView({ behavior: 'smooth' });
            
        };
    
        const handleSkillsClick = (e) => {
            e.preventDefault();
            const contactSection = document.getElementById('skills');
                contactSection.scrollIntoView({ behavior: 'smooth' });
            
        };
    
        const handleWorkClick = (e) => {
            e.preventDefault();
            const contactSection = document.getElementById('work');
                contactSection.scrollIntoView({ behavior: 'smooth' });
            
        };

    return(
        <nav className="navbar" >
            <img src={logo} alt="logo1" className="logo" />
                    <ul className='nav-links'>
                        <li><a href="about" onClick={handleAboutClick}>About</a></li>
                        <li><a href="skills" onClick={handleSkillsClick}>Skills</a></li>
                        <li><a href="work" onClick={handleWorkClick}>Work</a></li>
                        <li><a href="contact" onClick={handleContactClick}>Contact</a></li>    
                    </ul>
                
                    <div className="hamburger-menu">
                        <div className="hamburger-icon" onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    
                    {isOpen && (
                        <ul className="menu-names">
                            <li><a href="about" onClick={(e) => {toggleMenu(); handleAboutClick(e)}}>About</a></li>
                            <li><a href="skills" onClick={(e) => {toggleMenu(); handleSkillsClick(e)}}>Work</a></li>
                            <li><a href="work" onClick={(e) => {toggleMenu(); handleWorkClick(e)}}>Skills</a></li>
                            <li><a href="contact" onClick={(e) => {toggleMenu(); handleContactClick(e)}}>Contact</a></li>
                    </ul>
                    )}
                    </div>
                </nav>
    );
};

export default Nav;