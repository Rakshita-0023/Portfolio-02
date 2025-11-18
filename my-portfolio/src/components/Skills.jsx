import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const SkillCategory = ({ title, skillList, delay }) => (
    <motion.div
      variants={itemVariants}
      className="skill-category"
    >
      <h3>{title}</h3>
      {skillList.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-name">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <motion.div
              className="skill-progress"
              initial={{ width: 0 }}
              animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1, delay: delay + index * 0.1 }}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );

  return (
    <section id="skills" ref={sectionRef}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Skills & Technologies
      </motion.h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="skills-container"
      >
        <SkillCategory 
          title="Frontend Development" 
          skillList={skills.frontend} 
          delay={0}
        />
        <SkillCategory 
          title="Backend Development" 
          skillList={skills.backend} 
          delay={0.2}
        />
        <SkillCategory 
          title="Tools & Technologies" 
          skillList={skills.tools} 
          delay={0.4}
        />
      </motion.div>
    </section>
  );
}