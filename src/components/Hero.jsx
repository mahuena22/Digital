import { motion } from 'framer-motion';
import { FaReact, FaWordpress, FaFigma, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const floatingIcons = [
    { Icon: FaReact, color: '#61DAFB', delay: 0 },
    { Icon: FaWordpress, color: '#21759B', delay: 0.2 },
    { Icon: FaFigma, color: '#F24E1E', delay: 0.4 },
    { Icon: FaNodeJs, color: '#339933', delay: 0.6 },
    { Icon: FaPython, color: '#3776AB', delay: 0.8 },
    { Icon: SiTailwindcss, color: '#06B6D4', delay: 1 },
    { Icon: FaDatabase, color: '#E95420', delay: 1.2 },
  ];

  return (
    <section className="hero" id="accueil">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              <span className="hero-title-1">Agence web</span>
              <br />
              <span className="hero-title-2">Digital Innovation.</span>
            </h1>
            <p className="hero-subtitle">
              Entrepreneurs, TPE, PME, startups SaaS :<br />
              on vous propulse dans l'ère du digitale.
            </p>
            <div className="hero-buttons">
              <a href="#about" className="btn-primary">
                En savoir plus
                <span className="arrow">→</span>
              </a>
              <a href="#contact" className="btn-secondary">
                Contact
                <span className="icon">○</span>
              </a>
            </div>
          </motion.div>

          <div className="hero-visual">
            {floatingIcons.map(({ Icon, color, delay }, index) => (
              <motion.div
                key={index}
                className="floating-icon"
                style={{ color }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -20, 0],
                }}
                transition={{
                  opacity: { delay, duration: 0.5 },
                  scale: { delay, duration: 0.5 },
                  y: {
                    delay: delay + 0.5,
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
