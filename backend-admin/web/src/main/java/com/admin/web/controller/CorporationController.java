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

   @DeleteMapping("/{id}")
   public void	deleteById(@PathVariable String id){    
      repo.deleteById(Long.parseLong(id));
   }
 
   @GetMapping("")
   public Iterable<CorporationDTO> findAll(){
      Iterable<Corporation> entities = repo.findAll();
      List<CorporationDTO> list = new ArrayList<>();
      for(Corporation s: entities){
            CorporationDTO cop = modelMapper.map(s, CorporationDTO.class);
            list.add(cop);
         }
         System.out.println(list);        
   return list;
   }

   @GetMapping("/CorporationContent/{id}")
   public CorporationDTO findById(@PathVariable String id) {
   return modelMapper.map(repo.findById(Long.parseLong(id))
            .orElseThrow(EntityNotFoundException::new),
            CorporationDTO.class);
   }

   @GetMapping("/{corId}")
   public CorporationDTO findByCorId(@PathVariable String corId) {
      return modelMapper.map(repo.findByCorId(corId).get(), CorporationDTO.class);
   }

   @PostMapping("/upload")
   public HashMap<String, String> save(@RequestBody CorporationDTO dto) {
   //    System.out.println("업로드"+dto.toString());
      HashMap<String, String> map = new HashMap<>();

      Corporation entity = new Corporation();
      entity.setCorId(dto.getCorId());
      entity.setPwd(dto.getPwd());
      entity.setName(dto.getName()); 
      entity.setCeoName(dto.getCeoName()); 
      entity.setArea(dto.getArea());
      entity.setPmName(dto.getPmName());
      entity.setPmPhone(dto.getPmPhone());
      entity.setHomepage(dto.getHomepage());
      entity.setCity(dto.getCity());
      entity.setDateJoin(dto.getDateJoin());

      repo.save(entity);
      map.put("result", "SUCCESS");
      return map;
   }   

   @PutMapping("/modify")
   public HashMap<String, String> modify(@RequestBody CorporationDTO rdto) {
      HashMap<String, String> map = new HashMap<>();
      repo.updateByCorId(rdto.getCorId(), rdto.getPwd(), rdto.getName(), 
                        rdto.getCeoName(), rdto.getArea(), rdto.getPmName(),
                        rdto.getPmPhone(), rdto.getCity(), rdto.getHomepage());
      map.put("result", "SUCCESS");
      return map;

   }

   @PostMapping("/login")
   public CorporationDTO login(@RequestBody CorporationDTO rdto) {
      try {
         return modelMapper.map(repo.findByCorIdAndPwd(rdto.getCorId(), rdto.getPwd()), CorporationDTO.class);
      } catch (Exception e) {
         return dto;
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