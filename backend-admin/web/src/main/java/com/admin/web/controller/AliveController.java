package com.admin.web.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

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

         // DB의 state값과 실제 state를 비교함.
         if (live.getState().equals(state)) {
         } else {
            repo.updateState(live.getLiveSeq(), state);
            live.setState(state);
         }

         list.add(live);
      }
      return list;
   }

   //면접 업로드
   @PostMapping("/upload")
   public HashMap<String, String> save(@RequestBody AliveDTO dto) {
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
         System.out.println("면접 생성 error : " + e);
         map.put("result", "FAIL");
      }
      return map;
   }

}