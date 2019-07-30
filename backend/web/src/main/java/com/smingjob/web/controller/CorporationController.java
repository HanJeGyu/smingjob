package com.smingjob.web.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.smingjob.web.domain.CorporationDTO;
import com.smingjob.web.enttites.Corporation;
import com.smingjob.web.repositories.CorporationRepository;

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
 * CorporationController
 */
@RestController
@RequestMapping("/corporations")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)

public class CorporationController {

   @Autowired CorporationDTO dto;
   @Autowired CorporationRepository repo;
   @Autowired ModelMapper modelMapper;

   @DeleteMapping("/{corSeq}")
   public HashMap<String, Object> deleteById(@PathVariable String corSeq){    
      HashMap<String, Object> map = new HashMap<>();
      try{
         repo.deleteById(Long.parseLong(corSeq));
         map.put("result", "SUCCESS");
      }
      catch(Exception e){
         System.out.println(e);
         map.put("result", "FAIL");
      }
      return map;
   }
 

   @GetMapping("/CorporationContent/{id}")
   public CorporationDTO findById(@PathVariable String id) {
   return modelMapper.map(repo.findById(Long.parseLong(id))
            .orElseThrow(EntityNotFoundException::new),
            CorporationDTO.class);
   }

   @GetMapping("/checkId/{corId}")
   public Long checkId(@PathVariable String corId) {
      return repo.countByCorId(corId);
   }

   @GetMapping("/{corId}")
   public CorporationDTO findByCorId(@PathVariable String corId) {
      return modelMapper.map(repo.findByCorId(corId).get(), CorporationDTO.class);
   }

   @PutMapping("/modify")
   public HashMap<String, String> modify(@RequestBody CorporationDTO rdto) {
      HashMap<String, String> map = new HashMap<>();
      try{
         repo.updateByCorId(rdto.getCorId(), rdto.getPwd(), rdto.getName(), 
                           rdto.getCeoName(), rdto.getArea(), rdto.getPmName(),
                           rdto.getPmPhone(), rdto.getPmEmail(), rdto.getCity(), rdto.getHomepage());
         map.put("result", "SUCCESS");
      }
      catch(Exception e){
         System.out.println(e);
         map.put("result", "FAIL");
      }
      return map;

   }

   @PostMapping("/login")
   public CorporationDTO login(@RequestBody CorporationDTO rdto) {
      try {
         return modelMapper.map(repo.findByCorIdAndPwd(rdto.getCorId(), rdto.getPwd()), CorporationDTO.class);
      } catch (Exception e) {
         return null;
      }
   }

   @PostMapping("/join")
   public HashMap<String, String> join(@RequestBody CorporationDTO rdto) {
      System.out.println("진입확인");
      HashMap<String, String> map = new HashMap<>();
      SimpleDateFormat yyyymmdd = new SimpleDateFormat("yyyyMMdd");
      String dateJoin = yyyymmdd.format(new Date());
      try {
         repo.save(Corporation.builder()
                              .corId(rdto.getCorId())
                              .pwd(rdto.getPwd())
                              .corRegNo(rdto.getCorRegNo())
                              .name(rdto.getName())
                              .ceoName(rdto.getCeoName())
                              .area(rdto.getArea())
                              .pmName(rdto.getPmName())
                              .pmPhone(rdto.getPmPhone())
                              .pmEmail(rdto.getPmEmail())
                              .homepage(rdto.getHomepage())
                              .city(rdto.getCity())
                              .dateJoin(dateJoin)
                              .build());
         map.put("result", "SUCCESS");
         return map;
      }catch(Exception e){
         System.out.println("회원가입 error : " + e);
         map.put("result", "FAIL");
         return map;
     }
   }
}