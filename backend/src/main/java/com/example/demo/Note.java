package com.example.demo;

import jakarta.persistence.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@Entity
@Table(name = "NOTES")
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nom_du_cours", nullable = false)
    private String nomDuCours;

    @Column(name = "valeur_de_note", nullable = false)
    private double valeurDeNote;

    @Column(name = "id_etudiant", nullable = false)
    private long idEtudiant;

    public Note() {}
    public Note(String nomDuCours, double valeurDeNote, long idEtudiant) {
        this.nomDuCours = nomDuCours;
        this.valeurDeNote = valeurDeNote;
        this.idEtudiant = idEtudiant;
    }

    public void setIdEtudiant(long idEtudiant) {
        this.idEtudiant = idEtudiant;
    }

    public long getId() {
        return id;
    }
    public String getNomDuCours() {
        return nomDuCours;
    }
    public double getValeurDeNote() {
        return valeurDeNote;
    }
    public long getIdEtudiant() {
        return idEtudiant;
    }


}
