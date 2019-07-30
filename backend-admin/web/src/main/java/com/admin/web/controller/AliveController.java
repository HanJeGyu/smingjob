package com.admin.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.admin.web.domain.AliveDTO;
import com.admin.web.enttites.Alive;
import com.admin.web.repositories.AliveRepository;

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

@RestController
@RequestMapping("/alives")
@CrossOrigin(origins = "http://localhost:3001", maxAge = 3600)

public class AliveController {

   @Autowired
   AliveDTO dto;
   @Autowired
   AliveRepository repo;
   @Autowired
   ModelMapper modelMapper;

   //삭제
   @DeleteMapping("/{id}")
   public void deleteById(@PathVariable String id) {
      repo.deleteById(Long.parseLong(id));
   }

   //면접리스트
   @GetMapping("")
   public Iterable<AliveDTO> findAll() {
      Iterable<Alive> entities = repo.findAll(Sort.by(Sort.Direction.DESC, "liveSeq"));
      List<AliveDTO> list = new ArrayList<>();
      for (Alive s : entities) {
         AliveDTO live = modelMapper.map(s, AliveDTO.class);
         list.add(live);
      }
      return list;
   }

   //면접 업로드
   @PostMapping("/upload")
   public HashMap<String, String> save(@RequestBody AliveDTO dto) {
      // System.out.println("업로드"+dto.toString());
      HashMap<String, String> map = new HashMap<>();

      Alive entity = new Alive();
      entity.setCorSeq(dto.getCorSeq());
      entity.setCorName(dto.getCorName());
      entity.setNoticeSeq(dto.getNoticeSeq());
      entity.setArea(dto.getArea());
      entity.setCareer(dto.getCareer());
      entity.setItvSeq(dto.getItvSeq());
      entity.setItvName(dto.getItvName());
      entity.setItvPhone(dto.getItvPhone());
      entity.setStartDate(dto.getStartDate());
      entity.setStartTime(dto.getStartTime());
      entity.setState(dto.getState());
      entity.setUrl(dto.getUrl());

      try {
         repo.save(entity);
         map.put("liveSeq", repo.findByNoticeSeq(dto.getNoticeSeq()).getLiveSeq().toString());
         map.put("result", "SUCCESS");
      } catch (Exception e) {
         System.out.println("면접 생성 error" + e);
         map.put("result", "FAIL");
      }
      return map;
   }

   //면접 수정 안할건데 일단 써놈
   @PutMapping("/modify/{id}")
   public HashMap<String, String> modify(@RequestBody AliveDTO dto, @PathVariable String id) {
      HashMap<String, String> map = new HashMap<>();
      Alive entity = repo.findById(Long.parseLong(id)).get();
      entity.setLiveSeq(Long.parseLong(id));
      entity.setCorSeq(dto.getCorSeq());
      entity.setCorName(dto.getCorName());
      entity.setState(dto.getState());
      entity.setStartDate(dto.getStartDate());
      entity.setArea(dto.getArea());
      entity.setCareer(dto.getCareer());
      entity.setItvSeq(dto.getItvSeq());
      entity.setItvName(dto.getItvName());
      entity.setItvPhone(dto.getItvPhone());

      repo.save(entity);
      map.put("result", "SUCCESS");
      return map;
   }
}