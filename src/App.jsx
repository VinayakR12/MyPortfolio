import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Counter from './components/Counter';
import About from './components/About';
import EducationStepper from './components/Education';
import Volunteer from './components/Volunteer';
import Skills from './components/Skills';
import Certificate from './components/Certificates';
import ProjectList from './components/Project';
import Demo from './components/Demo';
import Contact from './components/Contact';
import Footer from './components/footer';
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true); // Loader state
  const [showContent, setShowContent] = useState(false); // Content visibility state

  // Simulate a loading process
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide the loader after 5 seconds
      setShowContent(true); // Show the content with transition
    }, 2000); // 5 seconds loading time
  }, []);

  return (
    <>
      {loading && <Loader />} {/* Show loader when loading is true */}

      {/* Website content with fade-in transition */}
      <div className={`main-content ${showContent ? 'visible' : ''}`}>
        <NavBar />
        <Hero className="fade-in" />
        <Counter />
        <About />
        <Skills />
        <ProjectList />
        <Demo />
        <Volunteer />
        <Certificate />
        <EducationStepper />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
