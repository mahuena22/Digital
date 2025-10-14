import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaPaintBrush, FaCode, FaCheckCircle, FaRocket } from 'react-icons/fa';
import './Workflow.css';

const Workflow = () => {
  const steps = [
    {
      icon: FaUsers,
      title: 'Écoute & Analyse',
      description: 'Nous commençons par vous écouter attentivement. Comprendre vos besoins, vos objectifs et votre vision est essentiel pour poser les bases du projet.',
    },
    {
      icon: FaChartLine,
      title: 'Stratégie & Planification',
      description: 'Une fois vos besoins identifiés, nous définissons une stratégie sur mesure et planifions chaque étape pour garantir un déroulement sans accroc.',
    },
    {
      icon: FaPaintBrush,
      title: 'Design & Création',
      description: 'Nos designers entrent en scène pour donner vie à votre projet avec des visuels modernes, captivants et une expérience utilisateur fluide.',
    },
    {
      icon: FaCode,
      title: 'Développement & Implémentation',
      description: 'Nos développeurs transforment les concepts en réalité grâce à un code propre, performant et sécurisé.',
    },
    {
      icon: FaCheckCircle,
      title: 'Tests & Optimisation',
      description: 'Avant le lancement, nous testons tout en détail pour corriger les moindres bugs et optimiser les performances.',
    },
    {
      icon: FaRocket,
      title: 'Lancement & Suivi',
      description: 'Votre projet est mis en ligne, mais notre travail ne s\'arrête pas là. Nous vous accompagnons avec un suivi régulier pour garantir un succès durable.',
    },
  ];

  return (
    <section className="workflow section" id="workflow">
      <div className="container">
        <motion.div
          className="workflow-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="workflow-title">
            Un workflow efficace <br />
            <span className="title-green">pour un projet réussi</span>
          </h2>
        </motion.div>

        <div className="workflow-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="workflow-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="step-icon">
                <step.icon />
              </div>
              <div className="step-content">
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
