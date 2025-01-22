import React from "react";
import "../css/Hero.css";
// import pro from "../assets/download.jpg"
import { Typewriter } from 'react-simple-typewriter'; // Ensure this library is installed: npm install react-simple-typewriter
import me from '../assets/Myself.jpeg'
const HeroSection = () => {
  return (
    <section id="Home" className="hero-section">
      {/* Background Icons */}
      <div className="floating-icons">
        {[
          "fab fa-react",
          "fab fa-python",
          "fab fa-js-square",
          "fab fa-html5",
          "fab fa-css3-alt",
          "fab fa-node-js",
          "fab fa-database",
          "fab fa-git-alt",
          "fab fa-aws",
          "fab fa-angular",
          "fab fa-sass",
          "fab fa-java",
          "fab fa-cuttlefish",
          "fab fa-linux",
          "fab fa-vuejs",
          "fab fa-figma",
          "fab fa-docker",
          "fab fa-npm",
          "fab fa-cloudsmith",
          "fab fa-heroku",
        ].map((iconClass, index) => (
          <i key={index} className={`icon ${iconClass}`} />
        ))}
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="text-content">
          <h1>
            Hi,I'm <br/><span className="name">Vinayak Rhatankar</span>
          </h1>
          <p className="profession">
  {/* <span className="static-text">I am a&nbsp;</span>? Static text */}
  <span className="typo">
    <Typewriter
      words={['Full Stack Developer', 'Software Engineer', 'AI-ML Engineer', 'MERN Stack Developer','Application Developer']}
      loop={false}
      cursor
      cursorStyle="|"
      cursorColor="darkblue"
      typeSpeed={90}
      deleteSpeed={60}
      delaySpeed={1500}
    /> 
  </span>
</p>

          
          {/* <h2>AI/ML Specialist | Full-Stack Developer</h2> */}
          <p className="contentpara">
            Passionate about leveraging AI to solve real-world challenges. Skilled
            in Machine Learning, NLP, Computer Vision, and Full-Stack Development.
            I build scalable, innovative solutions for a better future.
          </p>
          <div className="custom-btn-group">
          {/* <a href="/my-document.pdf" download="MyPortfolio.pdf"> */}
  <a href="/VinayakR_Resume.pdf" download="VinayakR_Resume.pdf" className="custom-btn custom-btn-primary">See Resume</a>
  <a href="#Project" className="custom-btn custom-btn-secondary">View Projects</a>
</div>

        </div>
        <div className="image-container">
          <img src={me} alt="Your Profile" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

