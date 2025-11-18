import React from "react";
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '1rem' 
        }}>
          <a 
            href={socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <FaGithub />
          </a>
          <a 
            href={socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <FaLinkedin />
          </a>
          <a 
            href={socialLinks.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <FaTwitter />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-text">
          <p style={{ marginBottom: '0.5rem' }}>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            Made with <FaHeart style={{ color: '#ef4444' }} /> using React.js
          </p>
        </div>
      </div>
    </footer>
  );
}