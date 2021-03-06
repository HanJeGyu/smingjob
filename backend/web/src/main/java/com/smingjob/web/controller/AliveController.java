package com.smingjob.web.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.smingjob.web.domain.AliveDTO;
import com.smingjob.web.enttites.Alive;
import com.smingjob.web.repositories.AliveRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
      repo.deleteById(Long.parseLong(id));
   }

   @GetMapping("")
   public Iterable<AliveDTO> findAll() throws ParseException {
      Iterable<Alive> entities = repo.findAll(Sort.by(Sort.Direction.DESC, "startDate"));
      List<AliveDTO> list = new ArrayList<>();

      SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmm");
      Date now = new Date();
      String state = "";

      for (Alive s : entities) {
         AliveDTO live = modelMapper.map(s, AliveDTO.class);

         String dbDay = live.getStartDate().replace("-", "");
         String dbTime = live.getStartTime().replace(":", "");
         String dbDayPlusTime = dbDay + dbTime;
         Date dbDate = dateFormat.parse(dbDayPlusTime);

         Long stateTime = (now.getTime() - dbDate.getTime()) / 60000;

         if (-10 <= stateTime && stateTime <= 70) {          
            state = "진행중";
         } else if (stateTime < -10) {    
            state = "진행 예정";
         } else if (stateTime > 70) {      
            state = "종료";
         }

         if (live.getState().equals(state)) {         
         } else {      
            repo.updateState(live.getLiveSeq(), state);
            live.setState(state);
         }

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