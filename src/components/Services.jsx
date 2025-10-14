import { motion } from 'framer-motion';
import { FaChartLine, FaPalette, FaPenNib, FaCode } from 'react-icons/fa';
import './Services.css';

const Services = () => {
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
    <section className="services section" id="services">
      <div className="container">
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
    </section>
  );
};

export default Services;
