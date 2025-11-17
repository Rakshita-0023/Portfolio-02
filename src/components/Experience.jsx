import React from "react";

const experiences = [
  { year: "2025", role: "AI/ML Intern", company: "Labmentix" },
];

export default function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <ul style={{ maxWidth: "600px", margin: "0 auto", listStyle: "none", padding: 0 }}>
        {experiences.map((exp, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <strong>{exp.year}</strong> - {exp.role} at {exp.company}
          </li>
        ))}
      </ul>
    </section>
  );
}
