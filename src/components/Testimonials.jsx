import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="testimonials-title">
            Découvrez ce que nos clients disent de nous.
          </h2>
          <p className="testimonials-subtitle">
            Ne vous contentez pas de nous croire sur parole. Découvrez ce que nos clients 
            disent de nous et de nos services.
          </p>
        </motion.div>

        <motion.div
          className="testimonial-main"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="testimonial-image">
            <div className="testimonial-photo"></div>
          </div>
          
          <div className="testimonial-content">
            <h3 className="testimonial-name">Yoan Melson DANSOU</h3>
            <p className="testimonial-role">CEO Programme Futur & FuturCraft Institut</p>
            <p className="testimonial-text">
              Le site web de tous mes projets est maintenant géré par une seule agence web: Digital Innovation.
            </p>
            <div className="testimonial-controls">
              <button className="control-btn" aria-label="Previous">
                <FaChevronLeft />
              </button>
              <button className="control-btn" aria-label="Next">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
