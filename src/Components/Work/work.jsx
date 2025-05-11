import { useState } from 'react';
import '../Work/work.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import recipe from '../../Assets/recipe.jpg';

function Work() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  
  const projects = [
    {
      id: 1,
      title: "Recipe Finder Website",
      description: "An interactive recipe platform where users can search through a database of recipes, view detailed preparation steps, and print recipes for offline use. Features a responsive design and intuitive search functionality.",
      image: {recipe}, 
      category: "javascript",
      technologies: ["JavaScript", "HTML", "CSS", "API Integration"],
      githubLink: "https://github.com/tsheepie/Recipe-Website",
     },
    {
      id: 2,
      title: "Lecture-Student System",
      description: "A comprehensive academic management system built with Python that allows separate login portals for students and lecturers. Students can view course materials and grades, while lecturers can manage classes, assignments, and student records.",
      image: "/api/placeholder/600/350", 
      category: "python",
      technologies: ["Python", "PyCharm", "Database Management", "UI Design"],
      githubLink: "https://github.com/tsheepie/Lecture-Student-System",
    },
    {
      id: 3,
      title: "Car Rental Advertisement Prototype",
      description: "A visually engaging single-page prototype for a car rental service with interactive elements. Features hover effects on the navigation bar and sleek design elements that showcase UI/UX capabilities.",
      image: "/api/placeholder/600/350", 
      category: "design",
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
      githubLink: "https://github.com/tsheepie/car-rental-ad-prototype",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing my skills, projects, and professional background. Built with React and featuring responsive design for optimal viewing across all devices.",
      image: "/api/placeholder/600/350",
      category: "react",
      technologies: ["React", "CSS", "Responsive Design"],
      githubLink: "https://github.com/tsheepie/portfolio",
    },
    {
      id: 5,
      title: "Hackathon Project",
      description: "Took part in a hackerthon known as 'Hack The Waste' for Frost Plus. To demonstrate the ability to deliver innovative solutions under tight deadlines in a collaborative environment.",
      image: "",
      category: "achievement",
      technologies: ["Team Collaboration", "Rapid Development", "Problem Solving"],
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "react", name: "React" },
    { id: "javascript", name: "JavaScript" },
    { id: "python", name: "Python" },
    { id: "design", name: "Design" },
    { id: "achievement", name: "Achievements" }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

    const handleContactClick = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
            contactSection.scrollIntoView({ behavior: 'smooth' });
        
    };

  return (
    <div className="work-container" id='work'>
      <div className="work-header">
        <h1>My Work</h1>
        <p>A showcase of my projects and achievements that highlight my skills and expertise in software development.</p>
      </div>

      <div className="filter-tabs">
        {categories.map(category => (
          <button 
            key={category.id}
            className={`filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <div className="project-links">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="work-cta">
        <h2>Interested in working with me?</h2>
        <p>I'm always open to discussing new projects and opportunities.</p>
        <a href="contact" className="contact-btn" onClick={handleContactClick}>Get in Touch</a>
      </div>
    </div>
  );
}

export default Work;