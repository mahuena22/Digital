import { motion } from 'framer-motion';
import './Blog.css';

const Blog = () => {
  const articles = [
    {
      title: 'Introduction à React',
      excerpt: 'Les bases de React',
      category: 'Développement',
      image: '/blog1.jpg',
    },
    {
      title: 'Optimisation pour les moteurs de recherche',
      excerpt: 'L\'importance du SEO',
      category: 'Marketing Digital',
      image: '/blog2.jpg',
    },
    {
      title: 'Pourquoi migrer vers le cloud en 2025 ?',
      excerpt: 'Les tendances du cloud computing',
      category: 'Cloud',
      image: '/blog3.jpg',
    },
    {
      title: 'Protégez vos données en ligne',
      excerpt: 'Cybersécurité en entreprise',
      category: 'Sécurité',
      image: '/blog4.jpg',
    },
  ];

  return (
    <section className="blog section" id="blog">
      <div className="container">
        <motion.div
          className="blog-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="blog-title">Derniers articles</h2>
        </motion.div>

        <div className="blog-grid">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="blog-image">
                <div className="blog-placeholder">{article.category}</div>
              </div>
              <div className="blog-content">
                <h3 className="blog-card-title">{article.title}</h3>
                <p className="blog-excerpt">{article.excerpt}</p>
                <a href="/blog" className="blog-link">
                  Lire plus →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
