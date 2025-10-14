import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'virtualedgeagency.com',
      image: '/project1.jpg',
      category: 'Site web d\'agence',
    },
    {
      title: 'ceforaformation.com',
      image: '/project2.jpg',
      category: 'Plateforme de formation',
    },
    {
      title: 'hermann-richy.vercel.app',
      image: '/project3.jpg',
      category: 'Portfolio personnel',
    },
    {
      title: 'futurcraftinstitut.com',
      image: '/project4.jpg',
      category: 'Site éducatif',
    },
    {
      title: 'oeilmobylpro.com',
      image: '/project5.jpg',
      category: 'Site professionnel',
    },
  ];

  return (
    <section className="portfolio section" id="realisations">
      <div className="container">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="portfolio-title">
            Voir les réalisations <br />
            <span className="title-green">de Digital Innovation</span>
          </h2>
          <a href="/services" className="btn-services">
            Voir nos services
            <span className="arrow">→</span>
          </a>
        </motion.div>

        <div className="portfolio-slider">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="portfolio-card">
                  <div className="project-image">
                    <div className="project-placeholder">
                      <span>{project.title}</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
