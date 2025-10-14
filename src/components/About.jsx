import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="about-subtitle">Qui sommes nous ?</h3>
          <h2 className="about-title">
            Digital Innovation, c'est une jeune équipe dynamique et passionnée, 
            dédiée à transformer vos idées en succès digital. Basée au Bénin, nous 
            accompagnons entrepreneurs, TPE, PME et startups dans leur transformation 
            numérique, avec des solutions créatives et sur mesure.
          </h2>
          <a href="/about" className="btn-about">
            En savoir plus sur nous
            <span className="arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
