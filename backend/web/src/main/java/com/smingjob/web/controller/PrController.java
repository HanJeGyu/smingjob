package com.smingjob.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.smingjob.web.domain.PrDTO;
import com.smingjob.web.enttites.Pr;
import com.smingjob.web.repositories.PrRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
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

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable String id) {
        // System.out.println("deleteById title :" +id);
        repo.deleteById(Long.parseLong(id));
    }

    @GetMapping("")
    public Iterable<PrDTO> findAll() {
        Iterable<Pr> entities = repo.findAll();
        // System.out.println("findall 진입");
        List<PrDTO> list = new ArrayList<>();
        for (Pr s : entities) {
            PrDTO pr = modelMapper.map(s, PrDTO.class);
            list.add(pr);
        }
        return list;
    }

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


    @GetMapping("{itvSeq}")
    public List<Pr> findAllById(@PathVariable String itvSeq) {
        List<Pr> entities = repo.findByItvSeq(Long.parseLong(itvSeq));
        for (Pr s : entities) {
/*             System.out.println(s.get); */
        }
        return entities;
    }

    @GetMapping("/PrDetail/{id}")
    public PrDTO findById(@PathVariable String id) {
        return modelMapper.map(repo.findById(Long.parseLong(id)).orElseThrow(EntityNotFoundException::new),
                PrDTO.class);
    }

    @PostMapping("/upload")
    public HashMap<String, String> save(@RequestBody PrDTO dto) {
        // System.out.println("업로드"+dto.toString());
        HashMap<String, String> map = new HashMap<>();
        
        Pr entity = new Pr();
        entity.setPrSeq(dto.getPrSeq());
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

        // System.out.println("entity 저장:"+entity.toString());
        repo.save(entity);
        map.put("result", "SUCCESS");
        return map;
    }

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
        
        // System.out.println("entity 저장:"+entity.toString());
        repo.save(entity);
        map.put("result", "SUCCESS");
        return map;
    }

}
