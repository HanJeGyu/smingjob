package com.admin.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.admin.web.domain.NoticeDTO;
import com.admin.web.enttites.Notice;
import com.admin.web.repositories.NoticeRepository;

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
@RequestMapping("/notices")
@CrossOrigin(origins = "http://localhost:3001", maxAge = 3600) 

public class NoticeController {    
    @Autowired NoticeDTO notice;    
    @Autowired ModelMapper modelMapper;
    @Autowired NoticeRepository repo;
 
    @DeleteMapping("/{id}")
   public void	deleteById(@PathVariable String id){    
        // System.out.println("deleteById title :" +id);   
        repo.deleteById(Long.parseLong(id));
   }

   @GetMapping("")
   public Iterable<NoticeDTO> findAll(){
       Iterable<Notice> entities = repo.findAll();
    //    System.out.println("findall 진입");
       List<NoticeDTO> list = new ArrayList<>();
       for(Notice s: entities){
            NoticeDTO noti = modelMapper.map(s, NoticeDTO.class);
            list.add(noti);
         }        
    return list;
   }
   @GetMapping("/noticeDetail/{id}")
   public NoticeDTO findById(@PathVariable String id) {
    return modelMapper.map(repo.findById(Long.parseLong(id))
            .orElseThrow(EntityNotFoundException::new),
            NoticeDTO.class);
   }

   @GetMapping("/{noticeSeq}")
   public NoticeDTO findByNoticeSeq(@PathVariable String noticeSeq) {
   return modelMapper.map(repo.findByNoticeSeq(Long.parseLong(noticeSeq)).get(), NoticeDTO.class);
}


   @PostMapping("/upload")
   public HashMap<String, String> save(@RequestBody NoticeDTO dto) {
    //    System.out.println("업로드"+dto.toString());
       HashMap<String, String> map = new HashMap<>();
       Notice entity = new Notice();
       entity.setTitle(dto.getTitle());
       entity.setCorName(dto.getCorName());
       entity.setContent(dto.getContent());        
       entity.setState(dto.getState());
       entity.setCareer(dto.getCareer());
       entity.setArea(dto.getArea());
       entity.setStartDate(dto.getStartDate());
       entity.setStartTime(dto.getStartTime());
       entity.setTagLocation(dto.getTagLocation());
       entity.setTagAttribute(dto.getTagAttribute());
       entity.setTagCareer(dto.getTagCareer());
  
    //    System.out.println("entity 저장:"+entity.toString());
       repo.save(entity);
       map.put("result", "SUCCESS");
      return map;
   }   
   @PutMapping("/modify/{noticeSeq}")
   public HashMap<String, String> modify(@RequestBody NoticeDTO dto,@PathVariable String noticeSeq) {
    //    System.out.println("수정"+dto.toString());
       HashMap<String, String> map = new HashMap<>();
       Notice entity = repo.findByNoticeSeq(Long.parseLong(noticeSeq)).get();
       entity.setNoticeSeq(Long.parseLong(noticeSeq));
       entity.setTitle(dto.getTitle());
       entity.setCorName(dto.getCorName());
       entity.setContent(dto.getContent());       
       entity.setState(dto.getState());
       entity.setCareer(dto.getCareer());
       entity.setArea(dto.getArea());
       entity.setStartDate(dto.getStartDate());
       entity.setStartTime(dto.getStartTime());
       entity.setTagLocation(dto.getTagLocation());
       entity.setTagAttribute(dto.getTagAttribute());
       entity.setTagCareer(dto.getTagCareer());
  
    //    System.out.println("entity 저장:"+entity.toString());
       repo.save(entity);
       map.put("result", "SUCCESS");
      return map;
   }   
}
