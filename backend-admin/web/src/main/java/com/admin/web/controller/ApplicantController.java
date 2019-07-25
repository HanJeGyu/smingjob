package com.admin.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.admin.web.domain.ApplicantDTO;
import com.admin.web.domain.InterviewerDTO;
import com.admin.web.enttites.Applicant;
import com.admin.web.enttites.Interviewer;
import com.admin.web.repositories.ApplicantRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/applicants")
@CrossOrigin(origins = "http://localhost:3001", maxAge = 3600)
public class ApplicantController {

    @Autowired
    ApplicantRepository repo;
    @Autowired
    ModelMapper modelMapper;
  

    //지원자 리스트 불러오기
    @GetMapping("/{noticeSeq}")
    public List<Map<String,Object>> getApplicants(@PathVariable String noticeSeq){
      return repo.getApplicantList(Long.parseLong(noticeSeq));
    }
    
    //지원자리스트 대기/승인 상태 변경처리
    @PutMapping("/{appSeq}")
   public HashMap<String, String> modify( @PathVariable String appSeq) {   
       HashMap<String, String> map = new HashMap<>();
       Applicant entity = repo.findByApplicantSeq(Long.parseLong(appSeq)).get();
       if(entity.getAppState().equals("승인")){
          entity.setAppState("대기");
       }else{
          entity.setAppState("승인");
       }
       repo.save(entity);
       map.put("result", "SUCCESS");
      return map;
   }   

} 