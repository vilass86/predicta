import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PredictionCard.css'; // Import CSS for styling

const PredictionCard = ({ id, title, description }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/bet/${id}`);
  };

  return (
    <div onClick={handleCardClick} className="prediction-card">
      <h3 className="prediction-title">{title}</h3>
      <p className="prediction-description">{description}</p>
    </div>
  );
};

export default PredictionCard;
