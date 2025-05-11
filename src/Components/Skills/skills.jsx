import '../Skills/skills.css';
import { FaReact, FaJava, FaPython, FaCss3Alt, FaHtml5, FaGitAlt, FaNodeJs, FaBrain, FaProjectDiagram, FaCode } from 'react-icons/fa';
import { SiDotnet, SiJavascript, SiPostgresql, SiApachenetbeanside, SiApachetomcat, SiIntellijidea, SiPycharm, SiSqlite, } from 'react-icons/si';
import { DiVisualstudio } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { MdSecurity, MdArchitecture } from "react-icons/md";

const skillCategories = [
    {
        title: "Programming",
        skills: [
            { name: "C#", icon: <SiDotnet />, color: "#512BD4" },
            { name: "Java", icon: <FaJava />, color: "#ED8B00" },
            { name: "Python", icon: <FaPython />, color: "#306998" },
            { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
            { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
            { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
            { name: "React", icon: <FaReact />, color: "#61DAFB" },
            { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
            { name: "OOP", icon: <FaBrain />, color: "#FF6B6B" },
        ]
    },
    {
        title: "Databases & Tools",
        skills: [
            { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
            { name: "SQL Server", icon: <SiSqlite />, color: "#003B57" },
            { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
            { name: "VS Code", icon: <DiVisualstudio />, color: "#007ACC" },
            { name: "IntelliJ IDEA", icon: <SiIntellijidea />, color: "#000000" },
            { name: "NetBeans", icon: <SiApachenetbeanside />, color: "#1B6AC6" },
            { name: "PyCharm", icon: <SiPycharm />, color: "#21D789" },
        ]
    },
    {
        title: "Development & Methodology",
        skills: [
            { name: "SDLC", icon: <FaProjectDiagram />, color: "#6C63FF" },
            { name: "RESTful API", icon: <TbApi />, color: "#FF9900" },
            { name: "CI/CD", icon: <FaCode />, color: "#4CAF50" },
        ]
    },
    {
        title: "Architecture & Security",
        skills: [
            { name: "Design Patterns", icon: <MdArchitecture />, color: "#9C27B0" },
            { name: "Security Principles", icon: <MdSecurity />, color: "#F44336" },
            { name: "Apache Tomcat", icon: <SiApachetomcat />, color: "#F8DC75" }
        ]
    }
];

function Skills() {
    return (
        <section className="skills-section" id="skills">
            <div className="skills-container">
                <div className="skills-header">
                    <h1>My Skills</h1>
                    <p>A comprehensive overview of my technical expertise and proficiencies</p>
                </div>
                
                <div className="skills-content">
                    {skillCategories.map((category, categoryIndex) => (
                        <div className="skill-category" key={categoryIndex}>
                            <h2>{category.title}</h2>
                            <div className="skills-grid">
                                {category.skills.map((skill, skillIndex) => (
                                    <div className="skill-card" key={skillIndex}>
                                        <div className="skill-icon" style={{ backgroundColor: `${skill.color}15`, color: skill.color }}>
                                            {skill.icon}
                                        </div>
                                        <h3>{skill.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="skills-footer">
                    <p>Continuously learning and expanding my skill set in modern technologies</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;