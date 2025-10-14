import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Digital Innovation</h3>
            <p className="footer-description">
              Votre partenaire digital pour transformer vos idées en succès.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="#" aria-label="TikTok"><FaTiktok /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#realisations">Réalisations</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Community Management</a></li>
              <li><a href="#services">Design UI/UX</a></li>
              <li><a href="#services">Copywriting</a></li>
              <li><a href="#services">Développement Web</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact">
              <li>
                <FaEnvelope />
                <span>contact@digitalinnovation.bj</span>
              </li>
              <li>
                <FaPhone />
                <span>+229 XX XX XX XX</span>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Cotonou, Bénin</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Digital Innovation. Tous droits réservés.</p>
          <div className="footer-legal">
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/politique-confidentialite">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
