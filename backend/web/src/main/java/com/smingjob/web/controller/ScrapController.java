package com.smingjob.web.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

import com.smingjob.web.domain.ScrapDTO;
import com.smingjob.web.enttites.Applicant;
import com.smingjob.web.enttites.Scrap;
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
    public HashMap<String, String> Scrap(@RequestBody ScrapDTO dto) {
        HashMap<String, String> map = new HashMap<>();
        SimpleDateFormat yyyymmdd = new SimpleDateFormat("yyyyMMdd");
        String dateScrap = yyyymmdd.format(new Date());
        dto.setDateScrap(dateScrap);
        // Scrap s = new Scrap();
        System.out.println("corse =========" +dto.getCorSeq() + dto.getCorSeq().getClass());
        System.out.println("pr_seq=========" + dto.getPrSeq().getClass());
        System.out.println(dto);
        // s.setCorporation(dto.getCorSeq());
        repo.save(modelMapper.map(dto, Scrap.class));

        map.put("result", "SUCCESS");
        return map;
    }
}