package com.admin.web.controller;

import java.util.List;
import java.util.Map;

import com.admin.web.enttites.Applicant;
import com.admin.web.repositories.ApplicantRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
   @PutMapping("")
   public void modify(@RequestBody Map<String, Object> rdto) {
      Applicant entity = repo.findById(Long.parseLong(rdto.get("applicantSeq").toString())).get();
      entity.setAppState(rdto.get("appState").toString());
      repo.save(entity);
   }
} 