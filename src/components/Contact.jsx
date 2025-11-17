import React from "react";

export default function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <form style={{ maxWidth: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" }}>
        <input type="text" placeholder="Your Name" required style={{ padding: "10px" }} />
        <input type="email" placeholder="Your Email" required style={{ padding: "10px" }} />
        <textarea placeholder="Your Message" rows="5" required style={{ padding: "10px" }}></textarea>
        <button type="submit" style={{ padding: "10px", background: "#6b5b95", color: "white", border: "none", borderRadius: "5px" }}>
          Send Message
        </button>
      </form>
    </section>
  );
}
