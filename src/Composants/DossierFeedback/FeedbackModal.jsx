import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import CloseIcon from '@mui/icons-material/Close';
import './FeedbackModal.scss';
import IconButton from '@mui/material/IconButton';

function Feedback({ isOpen, closeModal }) {
  const { t } = useTranslation(); 
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose(); 
  };

  const handleClose = () => {
    setRating(0);    
    setComment('');   
    closeModal();      
  };

  if (!isOpen) return null; 

  return (
    <div className="feedback-modal-overlay" onClick={handleClose}>
      <div className="feedback-modal" onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <IconButton className="close-button" onClick={handleClose}>
          <CloseIcon />
        </IconButton>

        <h2>{t('leave_review')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <div key={star} className="rating-item">
                <span
                  className={`star ${rating >= star ? 'filled' : ''}`}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
                {rating === star && (
                  <span className="rating-label">{t(`rating_${star}`)}</span>
                )}
              </div>
            ))}
          </div>
          <div className="comment">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t('write_comment')}
            />
          </div>
          <button type="submit">{t('submit')}</button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
