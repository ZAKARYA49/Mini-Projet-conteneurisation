import React from 'react';
import './ValidationForm.css';


const ValidationElement = ({ nom, date, moyenne , onClick }) => {
  let className = 'validation-element';


  // Déterminer la classe selon la moyenne
  if (moyenne === 'Pas de notes') {
    className += ' neutral'; // Cas où la moyenne est non disponible
  } else if (moyenne >= 10) {
    className += ' success'; // Cas où la moyenne est supérieure ou égale à 10
  } else {
    className += ' failure'; // Cas où la moyenne est inférieure à 10
  }
  
  return (
    <div className={className}  >
      <div className="validation-item">
        <img src="student.png" alt="Description de l'étudiant" />
        <span onClick={onClick}>{nom}</span>
        <span>{date}</span>
        <span>{moyenne}</span> {/* Affichage de la moyenne ici */}
      </div>
    </div>
  );
};

export default ValidationElement;
