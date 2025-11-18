import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 2, label: 'Years of Learning', suffix: '+' },
    { number: 15, label: 'Projects Completed', suffix: '+' },
    { number: 8, label: 'Technologies Mastered', suffix: '+' },
    { number: 1, label: 'Internship Experience', suffix: '' }
  ];

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

  const Counter = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return count;
  };

  return (
    <section ref={sectionRef} style={{ 
      background: 'var(--bg-secondary)', 
      padding: '4rem 2rem',
      margin: '4rem 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          My Journey in Numbers
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                background: 'var(--bg-card)',
                padding: '2rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: 'var(--shadow)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: 'var(--primary-color)',
                marginBottom: '0.5rem'
              }}>
                <Counter end={stat.number} />{stat.suffix}
              </div>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                fontWeight: '500'
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}