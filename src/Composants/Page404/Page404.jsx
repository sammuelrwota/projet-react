import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

const Page404 = () => {
  const { t } = useTranslation(); 

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{t('page404_title')}</h1> 
      <p style={styles.message}>{t('page404_message')}</p> 
      <Link to="/" style={styles.link}>{t('page404_return_link')}</Link> 
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
