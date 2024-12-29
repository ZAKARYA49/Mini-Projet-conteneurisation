package com.example.demo;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "ETUDIANTS")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_de_creation", nullable = false, updatable = false)
    private Date dateDeCréation;


    public Student() {
    }
    public Student(String name) {
        this.name = name;
    }



    @PrePersist
    protected void onCreate() {
        dateDeCréation = new Date();
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDateDeCréation() {
        return dateDeCréation;
    }

}
