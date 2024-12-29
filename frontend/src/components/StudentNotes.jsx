import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Note from './Note';
import { useNavigate } from 'react-router-dom';

const StudentNotes = () => {
  const { id } = useParams();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/etudiants/notes/${id}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des notes');
        }
        const data = await response.json();
        setNotes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, [id]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <>
      <h1>Notes de l'étudiant</h1>
      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((note) => (
            <Note key={note.id} nom={note.nomDuCours} moyenne={note.valeurDeNote} />
            
          ))
        ) : (
          <div></div>
        )}
      </div>
      <button  onClick={() => navigate(`/etudiants/${id}/ajouter-note`)}>
        Ajouter une note
      </button>
    </>
  );
};

export default StudentNotes;
