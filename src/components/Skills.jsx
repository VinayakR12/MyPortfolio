import React from 'react';
import '../css/skills.css';
import dj from '../assets/django.svg';
import vite from '../assets/vitejs.svg';
import figma from '../assets/figma.svg';
import tailwind from '../assets/tailwind.svg';
import moogodb from '../assets/mongoDB.svg';
import react from '../assets/react.svg';
import sql from '../assets/mysql.svg';
import c1 from '../assets/cplusplus.svg';
import fire from '../assets/firebase.svg';
import mate from "../assets/materialui.svg";
import python from '../assets/python.svg';
import js from "../assets/javascript.svg";
import tensor from '../assets/tensorflow.svg';
import java from '../assets/java.svg';
function Skills() {
  return (
    <div className="skills-container">
      <h1 className="title1">My Skills</h1>
      <main className="badge-wrapper">

        <article className="badge html-badge">
          <div className="icon-container"><i className="fab fa-html5"></i></div>
        </article>
        <article className="badge css-badge">
          <div className="icon-container"><i className="fab fa-css3-alt"></i></div>
        </article>
        <article className="badge javascript-badge">
          <div className="icon-container"><img src={js} alt="JS" /></div>
        </article>
        <article className="badge python-badge">
          <div className="icon-container"><img src={python} alt="Python" /></div>
        </article>
        <article className="badge java-badge">
          <div className="icon-container"><img src={java}/></div>
        </article>
        <article className="badge c-badge">
          <div className="icon-container"><i className="fab fa-c"></i></div>
        </article>
        <article className="badge github-badge">
          <div className="icon-container"><img src={c1}/></div>
        </article>
        <article className="badge node-badge">
          <div className="icon-container"><i className="fab fa-node"></i></div>
        </article>
        <article className="badge android-badge">
          <div className="icon-container"><i className="fab fa-android"></i></div>
        </article>
        <article className="badge django-badge">
          <div className="icon-container"><img src={dj} alt="Django" /></div>
        </article>
        <article className="badge php-badge">
          <div className="icon-container"><i className="fab fa-php"></i></div>
        </article>

        <article className="badge react-badge">
          <div className="icon-container"><img src={react} alt="React" /></div>
        </article>

        <article className="badge vite-badge">
          <div className="icon-container"><img src={vite} alt="Vite" /></div>
        </article>
        <article className="badge bootstrap-badge">
          <div className="icon-container"><i className="fab fa-bootstrap"></i></div>
        </article>
        <article className="badge materialui-badge">
          <div className="icon-container"><img src={mate} alt="Material UI" /></div>
        </article>
        <article className="badge tailwind-badge">
          <div className="icon-container"><img src={tailwind} alt="Tailwind CSS" /></div>
        </article>
        <article className="badge figma-badge">
          <div className="icon-container"><img src={figma} alt="Figma" /></div>
        </article>
        <article className="badge github-badge">
          <div className="icon-container"><i className="fab fa-github"></i></div>
        </article>
        <article className="badge docker-badge">
          <div className="icon-container"><i className="fab fa-docker"></i></div>
        </article>
       
       
        <article className="badge linux-badge">
          <div className="icon-container"><i className="fab fa-linux"></i></div>
        </article>
        <article className="badge aws-badge">
          <div className="icon-container"><i className="fab fa-aws"></i></div>
        </article>
        
        <article className="badge tensorflow-badge">
          <div className="icon-container"><img src={tensor} alt="TensorFlow" /></div>
        </article>
        <article className="badge cloud-badge">
          <div className="icon-container"><i className="fas fa-cloud"></i></div>
        </article>
     
       
        
        <article className="badge mongodb-badge">
          <div className="icon-container"><img src={moogodb} alt="MongoDB" /></div>
        </article>
       
        <article className="badge sql-badge">
          <div className="icon-container"><img src={sql} alt="SQL" /></div>
        </article>
        <article className="badge firebase-badge">
          <div className="icon-container"><img src={fire} alt="Firebase" /></div>
        </article>
        <article className="badge unity-badge">
          <div className="icon-container"><i className="fab fa-unity"></i></div>
        </article>
      </main>
    </div>
  );
}

export default Skills;
