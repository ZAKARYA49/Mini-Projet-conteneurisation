import React, { useEffect, useState } from 'react';
import './ValidationForm.css';
import ValidationElement from './ValidationForm.jsx';
import { useNavigate } from 'react-router-dom';


const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchStudentsWithNotes = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/etudiants');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des étudiants');
        }
        const students = await response.json();

        // Récupérer les notes et calculer la moyenne pour chaque étudiant
        const studentsWithNotes = await Promise.all(
          students.map(async (student) => {
            try {
              const notesResponse = await fetch(`http://localhost:8080/api/etudiants/notes/${student.id}`);
              const notes = await notesResponse.json();
              const average = calculateAverage(notes); // Calcul de la moyenne
              return { ...student, average }; // Ajouter la moyenne à chaque étudiant
            } catch {
              return { ...student, average: null }; // Si les notes échouent, la moyenne sera nulle
            }
          })
        );

        setStudents(studentsWithNotes);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentsWithNotes();
  }, []);

  const calculateAverage = (notes) => {
    if (!notes || notes.length === 0) return null;
    console.log("voici lq moyennnne " ,notes);
    let total = 0;  // Initialiser une variable pour la somme
  
    // Boucle pour additionner les valeurs de chaque note
    for (let i = 0; i < notes.length; i++) {
      total += notes[i].valeurDeNote;  // Ajouter la valeur de la note à la somme totale
    }
   console.log("voici lq moyennnne " ,total);
    // Retourner la moyenne
    return total / notes.length;
  };
  const handleStudentClick = (id) => {
    navigate(`/etudiants/${id}/notes`);
  };


 

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <>
      <h1>Liste des étudiants</h1>
      <div className="student-list">
        {students.length > 0 ? (
          students.map((student) => (
            <ValidationElement
              key={student.id}
              nom={student.name}
              date={formatDate(student.dateDeCréation)}
              moyenne={student.average != null ? student.average : 'Pas de notes'} 
              onClick={() => handleStudentClick(student.id)}
              // Formater la moyenne avec 2 décimales
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
      <button>
        <a href="/addstd" className="add-student-link">Ajouter un étudiant</a>
      </button>
    </>
  );
};

export default StudentList;
