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

  @GetMapping("/search/{keyword}")
   public Iterable<NoticeDTO> search(@PathVariable String keyword){
      /* System.out.println("search 진입"+keyword); */
       Iterable<Notice> entities = repo.searchAll(keyword);
       List<NoticeDTO> list = new ArrayList<>();
       for(Notice s: entities){
            NoticeDTO noti = modelMapper.map(s, NoticeDTO.class);
            list.add(noti);
         }      
        // System.out.println("noti"+entities);
        
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

   /* 기업회원 마이페이지 공고 목록 */
   @GetMapping("/noticeLiveList/{corSeq}")
   public List<Map<String, Object>> noticeLiveList(@PathVariable String corSeq){
      return repo.getNoticeLiveList(Long.parseLong(corSeq));
   }
}
