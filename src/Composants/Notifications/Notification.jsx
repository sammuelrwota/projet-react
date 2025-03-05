import React from 'react';
import { useTranslation } from 'react-i18next';
import './Notification.scss';

function Notification() {
    const { t } = useTranslation(); 

    return (
      <div className='MessageEnvoye'>
        <h2>{t('message_sent')}</h2> 
      </div>
    );
}

export default Notification;
