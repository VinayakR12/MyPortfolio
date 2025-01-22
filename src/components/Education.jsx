import React, { useState } from 'react';
import '../css/Education.css';

const Education = () => {
  const educationData = [
    {
      title: 'SSC',
      institution: 'Vidyapeeth High School, Kolhapur',
      year: '2020',
      score: '87%',
      description: 'Completed secondary education with a focus on holistic learning and personal growth. These years were marked by active participation in academic and extracurricular activities, laying the groundwork for a disciplined and determined approach to future endeavors.'
  },
    {
      title: 'HSC',
      institution: 'Vivekanand College, Kolhapur',
      year: '2022',
      score: '70%',
      description: 'Focused on building a strong academic foundation in science and mathematics. This period encouraged critical thinking and problem-solving, inspiring me to explore advanced fields of study and set clear career goals in technology.'   },
    {
      title: 'B.Tech',
      institution: 'D.Y.Patil College of Engineering & Technology, Kolhapur',
      year: '2026',
      score: '9.2 CGPA',
      description: 'Currently pursuing a degree in Computer Science, where I am developing expertise in innovative technologies like Artificial Intelligence and Machine Learning. Engaging in hands-on projects and research has deepened my understanding of real-world applications and prepared me to contribute meaningfully to the tech industry.' }
  ];
  

  const [hovered, setHovered] = useState(null);

  return (
    <div className="Edu1">
      <section className="education-section" id="education">
        <h2>My Education</h2>
        <hr className="node-hr" />
        <div className="education-row">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="education-node"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="node-title">{item.title}</div>
              {hovered === index && (<div className="node-details">
                <div><b>Institution : </b> {item.institution}</div>
                <div><b>Year : </b> {item.year}</div>
                <div><b>Score : </b>{item.score}</div>
                <div >{item.description}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
