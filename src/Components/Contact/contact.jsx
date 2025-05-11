import { useState } from 'react';
import styles from '../Contact/contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.'
    });
    
   
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
  
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  const copyEmailToClipboard = () => {
  navigator.clipboard.writeText("makuatshepi10@gmail.com");
  alert("Email copied to clipboard!");
};

  return (
    <div className="contact-container" id='contact'>
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>I'm open to opportunities and would love to hear from you. Feel free to reach out!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Location</h3>
            <p>Pretoria, South Africa</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>
                <a href="makuatshepi10@gmail.com">makuatshepi10@gmail.com</a>
                <button 
                    onClick={copyEmailToClipboard}
                    className='copy-btn'
                    title='Copy email to clipboard'
                >Copy</button>
            
            </p>

          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>
            <h3>Phone</h3>
            <p><a href="tel:+27658952325">+27 65 895 2325</a></p>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/tshepi-makua-1a1b43205/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/tsheepie" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Me a Message</h2>
          {formStatus.submitted && (
            <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
              {formStatus.message}
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                required 
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      <div className="availability-section">
        <h2>My Availability</h2>
        <p>I'm currently available for <span className="highlight">full-time positions</span> or <span className="highlight">freelance work</span>. Let's create something amazing together!</p>
      </div>
    </div>
  );
}

export default Contact;

