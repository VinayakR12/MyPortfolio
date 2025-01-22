import React from 'react';
import "../css/About.css";
const About = () => {

  return (
    <section id="About" className="about-section">
      <div className="about-content">
        <h1 className='title31'>About</h1>
        <p className="about-text">
          I am a dedicated B.Tech student in AI & ML at D.Y. Patil College of Engineering, Kolhapur, with a strong focus on software development and problem-solving. I am proficient in programming languages such as Java, Python, C, and C++, and have hands-on experience with the MERN stack, React Native, and DSA. My technical passion lies in building scalable applications and leveraging machine learning to solve real-world challenges.
          <br/><br/>
          Beyond coding, I am an avid chess player, which has helped hone my strategic thinking and problem-solving skills. I also enjoy drawing, which allows me to express creativity and attention to detail. These diverse interests fuel my drive for innovation, making me a well-rounded and adaptable individual, always eager to learn and explore new opportunities.
        </p>
        <a href="#Contact">
        <button 
          className="contact-btn"
        >
          Get in Touch
        </button> </a>
      </div>
    </section>
  );
};

export default About;
