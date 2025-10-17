import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconCloud } from './IconCloud'
import {
    FaReact,
    FaWordpress,
    FaFigma,
    FaNodeJs,
    FaPython,
    FaDatabase,
    FaGithub,
    FaFacebook,
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import './Hero.css'

const Hero = () => {
    const [textIndex, setTextIndex] = useState(0)
    const texts = ['de com', 'web']

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex(prevIndex => (prevIndex + 1) % texts.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    // Ici on crée des éléments React pour IconCloud avec couleur et taille
    const icons = [
        <FaReact color="#61DAFB" size={90} />,
        <FaWordpress color="#21759B" size={90} />,
        <FaFigma color="#F24E1E" size={90} />,
        <FaNodeJs color="#339933" size={90} />,
        <FaPython color="#3776AB" size={90} />,
        <SiTailwindcss color="#06B6D4" size={90} />,
    ]

    return (
        <section className="hero" id="accueil">
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}>
                        <h1>
                            <span className="hero-title-1">
                                Agence{' '}
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={textIndex}
                                        className="animated-text"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}>
                                        {texts[textIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                            <br />
                            <span className="hero-title-2">
                                Digital Innovation.
                            </span>
                        </h1>
                        <p className="hero-subtitle">
                            Entrepreneurs, TPE, PME, startups SaaS :<br />
                            on vous propulse dans l'ère du digitale.
                        </p>
                        <div className="hero-buttons">
                            <a href="#about" className="btn-primary">
                                En savoir plus
                                <span className="arrow">→</span>
                            </a>
                            <a href="#contact" className="btn-secondary">
                                Contact
                                <span className="icon">○</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Nouveau nuage 3D avec les icônes react-icons */}
                    <div className="hero-visual">
                        <IconCloud icons={icons} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
