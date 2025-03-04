import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page non trouvée</h1>
      <p style={styles.message}>Désolé, cette page n'existe pas ou a été déplacée.</p>
      <Link to="/" style={styles.link}>Retour à l'accueil</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  title: {
    fontSize: '3em',
    color: '#FF6347',
  },
  message: {
    fontSize: '1.2em',
  },
  link: {
    fontSize: '1.2em',
    color: '#1E90FF',
    textDecoration: 'none',
    marginTop: '20px',
    display: 'inline-block',
  }
};

export default Page404;
