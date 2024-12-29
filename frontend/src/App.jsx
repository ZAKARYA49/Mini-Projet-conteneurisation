import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importation des composants nécessaires pour les routes
import StudentList from './components/StudentList';
import NoteForm from './components/NoteForm';
import Formu from './components/Formu';
import StudentNotes from './components/StudentNotes';

const App = () => {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<StudentList />} /> 
        <Route path="/addstd" element={  <Formu/> } /> 
        <Route path="/addnote" element={ <div className='addstd'> <NoteForm/> </div>} /> 
        <Route path="/etudiants/:id/notes" element={<StudentNotes />} />
        <Route path="/etudiants/:id/ajouter-note" element={<NoteForm />} />
      </Routes>
    </Router>
  );
};

export default App;
