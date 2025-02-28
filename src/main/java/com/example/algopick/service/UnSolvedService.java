package com.example.algopick.service;

import com.example.algopick.entity.ProblemEntity;
import com.example.algopick.repository.ProblemRepository;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Random;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UnSolvedService {
    private final ProblemRepository problemRepository;
    private final Random random = new Random();

//    public UnSolvedService(ProblemRepository problemRepository){
//        this.problemRepository = problemRepository;
//    }

    public ProblemEntity getRandomUnsolvedProblem(){
        List<ProblemEntity> unsolvedProblems = problemRepository.findBySolvedFalse();

        if(unsolvedProblems.isEmpty()){
            return null;
        }

        int randomIndex = random.nextInt(unsolvedProblems.size());

        return unsolvedProblems.get(randomIndex);
    }

    @Transactional
    public ProblemEntity markAsSolved(Integer id) {
        ProblemEntity problem = problemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("해당 ID의 문제를 찾을 수 없음"));

        problem.setSolved(true);  // solved 값 변경
        return problemRepository.save(problem);
    }
}
