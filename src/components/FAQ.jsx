import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Quels types de projets Digital Innovation prend en charge ?',
      answer: 'Nous prenons en charge une large gamme de projets : sites web, applications mobiles, e-commerce, branding, réseaux sociaux, et bien plus encore.',
    },
    {
      question: 'Combien de temps faut-il pour terminer un projet ?',
      answer: 'La durée dépend de la complexité du projet. Un site vitrine peut prendre 2-4 semaines, tandis qu\'une application complète peut nécessiter 2-3 mois.',
    },
    {
      question: 'Est-ce que Digital Innovation travaille avec des entreprises à l\'étranger ?',
      answer: 'Oui, nous travaillons avec des clients partout dans le monde grâce à notre processus de collaboration 100% digital.',
    },
    {
      question: 'Proposez-vous des services personnalisés selon les besoins ?',
      answer: 'Absolument ! Chaque projet est unique et nous créons des solutions sur mesure adaptées à vos besoins spécifiques.',
    },
    {
      question: 'Quels sont les coûts pour vos services ?',
      answer: 'Les tarifs varient selon le projet. Contactez-nous pour un devis gratuit et personnalisé.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="faq-title">Questions fréquemment posées</h2>
          <a href="/contact" className="btn-faq">Plus d'information</a>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="question-number">{index + 1}</span>
                <span className="question-text">{faq.question}</span>
                <span className="question-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
