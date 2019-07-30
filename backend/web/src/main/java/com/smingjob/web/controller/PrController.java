package com.smingjob.web.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityNotFoundException;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.smingjob.web.domain.PrDTO;
import com.smingjob.web.enttites.Pr;
import com.smingjob.web.repositories.PrRepository;

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
@RequestMapping("/prs")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)

public class PrController {
    @Autowired
    PrDTO dto;
    @Autowired
    PrRepository repo;
    @Autowired
    ModelMapper modelMapper;

    //마이페이지-내 pr목록에서 삭제
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable String id) {
        // System.out.println("deleteById title :" +id);
        repo.deleteById(Long.parseLong(id));
    }

    //PR리스트
    @GetMapping("")
    public Iterable<PrDTO> findAll() {
        Iterable<Pr> entities = repo.findAll(Sort.by(Sort.Direction.DESC, "prSeq"));        
        List<PrDTO> list = new ArrayList<>();
        for (Pr s : entities) {
            PrDTO pr = modelMapper.map(s, PrDTO.class);
            list.add(pr);         
        }
        return list;
    }

    //PR 검색
    @GetMapping("/search/{keyword}")
    public Iterable<PrDTO> search(@PathVariable String keyword) {
        Iterable<Pr> entities = repo.searchAll(keyword);        
        List<PrDTO> list = new ArrayList<>();
        for (Pr s : entities) {
            PrDTO pr = modelMapper.map(s, PrDTO.class);
            list.add(pr);
        }
        return list;
    }

    //개인 마이페이지에서 본인PR목록
    @GetMapping("{itvSeq}")
    public List<Map<String, Object>> findAllAndCount(@PathVariable String itvSeq) {
        return repo.findAllAndCount(Long.parseLong(itvSeq));
    }

    // 기업 마이페이지에서 스크랩한 PR목록
    @GetMapping("/cor/{corSeq}")
    public List<Map<String, Object>> findAllById(@PathVariable String corSeq) { 
        return repo.corFindAllById(Long.parseLong(corSeq));
    }

    //PR디테일
    @GetMapping("/PrDetail/{prSeq}")
    public PrDTO findByPrSeq(@PathVariable String prSeq) {      
        return modelMapper.map(repo.findByPrSeq(Long.parseLong(prSeq)).get(0), PrDTO.class);        
    }

    //PR업로드
    @PostMapping("/upload")
    public HashMap<String, String> save(@RequestBody PrDTO dto) {      
        HashMap<String, String> map = new HashMap<>();
        
        Pr entity = new Pr();
        Calendar cal = Calendar.getInstance();
        SimpleDateFormat df = new SimpleDateFormat("yyyyMMdd");
        String date = df.format(cal.getTime());
        
        entity.setItvSeq(dto.getItvSeq());
        entity.setPhone(dto.getPhone());
        entity.setName(dto.getName());
        entity.setTitle(dto.getTitle());
        entity.setContent(dto.getContent());
        entity.setArea(dto.getArea());  
        entity.setTagLocation(dto.getTagLocation());
        entity.setTagAttribute(dto.getTagAttribute());
        entity.setTagCareer(dto.getTagCareer());
        entity.setPrLocation(dto.getPrLocation());
        entity.setDateUpload(date);
        entity.setUrl(dto.getUrl());
        entity.setEmail(dto.getEmail());
       
        repo.save(entity);
        map.put("result", "SUCCESS");
        return map;
    }

    //수정은 못하게 할건데 혹시 몰라 적어둠
    @PutMapping("/modify/{id}")
    public HashMap<String, String> modify(@RequestBody PrDTO dto, @PathVariable String id) {
        // System.out.println("수정"+dto.toString());
        HashMap<String, String> map = new HashMap<>();
        Pr entity = repo.findById(Long.parseLong(id)).get();
        entity.setPrSeq(Long.parseLong(id));
        entity.setItvSeq(dto.getItvSeq());
        entity.setPhone(dto.getPhone());
        entity.setName(dto.getName());
        entity.setTitle(dto.getTitle());
        entity.setContent(dto.getContent());
        entity.setArea(dto.getArea());
        entity.setTagLocation(dto.getTagLocation());
        entity.setTagAttribute(dto.getTagAttribute());
        entity.setTagCareer(dto.getTagCareer());
        entity.setDateUpload(dto.getDateUpload());
        entity.setUrl(dto.getUrl());
        entity.setEmail(dto.getEmail());
        // System.out.println("entity 저장:"+entity.toString());
        repo.save(entity);
        map.put("result", "SUCCESS");
        return map;
    }

}
