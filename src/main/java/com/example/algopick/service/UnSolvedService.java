package com.example.algopick.service;

import com.example.algopick.entity.ProblemEntity;
import com.example.algopick.repository.ProblemRepository;
import java.util.List;
import java.util.Random;
import org.springframework.stereotype.Service;

@Service
public class UnSolvedService {
    private final ProblemRepository problemRepository;
    private final Random random = new Random();

    public UnSolvedService(ProblemRepository problemRepository){
        this.problemRepository = problemRepository;
    }

    public ProblemEntity getRandomUnsolvedProblem(){
        List<ProblemEntity> unsolvedProblems = problemRepository.findBySolvedFalse();

        if(unsolvedProblems.isEmpty()){
            return null;
        }

        int randomIndex = random.nextInt(unsolvedProblems.size());

        return unsolvedProblems.get(randomIndex);
    }
}
