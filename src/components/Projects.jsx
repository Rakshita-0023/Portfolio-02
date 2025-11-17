import React from "react";

const projects = [
  { title: "Project One", description: "A cool React project", link: "#" },
  { title: "Project Two", description: "Another awesome project", link: "#" },
  { title: "Project Three", description: "A fun coding project", link: "#" },
];

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
