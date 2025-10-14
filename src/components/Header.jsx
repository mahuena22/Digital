import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">Digital Innovation</div>
          
          <nav className="nav-menu">
            <a href="#accueil">Accueil</a>
            <a href="#about">À propos</a>
            <a href="#services">Services</a>
            <a href="#realisations">Réalisations</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="#" aria-label="TikTok"><FaTiktok /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
