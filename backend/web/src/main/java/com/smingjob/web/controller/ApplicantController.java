package com.smingjob.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.smingjob.web.domain.ApplicantDTO;
import com.smingjob.web.enttites.Applicant;
import com.smingjob.web.enttites.Notice;
import com.smingjob.web.repositories.ApplicantRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * ApplicantController
 */
@RestController
@RequestMapping("/applicants")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class ApplicantController {

    @Autowired
    ApplicantRepository repo;
    @Autowired
    ModelMapper modelMapper;

    /* 개인회원 마이페이지 지원현황 */
       @GetMapping("/noticeList/{itvSeq}")
    public List<Map<String,Object>> noticeList(@PathVariable String itvSeq) {
        return repo.getNoticeList(Long.parseLong(itvSeq));
    }  
 

    //공고디테일에서 면접 지원하기
    @PostMapping("/{itvSeq}apply{noticeSeq}")
    public HashMap<String, String> apply(@PathVariable String itvSeq, @PathVariable String noticeSeq) {   
        /* System.out.println("======================"+itvSeq+ noticeSeq); */
        HashMap<String, String> map = new HashMap<>();
     
        Long count = Long.parseLong( repo.countApply(Long.parseLong(itvSeq), Long.parseLong(noticeSeq)));
       
        if(count>=1){
            System.out.println("중복");
        }else{
         Notice no = new Notice();
         no.setNoticeSeq(Long.parseLong(noticeSeq));

         Applicant entity = new Applicant();
         entity.setItvSeq(Long.parseLong(itvSeq));
         entity.setNotice(no);
         entity.setAppState("대기");
         repo.save(entity);       
        }

        map.put("result", "SUCCESS");
       return map;
    }  
    
}