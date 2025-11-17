import React from "react";
import Typed from "react-typed";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "3rem", fontWeight: "bold" }}
      >
        Hello, I'm Your Name
      </motion.h1>

      <Typed
        strings={["Frontend Developer", "React.js Enthusiast", "Full Stack Developer"]}
        typeSpeed={40}
        backSpeed={50}
        loop
        style={{ fontSize: "1.5rem", marginTop: "20px" }}
      />

      <div style={{ display: "flex", gap: "20px", marginTop: "20px", fontSize: "2rem" }}>
        <a href="#" target="_blank"><FaGithub /></a>
        <a href="#" target="_blank"><FaLinkedin /></a>
        <a href="#" target="_blank"><FaTwitter /></a>
      </div>
    </section>
  );
}
