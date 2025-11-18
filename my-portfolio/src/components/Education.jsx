import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaTimes } from 'react-icons/fa';
import { education } from '../data/portfolioData';

export default function Education() {
  const [selectedBook, setSelectedBook] = useState(null);

  const bookColors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  ];

  return (
    <section id="education" style={{ padding: '5rem 2rem', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Education
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginTop: '4rem',
          justifyItems: 'center'
        }}>
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, rotateY: 5 }}
              onClick={() => setSelectedBook(edu)}
              style={{
                width: '200px',
                height: '280px',
                background: bookColors[index % bookColors.length],
                borderRadius: '8px 15px 15px 8px',
                position: 'relative',
                cursor: 'pointer',
                boxShadow: '10px 10px 20px rgba(0,0,0,0.2), inset -5px 0 10px rgba(0,0,0,0.1)',
                border: '3px solid rgba(255,255,255,0.1)',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <div style={{
                position: 'absolute',
                left: '-8px',
                top: '0',
                width: '15px',
                height: '100%',
                background: 'linear-gradient(90deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1))',
                borderRadius: '8px 0 0 8px'
              }} />

              <div style={{
                padding: '2rem 1.5rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white'
              }}>
                <FaGraduationCap style={{ fontSize: '3rem', marginBottom: '1rem' }} />
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>
                  {edu.degree.split('(')[0]}
                </h3>
                <p style={{ 
                  fontSize: '0.9rem', 
                  opacity: 0.9,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}>
                  {edu.institution}
                </p>
                <p style={{ 
                  fontSize: '0.8rem', 
                  marginTop: '0.5rem',
                  opacity: 0.8,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}>
                  {edu.year}
                </p>
              </div>

              <div style={{
                position: 'absolute',
                right: '5px',
                top: '5px',
                bottom: '5px',
                width: '3px',
                background: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 4px)',
              }} />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedBook && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                padding: '2rem'
              }}
              onClick={() => setSelectedBook(null)}
            >
              <motion.div
                initial={{ scale: 0.5, rotateY: -90 }}
                animate={{ scale: 1, rotateY: 0 }}
                exit={{ scale: 0.5, rotateY: 90 }}
                transition={{ type: 'spring', duration: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: '15px',
                  padding: '3rem',
                  maxWidth: '600px',
                  width: '100%',
                  maxHeight: '80vh',
                  overflow: 'auto',
                  position: 'relative',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                  border: '2px solid var(--border-color)'
                }}
              >
                <button
                  onClick={() => setSelectedBook(null)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer'
                  }}
                >
                  <FaTimes />
                </button>

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <FaGraduationCap style={{ 
                    fontSize: '4rem', 
                    color: 'var(--primary-color)',
                    marginBottom: '1rem'
                  }} />
                  <h2 style={{ 
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    fontSize: '1.8rem'
                  }}>
                    {selectedBook.degree}
                  </h2>
                  <h3 style={{ 
                    color: 'var(--primary-color)',
                    marginBottom: '0.5rem',
                    fontSize: '1.3rem'
                  }}>
                    {selectedBook.institution}
                  </h3>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem'
                  }}>
                    {selectedBook.year} | {selectedBook.gpa}
                  </p>
                </div>

                <div>
                  <h4 style={{ 
                    color: 'var(--text-primary)',
                    marginBottom: '1rem',
                    fontSize: '1.2rem'
                  }}>
                    Relevant Coursework:
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '0.8rem'
                  }}>
                    {selectedBook.relevant.map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                          background: 'var(--bg-secondary)',
                          padding: '0.8rem 1rem',
                          borderRadius: '8px',
                          textAlign: 'center',
                          color: 'var(--text-primary)',
                          fontWeight: '500',
                          border: '1px solid var(--border-color)'
                        }}
                      >
                        {course}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}