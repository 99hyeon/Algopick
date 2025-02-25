package com.example.algopick.controller;

import com.example.algopick.entity.ProblemEntity;
import com.example.algopick.service.UnSolvedService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/problems")
public class ProblemController {
    private final UnSolvedService unSolvedService;

    public ProblemController(UnSolvedService unSolvedService){
        this.unSolvedService = unSolvedService;
    }

    @GetMapping("/random")
    public ProblemEntity getRandomUnsolvedProblem(){
        ProblemEntity problem = unSolvedService.getRandomUnsolvedProblem();

        if(problem == null){
            throw new RuntimeException("안 푼 문제 없음");
        }

        return problem;
    }
}
