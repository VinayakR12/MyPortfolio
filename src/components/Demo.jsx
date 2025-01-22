import React, { useState } from 'react';
import '../css/demo.css';
import cisco from "../assets/internship/cisco.png"
import ybi from "../assets/internship/ybi.png"
import gap from "../assets/internship/igap.png"
import cisco_certificate from "../assets/internship/Vinayak_Cisco_Certificate.pdf"
import igap_certificate from "../assets/internship/Vinayak_iGap_Internship.pdf"
import ybi_certificate from "../assets/internship/Vinayak_Cloud_Internship.pdf"

const BarNavigation = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleItemClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };


  const handleDownload = (certificateLink) => {
    const link = document.createElement('a');
    link.href = certificateLink;
    link.download = certificateLink.split('/').pop(); // Extract the file name from the URL and set it as download name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const items = [
    { color: '#0018A8',img:cisco, title: 'Cisco Internship in Networking', content:"Gained practical experience in configuring networks, troubleshooting issues, and learning key Cisco technologies. This internship strengthened my network management and security skills, preparing me for certification and real-world networking roles.",
      certificateLink:cisco_certificate
    },
    { color:'#120A8F',img:gap, title: 'AI-ML Engineer Intern at iGAP', content: 'During my time at iGap Technology, I worked on AI and machine learning projects, utilizing various algorithms and tools to improve model accuracy and performance. I gained practical experience in data analysis, model training, and deployment, enhancing my skills in AI/ML engineering.' ,
      certificateLink:igap_certificate
    },
    { color:  '#082567',img:ybi, title: 'Cloud Computing Virtual Internship', content:"During my virtual internship at YBI, I explored the fundamental concepts of cloud computing, including the different types of cloud architectures and deployment models. I learned about public, private, and hybrid clouds, and how they are utilized for various business solutions.In this internship helped me develop a solid understanding of cloud computing's role in modern IT infrastructure.",
      certificateLink:ybi_certificate
    }
  ];

  return (
    <div id="Internship" className='Demo'>
      <h1 className='head1'>Internship</h1>
  
    <nav className="bar-navigation">
      
      <ul className="nav-list">
        {items.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${expandedIndex === index ? 'expanded' : ''}`}
            style={{ '--i': index, '--total': items.length, '--color': item.color }}
            onClick={() => handleItemClick(index)}
          >
           
            <div className="nav-item-title">
              <h2 className="MainTitle">{item.title}</h2>
             <div className="logo"> <img src={item.img} /></div>
            </div>

            
            {expandedIndex === index && (
              <div className="nav-item-content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <button
            onClick={() => handleDownload(item.certificateLink)}
            style={{
              padding: '8px',
              fontSize: '1.2rem',
              marginTop: '5px',
              background: 'linear-gradient(159deg, rgba(8,146,208,1) 0%, rgba(75,0,130,1) 100%)',
              margin: '8px',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
>            
            View Certificate
          </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
};

export default BarNavigation;
