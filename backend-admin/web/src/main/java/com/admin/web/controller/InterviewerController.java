package com.admin.web.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.admin.web.domain.InterviewerDTO;
import com.admin.web.enttites.Interviewer;
import com.admin.web.repositories.InterviewerRepository;

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

   @DeleteMapping("/{id}")
   public void deleteById(@PathVariable String id) {
      repo.deleteById(Long.parseLong(id));
   }

   @GetMapping("")
   public Iterable<InterviewerDTO> findAll() {
      Iterable<Interviewer> entities = repo.findAll();
      System.out.println("findalldddd 진입");
      List<InterviewerDTO> list = new ArrayList<>();
      for (Interviewer s : entities) {
         InterviewerDTO live = modelMapper.map(s, InterviewerDTO.class);
         list.add(live);
         System.out.println(list);
      }
      return list;
   }

   @GetMapping("/InterviewerContent/{id}")
   public InterviewerDTO findById(@PathVariable String id) {
      return modelMapper.map(repo.findById(Long.parseLong(id)).orElseThrow(EntityNotFoundException::new),
            InterviewerDTO.class);
   }

   @GetMapping("/{itvid}")
      public InterviewerDTO findByItvId(@PathVariable String itvid) {
      return modelMapper.map(repo.findByItvId(itvid).get(), InterviewerDTO.class);
   }

   @PutMapping("/modify")
   public HashMap<String, String> modify(@RequestBody InterviewerDTO rdto) {
      HashMap<String, String> map = new HashMap<>();
      repo.updateByItvId(rdto.getItvId(), rdto.getPwd(), rdto.getName(), 
                        rdto.getPhone(), rdto.getEmail(), rdto.getArea(), rdto.getLocation());
      map.put("result", "SUCCESS");
      return map;
   }
}