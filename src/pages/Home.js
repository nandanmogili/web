import React from 'react';
import './Home.css';
import SocialIcons from '../components/SocialIcons';

function Home() {
  return (
    <div className="home">
      <div className="header-container reset-gradient">
        <h1>Nandan Mogili</h1>
        <p className="subtitle">Student. Software Engineer. Researcher.</p>
        <SocialIcons />
      </div>
      <div className="content">
        <div className="intro-headings">
          <h2 className="about-heading">About</h2>
          <h3 className="intro-heading">Let me introduce myself.</h3>
        </div>
        <div className="introduction-and-pic">
          <div className="introduction">
            <p>
              Hello! My name is Nandan Mogili, and let me tell you the story of how I discovered my interest in Software Engineering.
            </p>
            <p>
              From a young age, I was captivated by the logic behind solving problems, whether it was figuring out a Rubik's cube or developing strategies for chess. This fascination with finding solutions sparked a simple curiosity that quickly evolved into a passion. My journey toward software engineering began with my interest in technology during my school years. Encouraged by my father, I started learning programming languages, beginning with Python. My first program, a simple “Hello World,” marked the start of an exciting path. From there, I delved into iterating through various data structures and mastering recursive techniques. Throughout high school, I intentionally selected courses that taught Java and C++ further deepening my understanding of programming. But these classes weren't what convinced me that I would want to do this for the rest of my life. The turning point in my journey came the summer before my junior year when I secured an internship at Accenture. During my internship, I worked on creating application solutions for small businesses impacted by the pandemic. This project challenged me to grasp complex concepts and implement effective solutions, offering me a profound insight into how technology can significantly enhance people's lives. This project made me realize how I could utilize technology to impact the world around me. I continued my higher education at the University of North Carolina at Chapel Hill, with a burning passion to improve my programming skills. At UNC, I felt like I had found my place in the world. I learned from my peers who came from all over the world holding similar goals and aspirations as me. With these new connections, I participated in multiple hackathons, joined a programming team, and began to build personal projects which I continue to improve on.
            </p>
          </div>
          <img src={`${process.env.PUBLIC_URL}/profile_pic.jpg`} alt="Nandan Mogili" className="profile-pic" />
        </div>
      </div>
    </div>
  );
}

export default Home;
