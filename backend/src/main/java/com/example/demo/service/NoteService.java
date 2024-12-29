package com.example.demo.service;

import com.example.demo.Note;
import com.example.demo.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NoteService {

    @Autowired
    private NoteRepository noteRepository;

    public List<Note> toutesLesNotes(Long idEtudiant) {
        return noteRepository.findByIdEtudiant(idEtudiant);
    }

    public Note ajouterNote(Long idEtudiant, Note note) {
        note.setIdEtudiant(idEtudiant);
        return noteRepository.save(note);
    }
}
