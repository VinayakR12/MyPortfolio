import React from "react";
import "../css/volunteer.css"; // Import your CSS file
import Code from '../assets/volunteer/CodingClub.png';
import ARVR from '../assets/volunteer/ARVR.png';
import place from '../assets/volunteer/T&P.png';
import ASPIRE from '../assets/volunteer/Aspire.png';
import Prarambh from '../assets/volunteer/Prarambh.png';
const HoverFoldCard = ({ title, image, backText }) => {
  return (
    <div id='Campus' className="hover-fold">
      <h2>{title}</h2>
      <div
        className="top"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="face"></div>
        <div className="back face">
          <p className="backText">{backText}</p>
        </div>
      </div>
      <div
        className="bottom"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
};

const HoverFoldCards = () => {
  const cardData = [
    {
      title : (
        <>
         <b>Prarambh Cell</b> <br /> Technical Team Member<br />
        </>
      ),
      image:Prarambh,
      backText:" Assigned projects and contributed to technical solutions for club initiatives."
      
      
    },
    {
      title : (
        <>
         <b>T & P Cell</b> <br /> Placement Coordinator<br />
        </>
      ),
      image:place,
      backText:"Facilitated job placements, organized recruitment events, & supported students in securing employment & internships."
    },
    {
      title : (
        <>
         <b>Coding Club</b> <br />Mentor<br />
        </>
      ),
      image:Code,
      backText:
        "Guided students in programming languages and assisted with coding challenges and projects.",
    },
    {
      title : (
        <>
         <b>ARVR Club</b> <br />Technical Head<br />
        </>
      ),
      image:ARVR,
      backText: "Led AR/VR projects, focusing on technical innovation and implementation.",
    },
    {
      title : (
        <>
         <b>ASPIRE Association</b> <br />R&D Coordinator<br />
        </>
      ),
      image: ASPIRE, // Pass the imported image here
      backText:
        "Advanced the club's goals through research and prototype development",
    },
  ];

  return (<div className="vol"> 
    <h1 className="title23">Campus InvolveMent</h1>
    <div className="card-container">
   
      {cardData.map((card, index) => (
        <HoverFoldCard
          key={index}
          title={card.title}
          image={card.image}
          backText={card.backText}
        />
      ))}
    </div>
    </div>
  );
};

export default HoverFoldCards;
