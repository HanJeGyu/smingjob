package com.smingjob.web.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.smingjob.web.domain.InterviewerDTO;
import com.smingjob.web.enttites.Interviewer;
import com.smingjob.web.repositories.InterviewerRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/interviewers")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)

public class InterviewerController {
   @Autowired
   InterviewerDTO dto;
   @Autowired
   InterviewerRepository repo;
   @Autowired
   ModelMapper modelMapper;

   //탈퇴
   @DeleteMapping("/{itvSeq}")
   public HashMap<String, Object> deleteById(@PathVariable String itvSeq) {
      HashMap<String, Object> map = new HashMap<>();
      try{
         repo.deleteById(Long.parseLong(itvSeq));
         map.put("result", "SUCCESS");
      }
      catch(Exception e){
         System.out.println(e);
         map.put("result", "FAIL");
      }
      return map;
   }


   //회원가입시 ID중복확인
   @GetMapping("/checkId/{itvId}")
   public Long checkId(@PathVariable String itvId) {
      return repo.countByItvId(itvId);
   }

   //내 정보 
   @GetMapping("/{itvid}")
      public InterviewerDTO findByItvId(@PathVariable String itvid) {
      return modelMapper.map(repo.findByItvId(itvid).get(), InterviewerDTO.class);
   }
   
   //내 pr목록
   @GetMapping("/pr/{itvSeq}")
      public InterviewerDTO findByItvSeq(@PathVariable String itvSeq) {
      return modelMapper.map(repo.findByItvSeq(Long.parseLong(itvSeq)).get(), InterviewerDTO.class);
   }

   //정보수정
   @PutMapping("/modify")
   public HashMap<String, String> modify(@RequestBody InterviewerDTO rdto) {
      HashMap<String, String> map = new HashMap<>();
      try{
         repo.updateByItvId(rdto.getItvId(), rdto.getPwd(), rdto.getName(), 
                           rdto.getPhone(), rdto.getEmail(), rdto.getArea(), rdto.getLocation());
         map.put("result", "SUCCESS");
      }
      catch(Exception e){
         System.out.println(e);
         map.put("result", "FAIL");
      }
      return map;
   }

   //로긴
   @PostMapping("/login")
   public InterviewerDTO login(@RequestBody InterviewerDTO rdto) {
      try {
         return modelMapper.map(repo.findByItvIdAndPwd(rdto.getItvId(), rdto.getPwd()), InterviewerDTO.class);
      } catch (Exception e) {
         return null;
      }
   }

   //가입
   @PostMapping("/join")
   public HashMap<String, Object> join(@RequestBody InterviewerDTO rdto) {
      HashMap<String, Object> map = new HashMap<>();
      SimpleDateFormat yyyymmdd = new SimpleDateFormat("yyyyMMdd");
      String dateJoin = yyyymmdd.format(new Date());
      try {
         repo.save(Interviewer.builder()
                              .itvId(rdto.getItvId())
                              .pwd(rdto.getPwd())
                              .name(rdto.getName())
                              .birth(rdto.getBirth())
                              .phone(rdto.getPhone())
                              .email(rdto.getEmail())
                              .area(rdto.getArea())
                              .location(rdto.getLocation())
                              .dateJoin(dateJoin)
                              .build());
         map.put("result", "SUCCESS");
      }catch(Exception e){
         System.out.println("회원가입 error : " + e);
         map.put("result", "FAIL");
     }
     return map;
   }
   
}