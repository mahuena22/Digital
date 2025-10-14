import { useState } from 'react';
import { FaHome, FaInfoCircle, FaCog, FaBriefcase, FaBlog, FaEnvelope } from 'react-icons/fa';
import './BottomNav.css';

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState('accueil');

  const navItems = [
    { id: 'accueil', icon: FaHome, href: '#accueil', label: 'Accueil' },
    { id: 'about', icon: FaInfoCircle, href: '#about', label: 'À propos' },
    { id: 'services', icon: FaCog, href: '#services', label: 'Services' },
    { id: 'realisations', icon: FaBriefcase, href: '#realisations', label: 'Réalisations' },
    { id: 'blog', icon: FaBlog, href: '#blog', label: 'Blog' },
    { id: 'contact', icon: FaEnvelope, href: '#contact', label: 'Contact' },
  ];

  const handleClick = (id) => {
    setActiveSection(id);
  };

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-container">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`bottom-nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => handleClick(item.id)}
            aria-label={item.label}
          >
            <item.icon />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
