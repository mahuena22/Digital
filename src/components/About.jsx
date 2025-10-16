import { motion } from 'framer-motion';
import { FaChartLine, FaPalette, FaPenNib, FaCode } from 'react-icons/fa';
import './About.css';

const About = () => {
  const services = [
    {
      icon: FaChartLine,
      title: 'Community & Social Media Manager',
      description: 'Nous transformons vos réseaux sociaux en puissants leviers de croissance grâce à des contenus engageants.',
    },
    {
      icon: FaPalette,
      title: 'Designer graphique & UI/UX',
      description: 'Nos designers créent des designs qui captivent et des interfaces qui marquent, alliant créativité et expérience utilisateur.',
    },
    {
      icon: FaPenNib,
      title: 'Copywriter & Ghostwriter',
      description: 'Nous donnons vie à vos idées avec des mots qui inspirent, convainquent et fidélisent votre audience.',
    },
    {
      icon: FaCode,
      title: 'Développeurs web & mobile',
      description: 'Nos développeurs conçoivent des sites et applications solides, performants et adaptés à vos besoins.',
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-title">Qui sommes nous ?</h2>
            <p className="about-description">
              Digital Innovation, c'est une jeune équipe dynamique et passionnée, 
              dédiée à transformer vos idées en succès digital. Basée au Bénin, nous 
              accompagnons entrepreneurs, TPE, PME et startups dans leur transformation 
              numérique, avec des solutions créatives et sur mesure.
            </p>
            <button className="btn-about">
              En savoir plus sur nous
              <span className="arrow">→</span>
            </button>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-icon">
                  <service.icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
