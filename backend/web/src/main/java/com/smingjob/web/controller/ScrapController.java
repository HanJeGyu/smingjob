package com.smingjob.web.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

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
        System.out.println("scrapSeq===="+scrapSeq);
        return scrapSeq;
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable String id) {
        // System.out.println("deleteById title :" +id);
        repo.deleteById(Long.parseLong(id));
    }

    @GetMapping("/{corSeq}/{prSeq}")
    public String checkCount(@PathVariable String corSeq, @PathVariable String prSeq) {
      /*   System.out.println("corSeq====="+corSeq);
        System.out.println("prSeq======"+prSeq);
        System.out.println("count====="+repo.checkCount(corSeq, prSeq)); */
        return repo.checkCount(corSeq, prSeq);
    }

    @GetMapping("/getScrapSeq/{corSeq}/{prSeq}")
    public String getScrapSeq(@PathVariable String corSeq, @PathVariable String prSeq) {
       /*  System.out.println("corSeq====="+corSeq);
        System.out.println("prSeq======"+prSeq);
        System.out.println("count====="+repo.checkCount(corSeq, prSeq)); */
        return repo.getScrapSeq(corSeq, prSeq);
    }
    

}