import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { personalInfo, socialLinks, typingStrings } from "../data/portfolioData";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const [text] = useTypewriter({
    words: typingStrings,
    loop: 0,
    typeSpeed: 40,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: Math.random() * 0.5
            }}
            animate={{
              x: mousePosition.x + (Math.random() - 0.5) * 100,
              y: mousePosition.y + (Math.random() - 0.5) * 100,
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={
              {
                position: 'absolute',
                width: '2px',
                height: '2px',
                background: 'var(--primary-color)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }
            }
          />
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', maxWidth: '1200px', width: '100%' }}>
        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          style={{ textAlign: 'left' }}
        >

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', marginBottom: '1rem', background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Hello, I'm {personalInfo.name}
          </h1>

          <div className="typed-text" style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: 'var(--text-secondary)', marginBottom: '1rem', minHeight: '60px' }}>
            <span>{text}</span>
            <Cursor cursorColor='var(--primary-color)' />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            <FaMapMarkerAlt />
            <span>{personalInfo.location}</span>
          </div>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
            {personalInfo.bio}
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
              Get In Touch
            </motion.button>
            <motion.a
              href={personalInfo.resume}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download CV
            </motion.a>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <motion.a href={socialLinks.github} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.1 }} style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1.2rem' }}>
              <FaGithub />
            </motion.a>
            <motion.a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.1 }} style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1.2rem' }}>
              <FaLinkedin />
            </motion.a>
            <motion.a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.1 }} style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1.2rem' }}>
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>

        {/* Photo Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{
            position: 'relative',
            width: '400px',
            height: '450px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
            background: 'var(--gradient)',
            padding: '8px'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '15px',
              overflow: 'hidden',
              background: '#f0f0f0'
            }}>
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}