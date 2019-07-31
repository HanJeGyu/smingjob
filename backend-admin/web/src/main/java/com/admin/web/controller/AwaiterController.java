package com.admin.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.admin.web.enttites.Alive;
import com.admin.web.enttites.Awaiter;
import com.admin.web.enttites.Interviewer;
import com.admin.web.repositories.ApplicantRepository;
import com.admin.web.repositories.AwaiterRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * AwaiterController
 */
@RestController
@RequestMapping("/awaiters")
@CrossOrigin(origins = "http://localhost:3001", maxAge = 3600)
public class AwaiterController {

    @Autowired
    AwaiterRepository repo;
    @Autowired
    ApplicantRepository appRepo;

    /* 면접방 생성시 면접자 목록 생성 */
    @PostMapping("")
    public HashMap<String, Object> setAwaiter(@RequestBody HashMap<String, Object> rdto){
        System.out.println(rdto.get("noticeSeq") + " : " + rdto.get("liveSeq"));
        HashMap<String, Object> map = new HashMap<>();
        
        List<Awaiter> entities = new ArrayList<Awaiter>();

        Alive alive = new Alive();
        alive.setLiveSeq(Long.parseLong(rdto.get("liveSeq").toString()));
        try {
            for(Map<String, Object> s : appRepo.getAliveCandidate(Long.parseLong(rdto.get("noticeSeq").toString()))){
                Interviewer interviewer = new Interviewer();
                interviewer.setItvSeq(Long.parseLong(s.get("itvSeq").toString()));
                
                Awaiter awa = new Awaiter();
                awa.setInterviewer(interviewer);
                awa.setAlive(alive);
                awa.setResult("미열람");
                
                entities.add(awa);
            }
            repo.saveAll(entities);
            map.put("result", "SUCCESS");
        } catch (Exception e) {
            System.out.println("면접자 목록 생성 error : " + e);
            map.put("result", "FAIL");
        }
        return map;
    }
}