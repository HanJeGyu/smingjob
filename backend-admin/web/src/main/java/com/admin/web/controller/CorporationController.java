package com.admin.web.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.admin.web.domain.CorporationDTO;
import com.admin.web.enttites.Corporation;
import com.admin.web.repositories.CorporationRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
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
 * CorporationController
 */
@RestController
@RequestMapping("/corporations")
@CrossOrigin(origins = "http://localhost:3001", maxAge = 3600)

public class CorporationController {

   @Autowired CorporationDTO dto;
   @Autowired CorporationRepository repo;
   @Autowired ModelMapper modelMapper;

   //삭제
   @DeleteMapping("/{id}")
   public void	deleteById(@PathVariable String id){    
      repo.deleteById(Long.parseLong(id));
   }
 
   //기업회원 리스트
   @GetMapping("")
   public Iterable<CorporationDTO> findAll(){
      Iterable<Corporation> entities = repo.findAll(Sort.by(Sort.Direction.DESC, "corSeq"));
      List<CorporationDTO> list = new ArrayList<>();
      for(Corporation s: entities){
            CorporationDTO cop = modelMapper.map(s, CorporationDTO.class);
            list.add(cop);
         }
         System.out.println(list);        
   return list;
   }   
}