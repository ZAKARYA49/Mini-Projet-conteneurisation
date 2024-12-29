package com.example.demo.controller;

import com.example.demo.Note;
import com.example.demo.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/etudiants/notes/{idEtudiant}")
@CrossOrigin(origins ="*")
public class NotesController {

    @Autowired
    private NoteService noteService;

    @GetMapping
    public List<Note> listerNotes(@PathVariable Long idEtudiant) {
        return noteService.toutesLesNotes(idEtudiant);
    }

    @PostMapping
    public ResponseEntity<Note> ajouterNote(@PathVariable Long idEtudiant, @RequestBody Note note) {
        return ResponseEntity.status(HttpStatus.CREATED).body(noteService.ajouterNote(idEtudiant, note));
    }
}
