package com.smingjob.web.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

import com.smingjob.web.domain.ScrapDTO;
import com.smingjob.web.enttites.Applicant;
import com.smingjob.web.enttites.Corporation;
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
    public HashMap<String, String> Scrap(@RequestBody ScrapDTO rdto) {
        HashMap<String, String> map = new HashMap<>();
        SimpleDateFormat yyyymmdd = new SimpleDateFormat("yyyyMMdd");
        String dateScrap = yyyymmdd.format(new Date());
        dto.setDateScrap(dateScrap);
        dto.setCorSeq(rdto.getCorSeq());
        dto.setPrSeq(rdto.getPrSeq());
        // Scrap s = new Scrap();
        System.out.println("cor_seq ========= " + dto.getCorSeq());
        System.out.println("pr_seq========= " + dto.getPrSeq());
        System.out.println("dateScrap========= " + dto.getDateScrap());
        
/*         Scrap scr = new Scrap();
        scr.setDateScrap(dateScrap);
        scr.setCorporation(modelMapper.map(dto.getCorSeq(), Corporation.class));
        System.out.println(scr.getCorporation());
        repo.save(scr); */

        //System.out.println("after map corSeq : " + modelMapper.map(dto, Scrap.class).getCorporation().getCorSeq());
        // s.setCorporation(dto.getCorSeq());

/*         Corporation cors = new Corporation();
        cors.setCorSeq(5L);
        Scrap src = modelMapper.map(dto, Scrap.class);
        System.out.println("dateScrap ========= " + src.getDateScrap());
        System.out.println("pr_seq ========= " + src.getPr().getPrSeq());
        System.out.println("cor_seq ========= " + src.getCorporation().getCorSeq());
        //repo.save(modelMapper.map(dto, Scrap.class)); */

        Corporation cors = new Corporation();
        cors.setCorSeq(rdto.getCorSeq());

        Scrap scr = modelMapper.map(dto, Scrap.class);
        scr.setCorporation(cors);

        System.out.println("dateScrap ========= " + scr.getDateScrap());
        System.out.println("pr_seq ========= " + scr.getPr().getPrSeq());
        System.out.println("cor_seq ========= " + scr.getCorporation().getCorSeq());

        map.put("result", "SUCCESS");
        return map;
    }
}