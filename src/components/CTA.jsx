import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cta-title">
            Prêt à transformer vos idées en succès digital ?
          </h2>
          <p className="cta-text">
            Faites le premier pas aujourd'hui. Contactez notre équipe d'experts pour 
            discuter de votre projet et découvrir comment nous pouvons vous aider à 
            atteindre vos objectifs.
          </p>
          <a href="/contact" className="btn-cta">
            Parlez nous de votre projet
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
