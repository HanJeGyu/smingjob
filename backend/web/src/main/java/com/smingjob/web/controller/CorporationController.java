package com.smingjob.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.smingjob.web.domain.CorporationDTO;
import com.smingjob.web.enttites.Corporation;
import com.smingjob.web.repositories.CorporationRepository;

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
 * CorporationController
 */
@RestController
@RequestMapping("/corporation")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)

public class CorporationController {

    @Autowired CorporationDTO dto;
    @Autowired CorporationRepository repo;
    @Autowired ModelMapper modelMapper;

    @Bean
    public ModelMapper modelMapper(){
        ModelMapper modelMapper = new ModelMapper ();
        return modelMapper;
    }

    @DeleteMapping("/{id}")
    public void	deleteById(@PathVariable String id){    
         repo.deleteById(Long.parseLong(id));
    }
 
    @GetMapping("")
    public Iterable<CorporationDTO> findAll(){
        Iterable<Corporation> entities = repo.findAll();
     //    System.out.println("findall 진입");
        List<CorporationDTO> list = new ArrayList<>();
        for(Corporation s: entities){
             CorporationDTO noti = modelMapper.map(s, CorporationDTO.class);
             list.add(noti);
          }        
     return list;
    }
    @GetMapping("/CorporationContent/{id}")
    public CorporationDTO findById(@PathVariable String id) {
     return modelMapper.map(repo.findById(Long.parseLong(id))
             .orElseThrow(EntityNotFoundException::new),
             CorporationDTO.class);
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
    @PutMapping("/modify/{id}")
    public HashMap<String, String> modify(@RequestBody CorporationDTO dto,@PathVariable String id) {
     //    System.out.println("수정"+dto.toString());
        HashMap<String, String> map = new HashMap<>();
        Corporation entity = repo.findById(Long.parseLong(id)).get();
        entity.setCorSeq(Long.parseLong(id));
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
   
     //    System.out.println("entity 저장:"+entity.toString());
        repo.save(entity);
        map.put("result", "SUCCESS");
       return map;
    }   

}