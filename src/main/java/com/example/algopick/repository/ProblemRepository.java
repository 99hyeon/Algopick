package com.example.algopick.repository;

import com.example.algopick.entity.ProblemEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProblemRepository extends JpaRepository<ProblemEntity, Integer> {

    List<ProblemEntity> findBySolvedFalse();

}
