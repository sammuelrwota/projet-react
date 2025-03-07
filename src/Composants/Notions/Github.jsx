import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; 
import './Github.scss';

function Github() {
    const { t } = useTranslation(); 

    useEffect(() => {
        window.scrollTo(0, 400); 
    }, []);



    return(
        <div className='CompetenceGithub'>
            <div className='GithubTitre'>
                <h1>{t('github_title')}</h1> 
                <div className='paragrapheGithub'>
                    <p className='pGithub'>{t('github_paragraph')}</p> 
                </div>
            </div>
        </div>
    )
}

export default Github;
