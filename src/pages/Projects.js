import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Akari Logic Puzzle Game',
      duration: 'Dec 2023 - May 2023',
      description: 'Created an interactive Puzzle game that involves players illuminating a grid by placing light bulbs without placing them in prohibited positions using Java.',
      link: 'https://github.com/COMP301S24/a09-akari-nandanmogili'
    },
    {
      title: 'Human Demographic Data Analysis',
      duration: 'Aug 2023 - Dec 2023',
      description: 'Time series analysis of US Census Data with R (tidyverse, dpylr, ggplot) for data wrangling, Tableau for visualization, and Excel for analysis to determine allocation of funds and resources.',
      link: 'https://github.com/nandanmogili/CDC2023'
    },
    {
      title: 'Embedding Chatbot',
      duration: 'May 2023 - Present',
      description: 'Developed and trained an AI-based chatbot capable of accurately addressing queries with an ADA-002 embedding model for the efficient comparison and retrieval of relevant information.',
      link: 'https://github.com/ShashwathNextgen/Skibi-Chatbot'
    },
    {
      title: 'SALSA Molecular Binding Program',
      duration: 'Aug 2023 - May 2024',
      description: 'Helped write and implement machine learning algorithms to more efficiently determine predictions of molecular properties.',
      link: 'https://github.com/marbl/SALSA'
    },
    {
      title: 'My Website',
      duration: 'May 2024 - Present',
      description: 'This website, showcasing my projects and experiences.',
      link: 'https://github.com/nandanmogili/web'
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-header">Projects</h1>
      <h2 className="projects-subheader">Check out what I've worked on.</h2>
      <div className="projects-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-duration">{project.duration}</p>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
