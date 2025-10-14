import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Yoan Melson DANSOU',
      role: 'CEO Programme Futur & FuturCraft Institut',
      text: 'Le site web de tous mes projets est maintenant géré par une seule agence web: Digital Innovation.',
      avatar: '/testimonial1.jpg',
    },
    {
      name: 'Serge HOUNDODE',
      role: 'Entrepreneur',
      text: 'Digital Innovation a transformé notre présence en ligne avec professionnalisme et créativité.',
      avatar: '/testimonial2.jpg',
    },
    {
      name: 'Emile',
      role: 'Fondateur Startup',
      text: 'Une équipe réactive et à l\'écoute. Nos projets digitaux ont pris vie grâce à leur expertise.',
      avatar: '/testimonial3.jpg',
    },
  ];

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

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="testimonial-avatar">
                <div className="avatar-placeholder">{testimonial.name.charAt(0)}</div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
