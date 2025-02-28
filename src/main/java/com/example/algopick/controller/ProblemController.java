package com.example.algopick.controller;

import com.example.algopick.entity.ProblemEntity;
import com.example.algopick.service.UnSolvedService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/problems")
public class ProblemController {
    private final UnSolvedService unSolvedService;

//    public ProblemController(UnSolvedService unSolvedService){
//        this.unSolvedService = unSolvedService;
//    }

    @GetMapping("/random")
    public ProblemEntity getRandomUnsolvedProblem(){
        ProblemEntity problem = unSolvedService.getRandomUnsolvedProblem();

        if(problem == null){
            throw new RuntimeException("안 푼 문제 없음");
        }

        return problem;
    }

    // 문제를 푼 것으로 변경 (solved = true)
    @PatchMapping("/solve/{id}")
    public ProblemEntity markProblemAsSolved(@PathVariable(value = "id") Integer id) {
        return unSolvedService.markAsSolved(id);
    }
}
