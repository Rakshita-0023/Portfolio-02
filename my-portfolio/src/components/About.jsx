import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaLightbulb, FaRocket, FaTrophy, FaUsers } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  const features = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "I write maintainable, scalable, and well-documented code following best practices."
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      description: "I enjoy tackling complex challenges and finding innovative solutions to technical problems."
    },
    {
      icon: <FaRocket />,
      title: "Fast Learner",
      description: "I quickly adapt to new technologies and frameworks to stay current with industry trends."
    },
    {
      icon: <FaUser />,
      title: "Team Player",
      description: "I collaborate effectively with cross-functional teams to deliver exceptional results."
    },
    {
      icon: <FaTrophy />,
      title: "LeetCode Enthusiast",
      description: "Actively solving algorithmic problems on LeetCode to sharpen problem-solving skills and data structure knowledge."
    },
    {
      icon: <FaUsers />,
      title: "SIH Team Lead",
      description: "Led a team in Smart India Hackathon and secured top 10 position in our college. Coordinated development efforts and drove innovative solutions."
    }
  ];

  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        About Me
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
            Passionate Developer & Problem Solver
          </h3>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.8', 
            color: 'var(--text-secondary)', 
            marginBottom: '1.5rem' 
          }}>
            {personalInfo.bio}
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.8', 
            color: 'var(--text-secondary)', 
            marginBottom: '2rem' 
          }}>
            With a strong foundation in both frontend and backend technologies, I specialize in creating 
            seamless user experiences and robust server-side solutions. I'm passionate about writing 
            clean, efficient code and staying up-to-date with the latest industry trends and best practices.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{
              background: 'var(--bg-card)',
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center',
              minWidth: '120px',
              boxShadow: 'var(--shadow)'
            }}>
              <h4 style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '0.5rem' }}>1+</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Years Experience</p>
            </div>
            <div style={{
              background: 'var(--bg-card)',
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center',
              minWidth: '120px',
              boxShadow: 'var(--shadow)'
            }}>
              <h4 style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '0.5rem' }}>15+</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Projects Completed</p>
            </div>
            <div style={{
              background: 'var(--bg-card)',
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center',
              minWidth: '120px',
              boxShadow: 'var(--shadow)'
            }}>
              <h4 style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '0.5rem' }}>15+</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Languages</p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              style={{
                background: 'var(--bg-card)',
                padding: '1.5rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: 'var(--shadow)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--gradient)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '1.5rem'
              }}>
                {feature.icon}
              </div>
              <h4 style={{ 
                color: 'var(--text-primary)', 
                marginBottom: '0.5rem',
                fontSize: '1.1rem'
              }}>
                {feature.title}
              </h4>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}