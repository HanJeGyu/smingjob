package com.smingjob.web.controller;

import java.util.List;
import java.util.Map;

import com.smingjob.web.domain.AwaiterDTO;
import com.smingjob.web.enttites.Awaiter;
import com.smingjob.web.repositories.AwaiterRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * AwaiterController
 */
@RestController
@RequestMapping("/awaiters")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class AwaiterController {

    @Autowired
    AwaiterRepository repo;
    @Autowired
    AwaiterDTO dto;

    /* 개인회원 마이페이지 지원현황 */
    @GetMapping("/aliveList/{itvSeq}")
    public List<Map<String,Object>> aliveList(@PathVariable String itvSeq) {
        return repo.findAliveList(Long.parseLong(itvSeq));
    }

    /* 기업회원 마이페이지 공고목록-면접자목록(modal) */
    @GetMapping("/{liveSeq}")
    public List<Map<String,Object>> awaiterList(@PathVariable String liveSeq) {
        return repo.findAwaiterList(Long.parseLong(liveSeq));
    } 

    /* 기업이 면접자 연락처 열람 */
    @PutMapping("/lookphone")
    public void lookphone(@RequestBody AwaiterDTO rdto) {
        repo.updateResult(rdto.getLiveSeq(), rdto.getItvSeq());
    }
}