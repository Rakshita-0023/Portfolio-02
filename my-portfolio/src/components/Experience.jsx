import React from "react";
import { motion } from "framer-motion";
import { experience, education, certifications } from "../data/portfolioData";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Experience & Education
      </motion.h2>

      {/* Experience Timeline */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-color)' }}>
          Professional Experience
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="timeline"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="timeline-item"
            >
              <div className="timeline-year">{exp.year}</div>
              <div className="timeline-content">
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-company">{exp.company}</div>
                <p className="timeline-description">{exp.description}</p>
                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Education Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-color)' }}>
          Education
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              whileHover={{ y: -5 }}
              style={{
                background: 'var(--bg-card)',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: 'var(--shadow)',
                transition: 'all 0.3s ease'
              }}
            >
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{edu.degree}</h4>
              <p style={{ color: 'var(--primary-color)', fontWeight: '600', marginBottom: '0.5rem' }}>
                {edu.institution}
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {edu.year} | {edu.gpa}
              </p>
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>Relevant Coursework:</strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {edu.relevant.map((course, index) => (
                    <span
                      key={index}
                      style={{
                        background: 'var(--bg-secondary)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certifications */}
      <div>
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-color)' }}>
          Certifications
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'var(--bg-card)',
                padding: '1rem',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: 'var(--shadow)',
                border: '2px solid var(--border-color)',
                transition: 'all 0.3s ease'
              }}
            >
              <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{cert}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}