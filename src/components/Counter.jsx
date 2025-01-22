import React, { useEffect, useState, useRef } from "react";
import "../css/counter.css"; 

const CounterSection = () => {
  const [dsaCount, setDsaCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [awardsCount, setAwardsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll trigger
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animate Counters
  useEffect(() => {
    if (isVisible) {
      const animateCount = (setter, targetValue) => {
        let count = 0;
        const interval = setInterval(() => {
          count += Math.ceil(targetValue / 100);
          if (count >= targetValue) {
            count = targetValue;
            clearInterval(interval);
          }
          setter(count);
        }, 20);
      };

      animateCount(setDsaCount, 200);
      animateCount(setProjectsCount, 10);
      animateCount(setAwardsCount, 5);
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className={`counter-section ${isVisible ? "visible" : ""}`}>
      <h1 className="section-title">My Achievements</h1>
      <div className="counter-grid">
        <div className="counter-card dsa-card">
          <div className="counter-value">{dsaCount}+</div>
          <p className="counter-label">DSA Problems Solved</p>
        </div>
        <div className="counter-card projects-card">
          <div className="counter-value">{projectsCount}+</div>
          <p className="counter-label">Projects Completed</p>
        </div>
        <div className="counter-card awards-card">
          <div className="counter-value">{awardsCount}+</div>
          <p className="counter-label">Awards & Achievements</p>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
