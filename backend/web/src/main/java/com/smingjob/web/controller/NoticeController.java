package com.smingjob.web.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityNotFoundException;

import com.smingjob.web.domain.NoticeDTO;
import com.smingjob.web.enttites.Notice;
import com.smingjob.web.repositories.NoticeRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/notices")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600) 

public class NoticeController {    
   @Autowired NoticeDTO notice;    
   @Autowired ModelMapper modelMapper;
   @Autowired NoticeRepository repo;
 
   //공고 리스트
   @GetMapping("")
   public Iterable<NoticeDTO> findAll(){
       Iterable<Notice> entities = repo.findAll(Sort.by(Sort.Direction.DESC, "startDate"));    
       List<NoticeDTO> list = new ArrayList<>();
       for(Notice s: entities){
            NoticeDTO noti = modelMapper.map(s, NoticeDTO.class);
            list.add(noti);
         }        
    return list;
   }

   //공고 검색
  @GetMapping("/search/{keyword}")
   public Iterable<NoticeDTO> search(@PathVariable String keyword){    
       Iterable<Notice> entities = repo.searchAll(keyword);
       List<NoticeDTO> list = new ArrayList<>();
       for(Notice s: entities){
            NoticeDTO noti = modelMapper.map(s, NoticeDTO.class);
            list.add(noti);
         }      
              
    return list;
   }

   //공고디테일
   @GetMapping("/{noticeSeq}")
   public NoticeDTO findByNoticeSeq(@PathVariable String noticeSeq) {
      return modelMapper.map(repo.findByNoticeSeq(Long.parseLong(noticeSeq)).get(), NoticeDTO.class);
   } 

   // 기업회원 마이페이지에서 공고리스트  
   @GetMapping("/noticeLiveList/{corSeq}")
   public List<Map<String, Object>> noticeLiveList(@PathVariable String corSeq){
      return repo.getNoticeLiveList(Long.parseLong(corSeq));
   }
}
