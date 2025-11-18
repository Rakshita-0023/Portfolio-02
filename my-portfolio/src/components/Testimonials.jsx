import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "AI Research Supervisor",
      company: "Labmentix",
      content: "Polana demonstrated exceptional analytical skills during her internship. Her ability to understand complex ML algorithms and implement them effectively is impressive for a student.",
      rating: 5,
      avatar: "👩‍🔬"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Computer Science Faculty",
      company: "Newton School Of Technology",
      content: "One of the most dedicated students I've taught. Polana's passion for learning and problem-solving approach makes her stand out among her peers.",
      rating: 5,
      avatar: "👨‍🏫"
    },
    {
      id: 3,
      name: "Alex Rodriguez",
      role: "Senior Developer",
      company: "Tech Community",
      content: "Collaborated with Polana on several projects. Her coding skills and attention to detail are remarkable. She's definitely someone to watch in the tech space.",
      rating: 5,
      avatar: "👨‍💻"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          What People Say
        </motion.h2>

        <div style={{ position: 'relative', marginTop: '3rem' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'var(--bg-card)',
                padding: '3rem',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-lg)',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              <FaQuoteLeft style={{
                fontSize: '3rem',
                color: 'var(--primary-color)',
                opacity: 0.3,
                marginBottom: '1rem'
              }} />

              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                fontStyle: 'italic'
              }}>
                "{testimonials[currentIndex].content}"
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} style={{ color: '#fbbf24', marginRight: '0.25rem' }} />
                ))}
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'var(--gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>
                  {testimonials[currentIndex].avatar}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {testimonials[currentIndex].name}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    {testimonials[currentIndex].role}
                  </p>
                  <p style={{ color: 'var(--primary-color)', fontSize: '0.8rem', fontWeight: '600' }}>
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'var(--bg-card)',
              border: '2px solid var(--border-color)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              boxShadow: 'var(--shadow)'
            }}
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextTestimonial}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'var(--bg-card)',
              border: '2px solid var(--border-color)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              boxShadow: 'var(--shadow)'
            }}
          >
            <FaChevronRight />
          </button>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '2rem'
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentIndex ? 'var(--primary-color)' : 'var(--border-color)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}