import React, { useState, useEffect } from 'react';
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Stats from "./components/Stats.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";


import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import CursorEffect from "./components/CursorEffect.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      <CursorEffect />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Stats />
      <Projects />
      <Experience />


      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;