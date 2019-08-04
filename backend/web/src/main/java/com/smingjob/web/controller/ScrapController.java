package com.smingjob.web.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

import com.smingjob.web.domain.ScrapDTO;
import com.smingjob.web.enttites.Corporation;
import com.smingjob.web.enttites.Scrap;
import com.smingjob.web.repositories.ScrapRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


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

    //스크랩 insert
    @PostMapping("/")
    public Long Scrap(@RequestBody ScrapDTO rdto) {
        HashMap<String, String> map = new HashMap<>();
        SimpleDateFormat yyyymmdd = new SimpleDateFormat("yyyyMMdd");
        String dateScrap = yyyymmdd.format(new Date());
        dto.setDateScrap(dateScrap);
        dto.setCorSeq(rdto.getCorSeq());
        dto.setPrSeq(rdto.getPrSeq());
        Corporation cors = new Corporation();
        cors.setCorSeq(rdto.getCorSeq());
        Scrap scr = modelMapper.map(dto, Scrap.class);
        scr.setCorporation(cors);
        repo.save(scr);
        long scrapSeq = scr.getScrapSeq();       
        return scrapSeq;
    }

    //스크랩 delete
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable String id) {        
        repo.deleteById(Long.parseLong(id));
    }

    //스크랩 카운트 
    @GetMapping("/{corSeq}/{prSeq}")
    public String checkCount(@PathVariable String corSeq, @PathVariable String prSeq) {
        return repo.checkCount(corSeq, prSeq);
    }

    //스크랩 delete를 위한 스크랩seq 찾기
    @GetMapping("/getScrapSeq/{corSeq}/{prSeq}")
    public String getScrapSeq(@PathVariable String corSeq, @PathVariable String prSeq) {
        return repo.getScrapSeq(corSeq, prSeq);
    }
    

}