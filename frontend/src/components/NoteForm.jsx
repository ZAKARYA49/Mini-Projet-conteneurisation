import React, { useState } from 'react';
import './NoteForm.css'; 
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const NoteForm = () => {
  const { id } = useParams();
  const [course, setCourse] = useState('');
  const [note, setNote] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/etudiants/notes/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nomDuCours: course,
          valeurDeNote: parseFloat(note),
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout de la note');
      }

      alert('Note ajoutée avec succès !');
      setCourse('');
      setNote('');
      navigate(`/etudiants/${id}/notes`); 
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Ajouter une note</h1>
      <div className="content"> 
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input
            className='nbrr'
              type="text"
              id="cour"
              name="cour"
              placeholder="Cour"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              id="note"
              name="note"
              placeholder="Note"
          
              value={note}
              className='nbrr1'
              onChange={(e) => setNote(e.target.value)}
              required
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
