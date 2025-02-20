package com.example.algopick.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "problem")
public class problemEntity {
    @Id
    private Integer id;
    private String category;
    private boolean retry;
    private boolean solved;
}
