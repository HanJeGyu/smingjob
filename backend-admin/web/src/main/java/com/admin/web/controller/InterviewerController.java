package com.admin.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.admin.web.domain.InterviewerDTO;
import com.admin.web.enttites.Interviewer;
import com.admin.web.repositories.InterviewerRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * InterviewerController
 */
@RestController
@RequestMapping("/interviewers")
@CrossOrigin(origins = "http://localhost:3001", maxAge = 3600)

public class InterviewerController {
   @Autowired
   InterviewerDTO dto;
   @Autowired
   InterviewerRepository repo;
   @Autowired
   ModelMapper modelMapper;

   //삭제
   @DeleteMapping("/{id}")
   public void deleteById(@PathVariable String id) {
      repo.deleteById(Long.parseLong(id));
   }

   //개인회원리스트
   @GetMapping("")
   public Iterable<InterviewerDTO> findAll() {
      Iterable<Interviewer> entities = repo.findAll(Sort.by(Sort.Direction.DESC, "itvSeq"));
      System.out.println("findalldddd 진입");
      List<InterviewerDTO> list = new ArrayList<>();
      for (Interviewer s : entities) {
         InterviewerDTO live = modelMapper.map(s, InterviewerDTO.class);
         list.add(live);
         System.out.println(list);
      }
      return list;
   }

}