package com.example.algopick.repository;

import com.example.algopick.entity.ProblemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProblemRepository extends JpaRepository<ProblemEntity, Integer> {
}
