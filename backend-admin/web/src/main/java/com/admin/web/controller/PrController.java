package com.admin.web.controller;

import java.io.Console;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityNotFoundException;

import com.admin.web.domain.PrDTO;
import com.admin.web.enttites.Pr;
import com.admin.web.repositories.PrRepository;

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

@RestController
@RequestMapping("/prs")
@CrossOrigin(origins = "http://localhost:3001", maxAge = 3600)

public class PrController {
    @Autowired
    PrDTO dto;
    @Autowired
    PrRepository repo;
    @Autowired
    ModelMapper modelMapper;

    //삭제
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable String id) {        
        repo.deleteById(Long.parseLong(id));
    }

    //PR리스트
    @GetMapping("")
    public List<Map<String,Object>> findAll() {
        return repo.getPrList();
    }

    //...
    @GetMapping("/PrDetail/{id}")
    public PrDTO findById(@PathVariable String id) {
        return modelMapper.map(repo.findById(Long.parseLong(id)).orElseThrow(EntityNotFoundException::new),
                PrDTO.class);
    }

    //수정은 안쓸듯
    @PutMapping("/modify/{id}")
    public HashMap<String, String> modify(@RequestBody PrDTO dto, @PathVariable String id) {
        HashMap<String, String> map = new HashMap<>();
        Pr entity = repo.findById(Long.parseLong(id)).get();
        entity.setPrSeq(Long.parseLong(id));
        // entity.setItvSeq(dto.getItvSeq());
        entity.setPhone(dto.getPhone());
        entity.setTitle(dto.getTitle());
        entity.setContent(dto.getContent());
        entity.setArea(dto.getArea());
        entity.setTagLocation(dto.getTagLocation());
        entity.setTagAttribute(dto.getTagAttribute());
        entity.setTagCareer(dto.getTagCareer());
        entity.setDateUpload(dto.getDateUpload());

        repo.save(entity);
        map.put("result", "SUCCESS");
        return map;
    }

}
