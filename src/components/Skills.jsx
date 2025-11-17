import React from "react";

const skills = ["React.js", "JavaScript", "HTML", "CSS", "Git", "Node.js","Node.js","Express.js","Nextjs","mysql","prisma"];

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">{skill}</div>
        ))}
      </div>
    </section>
  );
}
