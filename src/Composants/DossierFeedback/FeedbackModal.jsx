import React, { useState } from 'react';
import './FeedbackModal.scss';

function Feedback({ isOpen, closeModal }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  if (!isOpen) return null; 

  return (
    <div className="feedback-modal-overlay" onClick={closeModal}>
      <div className="feedback-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Laissez votre avis</h2>
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
                  <span className="rating-label">{getRatingLabel(star)}</span>
                )}
              </div>
            ))}
          </div>
          <div className="comment">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Écrivez votre commentaire ici..."
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}


const getRatingLabel = (rating) => {
  switch (rating) {
    case 1:
      return 'Très mauvais';
    case 2:
      return 'Mauvais';
    case 3:
      return 'Passable';
    case 4:
      return 'Bien';
    case 5:
      return 'Très bien';
    default:
      return '';
  }
};

export default Feedback;
