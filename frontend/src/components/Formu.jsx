import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Formu.css';

const Formu = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStudent = { name };

    try {
      const response = await fetch('http://localhost:8080/api/etudiants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent),
      });

      if (response.ok) {
        const createdStudent = await response.json();
        alert(`Étudiant créé avec succès : ${createdStudent.name}`);
        setName('');
        navigate('/');
      } else {
        alert('Erreur lors de la création de l’étudiant.');
      }
    } catch (error) {
      console.error('Erreur :', error);
      alert('Une erreur est survenue.');
    }
  };

  return (
    <div className="form-container">
      <h1>Créer un nouvel étudiant</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nom de l'étudiant"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='center'
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Formu;
