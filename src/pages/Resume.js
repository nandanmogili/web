import React, { Component } from "react";
import './Resume.css';

class Timeline extends Component {
  render() {
    return (
      <ul className="timeline">
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">Research Assistant</span>
              <span className="time-wrapper"><span className="time">Dec 2023 - May 2023</span></span>
            </div>
            <div className="desc">
            I was a research assistant at the Molecular Modeling Lab at UNC, where I collaborated with medical students to create machine learning algorithms that accurately predicted molecular binding properties. These algorithms outperformed industry standards in time and cost efficiency, aiding researchers without extensive lab testing.
            </div>
          </div>
        </li>
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">SWE Intern @ NextGen</span>
              <span className="time-wrapper"><span className="time">May 2023 - Present</span></span>
            </div>
            <div className="desc">
              I developed a text embedding chatbot to answer questions about different niche technologies. The chatbot utilized ADA-002 to create embedding values for database and user entry. I then built a similarity algorithm to pull the most closely related information from the database to answer user queries. I integrated the chatbot into a React-Native application and tested it using the Flask Web Framework.
            </div>
          </div>
        </li>
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">CS For Social Good</span>
              <span className="time-wrapper"><span className="time">Aug 2023 - Present</span></span>
            </div>
            <div className="desc">
              I am a web developer of Computer Science for Social Good, which is an organization that partners with non-profits to make a meaningful impact with technical work. We also work alongside students improving their technical skills and offering opportunities for professional development.
            </div>
          </div>
        </li>
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">UNC Chapel Hill</span>
              <span className="time-wrapper"><span className="time">Aug 2022 - Present</span></span>
            </div>
            <div className="desc">
              I am a third-year Computer Science and Economics Bachelor's student at the University of North Carolina at Chapel Hill with a minor in Data Science. I have a 3.74/4.00 GPA.
            </div>
          </div>
        </li>
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">Levine Middle College HS</span>
              <span className="time-wrapper"><span className="time">Aug 2020 - May 2022</span></span>
            </div>
            <div className="desc">
              I graduated high school with over 100 college credits taken through Central Piedmont Community College.
            </div>
          </div>
        </li>
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">Application Development Intern @ Accenture</span>
              <span className="time-wrapper"><span className="time">Aug - May 2020</span></span>
            </div>
            <div className="desc">
            I developed an application to enhance online infrastructure for businesses, boosting sales. We presented our concept to industry professionals and technology consultants. I designed a user-friendly UI for small business owners, utilized consumer data to present demographic insights, and provided pre-built infrastructure and shipping systems for a seamless transition to e-commerce.
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-header">Resume</h1>
      <h2 className="resume-subheader">More of my credentials.</h2>
      <Timeline />
    </div>
  );
}

export default Resume;
