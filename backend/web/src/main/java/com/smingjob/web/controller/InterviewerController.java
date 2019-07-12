package com.smingjob.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.smingjob.web.domain.InterviewerDTO;
import com.smingjob.web.enttites.Interviewer;
import com.smingjob.web.repositories.InterviewerRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
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
@RequestMapping("/interviewer")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)

public class InterviewerController {
   @Autowired
   InterviewerDTO dto;
   @Autowired
   InterviewerRepository repo;
   @Autowired
   ModelMapper modelMapper;

   @Bean
   public ModelMapper modelMapper() {
      ModelMapper modelMapper = new ModelMapper();
      return modelMapper;
   }

   @DeleteMapping("/{id}")
   public void deleteById(@PathVariable String id) {
      // System.out.println("deleteById title :" +id);
      repo.deleteById(Long.parseLong(id));
   }

   @GetMapping("")
   public Iterable<InterviewerDTO> findAll() {
      Iterable<Interviewer> entities = repo.findAll();
      // System.out.println("findall 진입");
      List<InterviewerDTO> list = new ArrayList<>();
      for (Interviewer s : entities) {
         InterviewerDTO live = modelMapper.map(s, InterviewerDTO.class);
         list.add(live);
      }
      return list;
   }

   @GetMapping("/InterviewerContent/{id}")
   public InterviewerDTO findById(@PathVariable String id) {
      return modelMapper.map(repo.findById(Long.parseLong(id)).orElseThrow(EntityNotFoundException::new),
            InterviewerDTO.class);
   }

   @PostMapping("/upload")
   public HashMap<String, String> save(@RequestBody InterviewerDTO dto) {
      // System.out.println("업로드"+dto.toString());
      HashMap<String, String> map = new HashMap<>();

      // private String itvId, pwd, name, birth, phone, email, area, location,
      // dateJoin;
      Interviewer entity = new Interviewer();
      entity.setItvId(dto.getItvId());
      entity.setPwd(dto.getPwd());
      entity.setName(dto.getName());
      entity.setBirth(dto.getBirth());
      entity.setPhone(dto.getPhone());
      entity.setEmail(dto.getEmail());
      entity.setArea(dto.getArea());
      entity.setLocation(dto.getLocation());

      // System.out.println("entity 저장:"+entity.toString());
      repo.save(entity);
      map.put("result", "SUCCESS");
      return map;
   }

   @PutMapping("/modify/{id}")
   public HashMap<String, String> modify(@RequestBody InterviewerDTO dto, @PathVariable String id) {
      // System.out.println("수정"+dto.toString());
      HashMap<String, String> map = new HashMap<>();
      Interviewer entity = repo.findById(Long.parseLong(id)).get();
      entity.setItvSeq(Long.parseLong(id));
      entity.setItvId(dto.getItvId());
      entity.setPwd(dto.getPwd());
      entity.setName(dto.getName());
      entity.setBirth(dto.getBirth());
      entity.setPhone(dto.getPhone());
      entity.setEmail(dto.getEmail());
      entity.setArea(dto.getArea());
      entity.setLocation(dto.getLocation());

      // System.out.println("entity 저장:"+entity.toString());
      repo.save(entity);
      map.put("result", "SUCCESS");
      return map;
   }

}