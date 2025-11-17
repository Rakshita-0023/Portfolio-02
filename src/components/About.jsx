import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.8" }}>
        I'm a passionate software developer skilled in React.js, JavaScript,
        HTML, CSS, and modern web technologies. I create responsive,
        interactive, and user-friendly web applications that solve real-world problems.
      </p>
    </section>
  );
}
