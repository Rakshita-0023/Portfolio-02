import React, { useEffect, useRef } from "react";
import { skills } from "../data/portfolioData";

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.style.width = bar.dataset.width;
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const SkillCategory = ({ title, skillList }) => (
    <div className="skill-category">
      <h3>{title}</h3>
      {skillList.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-name">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <div
              className="skill-progress"
              data-width={`${skill.level}%`}
              style={{ width: '0%' }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" ref={skillsRef}>
      <h2 className="section-title">
        Skills & Technologies
      </h2>
      
      <div className="skills-container">
        <SkillCategory 
          title="Frontend Development" 
          skillList={skills.frontend} 
        />
        <SkillCategory 
          title="Backend Development" 
          skillList={skills.backend} 
        />
        <SkillCategory 
          title="Tools & Technologies" 
          skillList={skills.tools} 
        />
      </div>
    </section>
  );
}