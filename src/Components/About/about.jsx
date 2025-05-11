import './about.css';
import grad from '../../Assets/Graduation.jpg';
import ab from '../../Assets/about-me.png';

function About() {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-header">
                    <img src={ab} alt="About Me" className="about-title-image" />
                </div>
                
                <div className="about-main">
                    <div className="about-intro">
                        <div className="about-bio">
                            <p>Hello, my name is Ntshepeng Makua (Tshepi for short), I am a software developer completing my Information Technology diploma at Belgium Campus iTversity with specialisation in Programming and Web Development. My journey began in finance with a Bachelor of Commerce in Finance & Accounting, before discovering my passion for creating digital solutions.</p>
                        </div>
                        <div className="about-image-container">
                            <img src={grad} alt="Graduation" className="about-image" />
                        </div>
                    </div>
                    
                    <div className="about-cards">
                        <div className="about-card" data-aos="fade-up" data-aos-delay="100">
                            <h2>Bridging Two Worlds</h2>
                            <div className="card-content">
                                <p>My background offers a distinctive advantage in tech as I bring financial acumen to software development; allowing me to create solutions that address both technical requirements and business objectives. This cross-disciplinary perspective has proven valuable in academic projects and collaborative environments.</p>
                            </div>
                        </div>
                        
                        <div className="about-card" data-aos="fade-up" data-aos-delay="200">
                            <h2>Professional Interests</h2>
                            <div className="card-content">
                                <p>I'm particularly passionate about front-end development, where I can leverage my creativity to build engaging user interfaces using technologies like React and JavaScript. While my education has equipped me with full-stack capabilities, I thrive in crafting visually appealing, responsive experiences that connect users with technology in intuitive ways. Building user-centered applications that solve meaningful problems is where I find the greatest satisfaction in my work.</p>
                            </div>
                        </div>

                        <div className="about-card" data-aos="fade-up" data-aos-delay="300">
                            <h2>Beyond the Screen</h2>
                            <div className="card-content">
                                <p>When the code editor is closed, I explore my creativity in the kitchen and invest time with family and friends. These pursuits provide balance and fresh perspectives that enhance my problem-solving approach in development.</p>
                            </div>
                        </div>

                        <div className="about-card" data-aos="fade-up" data-aos-delay="400">
                            <h2>Looking Forward</h2>
                            <div className="card-content">
                                <p>As I prepare to launch my professional career in tech, I'm excited to join a team where I can apply my skills to create impactful digital experiences. I'm looking for an environment that values fresh perspectives and provides opportunities for growth and mentorship. My goal is to work with companies that embrace creativity and innovation, where I can contribute my unique blend of financial understanding and technical capabilities to projects that matter.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;