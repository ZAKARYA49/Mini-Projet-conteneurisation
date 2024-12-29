package com.example.demo.controller;

import com.example.demo.service.EtudiantService;
import com.example.demo.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/etudiants")
@CrossOrigin(origins ="*")
public class EtudiantsController {

    @Autowired
    private EtudiantService etudiantService;

    @PostMapping
    public ResponseEntity<Student> creerEtudiant(@RequestBody Student etudiant) {
        return ResponseEntity.status(HttpStatus.CREATED).body(etudiantService.creerEtudiant(etudiant));
    }

    @GetMapping
    public List<Student> listerEtudiants() {
        return etudiantService.tousLesEtudiants();
    }

}
