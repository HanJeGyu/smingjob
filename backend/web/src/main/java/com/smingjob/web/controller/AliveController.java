package com.smingjob.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.smingjob.web.domain.AliveDTO;
import com.smingjob.web.enttites.Alive;
import com.smingjob.web.repositories.AliveRepository;

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
@RequestMapping("/alives")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)

public class AliveController {

   @Autowired
   AliveDTO dto;
   @Autowired
   AliveRepository repo;
   @Autowired
   ModelMapper modelMapper;

   @DeleteMapping("/{id}")
   public void deleteById(@PathVariable String id) {
      // System.out.println("deleteById title :" +id);
      repo.deleteById(Long.parseLong(id));
   }

   @GetMapping("")
   public Iterable<AliveDTO> findAll() {
      Iterable<Alive> entities = repo.findAll();
      // System.out.println("findall 진입");
      List<AliveDTO> list = new ArrayList<>();
      for (Alive s : entities) {
         AliveDTO live = modelMapper.map(s, AliveDTO.class);
         list.add(live);
      }
      return list;
   }

   @GetMapping("/AliveContent/{id}")
   public AliveDTO findById(@PathVariable String id) {
      return modelMapper.map(repo.findById(Long.parseLong(id)).orElseThrow(EntityNotFoundException::new),
            AliveDTO.class);
   }
}