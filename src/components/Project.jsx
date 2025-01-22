import React from "react";
import "../css/project.css";
import lab from "../assets/project/digitalLab.png"
import Faculty from "../assets/project/Faculty.png"
import ganesha from "../assets/project/ganesha.png"
import chatbot from "../assets/project/IRCTC.png"
import book from "../assets/project/receipe.png"
import portfolio from "../assets/project/portfolio.png"
const ProjectCard = ({ title, description, techStack, link, image, details }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-item">
              {tech}
            </span>
          ))}
        </div>
        {/* <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
          View Project
        </a> */}
      </div>
      <div className="project-details">
        <p>{details}</p>
        <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
          Go to Project
        </a>
      </div>
    </div>
  );
};

const ProjectList = () => {
  const projects = [
    {
      title: "My Digital Ganesha",
      description: "A creative digital tribute to Lord Ganesha, blending art and interactivity with web design.",
      techStack: ["HTML", "CSS"],
      link: "https://myganesha.netlify.app/",
      image: ganesha,
      details: "This project offers a visually stunning and responsive experience dedicated to Lord Ganesha. Through dynamic animations and engaging visuals, users can interact with cultural and spiritual elements, making it a perfect blend of tradition and technology."
    },
   
      {
        title: "Recipe Book Explorer",
        description: "A feature-rich platform for discovering, creating, and sharing recipes across cuisines.",
        techStack: ["React","Express","NodeJS","MoogoDB"],
        link: "https://myreceipebook.vercel.app",
        image: book,
        details: "Built to bring food enthusiasts together, this application allows users to upload their own recipes, browse by cuisine, search ingredients, and rate dishes. Integrated advanced features such as real-time updates, a favorites section, and a recommendation engine for personalized recipe suggestions."
      },
      {
        title: "Travel Booking Chatbot",
        description: "An intelligent chatbot tailored to simplify travel planning and provide instant booking assistance.",
        techStack: ["Django", "SQLite", "Python"],
        link: "https://github.com/VinayakR12/Django_ChatBot",
        image: chatbot,
        details: "Developed to offer users a seamless travel planning experience, this chatbot engages in AI-driven conversations to help users select destinations, compare options, book tickets, and receive itinerary updates. It also features personalized travel suggestions and a user-friendly interface for all types of travelers."
      },
      {
        title: "Library Management System",
        description: "A robust system for managing library operations and providing seamless access to resources.",
        techStack: ["HTML", "PHP", "MySQL"],
        link: "",
        image: lab,
        details: "Facilitates the organization of books, user registration, and tracking of issued/returned materials. Key features include an automated overdue alert system, advanced search functionality, and an intuitive dashboard for administrators to manage inventory efficiently. This project optimizes library workflows and enhances the user experience."
      },
      {
        title: "Faculty Course Management System",
        description: "An all-in-one solution for streamlining academic planning and course management tasks.",
        techStack: ["HTML", "PHP", "MySQL"],
        link:"",
        image: Faculty,
        details: "Designed to assist faculty members in creating and managing course syllabi, aligning course outcomes with program outcomes (CO-PO mapping), and storing comprehensive course-related data. The platform simplifies curriculum development and fosters consistency in academic planning."
      },{
      title: "My Portfolio Website",
  description: "A personal portfolio website built with React, Tailwind CSS, and CSS, showcasing my skills, projects, and achievements in software development.",
  techStack: ["React", "Tailwind", "JavaScript"],
  link: "#",
  image: portfolio,
  details: "A responsive, user-friendly portfolio designed with React and Tailwind CSS, presenting my professional skills, key projects, and career milestones. The site is optimized for all devices, making it easy for employers and clients to explore my work and connect."
}
    
    
  ];

  return (
    <div id="Project" className="section1">
      <h1 className="pro1">Projects</h1>
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          link={project.link}
          image={project.image}
          details={project.details}
        />
      ))}
    </div>
    </div>
  );
};

export default ProjectList;
