import React from "react";
import "../css/Card.css"; 
import Aws from "../assets/certificates/AWSDBE.png"
import Cou from "../assets/certificates/Coursera.png"
import CyberOps from "../assets/certificates/CyberOps.png"
import Cyber from "../assets/certificates/Cyberpalo.png"
import data from "../assets/certificates/Datascience.png"
import python from "../assets/certificates/python.png"
import r from "../assets/certificates/R.png"
import cpp from "../assets/certificates/cpp.png"
const Card = () => {
  const certificates = [
    
      {
        title: 'AWS Data Engineering',
        image: Aws,
        p: "Acquired practical expertise in cloud computing, focusing on deploying, managing, and scaling applications using Amazon Web Services.",
      },
      {
        title: 'CyberOps Associate',
        image: CyberOps,
        p: "Gained insights into cybersecurity operations, threat analysis, and implementing secure network architectures to protect digital environments.",
      },
      {
        title: 'Fundamentals of Cybersecurity',
        image: Cyber, // Replace with relevant image variable
        p: "Learned key principles of cybersecurity, including risk mitigation, secure systems design, and threat response strategies.",
      },
      {
        title: 'WordPress',
        image: Cou, // Replace with relevant image variable
        p: "Developed skills in designing, managing, and customizing WordPress websites for diverse requirements.",
      },
      {
        title: 'Data Science',
        image: data, // Replace with relevant image variable
        p: "Acquired proficiency in data analysis, visualization, and predictive modeling to derive actionable insights.",
      },
      {
        title: 'Python Programming',
        image: python, // Replace with relevant image variable
        p: "Mastered programming fundamentals and advanced techniques to solve problems using Python.",
      },
      {
        title: 'R Programming',
        image: r, // Replace with relevant image variable
        p: "Gained expertise in statistical modeling and data analysis using R for business and research applications.",
      },
      {
        title: 'C++ Programming',
        image: cpp, // Replace with relevant image variable
        p: "Learned programming logic, algorithm design, and efficient problem-solving using C++.",
      }
    ]
    
  return (
    <div id='Certificates' className="main2">
      <div className="title3">Certificates</div>
<div class="container">
  {certificates.map((data, index)=>(
    <div class="box">
      <div class="imgBx"><img src={data.image}/> </div>
      <div class="content">
      <div>
        <h2>{data.title}</h2>
        <p>{data.p}</p>
      </div>
    </div>
    </div>
  
    ))
  }
     </div>
     </div>
  );
}; 


export default Card;
