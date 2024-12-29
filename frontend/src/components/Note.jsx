import React from 'react';
import './Note.css';

const Note = ({ nom, moyenne }) => {
  const isValid = moyenne >= 10;

  return (
    <div className="containera">
      <div className={`validation-elementa ${isValid ? 'successa' : 'failurea'}`}>
        <span>{nom}</span>
        <span>{moyenne}</span>
      </div>
    </div>
  );
};

export default Note;
