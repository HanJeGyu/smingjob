package com.admin.web.controller;

import java.util.List;
import java.util.Map;

import com.admin.web.domain.ApplicantDTO;
import com.admin.web.domain.InterviewerDTO;
import com.admin.web.enttites.Applicant;
import com.admin.web.repositories.ApplicantRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
  

    //공고디테일 내 지원자 리스트
    @GetMapping("/{noticeSeq}")
    public List<Applicant> getApplicants(@PathVariable String noticeSeq){
        return repo.getApplicantList(Long.parseLong(noticeSeq));
    }
    
}