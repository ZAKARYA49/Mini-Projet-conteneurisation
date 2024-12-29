package com.example.demo.service;

import com.example.demo.Student;
import com.example.demo.repository.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class EtudiantService {

    @Autowired
    private EtudiantRepository etudiantRepository;

    public Student creerEtudiant(Student etudiant) {
        return etudiantRepository.save(etudiant);
    }

    public List<Student> tousLesEtudiants() {
        return etudiantRepository.findAll();
    }

    public Optional<Student> obtenirEtudiantParId(Long id) {
        return etudiantRepository.findById(id);
    }
}
