package com.smingjob.web.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

import com.smingjob.web.domain.ScrapDTO;
import com.smingjob.web.repositories.ScrapRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * ScrapController
 */
@RestController
@RequestMapping("/scraps")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)

public class ScrapController {

    @Autowired
    ScrapDTO dto;
    @Autowired
    ScrapRepository repo;
    @Autowired
    ModelMapper modelMapper;

    @PostMapping("/")
    public HashMap<String, String> join(@RequestBody ScrapDTO dto) {
       HashMap<String, String> map = new HashMap<>();
       SimpleDateFormat yyyymmdd = new SimpleDateFormat("yyyyMMdd");
       String dateScrap = yyyymmdd.format(new Date());


/*        Scrap entity = new Scrap();
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


       try {
          repo.save(Scrap.builder()
                               .itvId(rdto.getItvId())
                               .pwd(rdto.getPwd())
                               .name(rdto.getName())
                               .birth(rdto.getBirth())
                               .phone(rdto.getPhone())
                               .email(rdto.getEmail())
                               .area(rdto.getArea())
                               .location(rdto.getLocation())
                               .dateScrap(dateScrap)
                               .build());
          map.put("result", "SUCCESS");
          return map;
       }catch(Exception e){
          System.out.println("회원가입 error : " + e);
          map.put("result", "FAIL");
          return map;
      }
    } */

    
}