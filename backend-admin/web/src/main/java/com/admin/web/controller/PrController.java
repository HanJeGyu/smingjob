package com.admin.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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
@RequestMapping("/pr")
@CrossOrigin(origins = "http://localhost:3001", maxAge = 3600)

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
            PrDTO noti = modelMapper.map(s, PrDTO.class);
            list.add(noti);
        }
        return list;
    }

    @GetMapping("/PrContent/{id}")
    public PrDTO findById(@PathVariable String id) {
        return modelMapper.map(repo.findById(Long.parseLong(id)).orElseThrow(EntityNotFoundException::new),
                PrDTO.class);
    }

    @PutMapping("/modify/{id}")
    public HashMap<String, String> modify(@RequestBody PrDTO dto, @PathVariable String id) {
        // System.out.println("수정"+dto.toString());
        HashMap<String, String> map = new HashMap<>();
        Pr entity = repo.findById(Long.parseLong(id)).get();
        entity.setPrSeq(Long.parseLong(id));
        entity.setItvSeq(dto.getItvSeq());
        entity.setPhone(dto.getPhone());
        entity.setTitle(dto.getTitle());
        entity.setContent(dto.getContent());
        entity.setArea(dto.getArea());
        entity.setPrLocation(dto.getPrLocation());
        entity.setTagLocation(dto.getTagLocation());
        entity.setTagAttribute(dto.getTagAttribute());
        entity.setTagCareer(dto.getTagCareer());
        entity.setDateUpload(dto.getDateUpload());

        // System.out.println("entity 저장:"+entity.toString());
        repo.save(entity);
        map.put("result", "SUCCESS");
        return map;
    }

}
