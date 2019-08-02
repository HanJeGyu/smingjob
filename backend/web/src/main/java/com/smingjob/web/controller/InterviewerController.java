package com.smingjob.web.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Properties;
import java.util.UUID;
import java.util.function.Predicate;

import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;

import com.smingjob.web.domain.InterviewerDTO;
import com.smingjob.web.enttites.Interviewer;
import com.smingjob.web.repositories.InterviewerRepository;

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
@RequestMapping("/interviewers")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)

public class InterviewerController {
   @Autowired
   InterviewerDTO dto;
   @Autowired
   InterviewerRepository repo;
   @Autowired
   ModelMapper modelMapper;

   //탈퇴
   @DeleteMapping("/{itvSeq}")
   public HashMap<String, Object> deleteById(@PathVariable String itvSeq) {
      HashMap<String, Object> map = new HashMap<>();
      try{
         repo.deleteById(Long.parseLong(itvSeq));
         map.put("result", "SUCCESS");
      }
      catch(Exception e){
         System.out.println(e);
         map.put("result", "FAIL");
      }
      return map;
   }

   //회원가입시 ID중복확인
   @GetMapping("/checkId/{itvId}")
   public Long checkId(@PathVariable String itvId) {
      return repo.countByItvId(itvId);
   }

   //내 정보 
   @GetMapping("/{itvid}")
      public InterviewerDTO findByItvId(@PathVariable String itvid) {
      return modelMapper.map(repo.findByItvId(itvid).get(), InterviewerDTO.class);
   }
   
   //내 pr목록
   @GetMapping("/pr/{itvSeq}")
      public InterviewerDTO findByItvSeq(@PathVariable String itvSeq) {
      return modelMapper.map(repo.findByItvSeq(Long.parseLong(itvSeq)).get(), InterviewerDTO.class);
   }

   //정보수정
   @PutMapping("/modify")
   public HashMap<String, String> modify(@RequestBody InterviewerDTO rdto) {
      HashMap<String, String> map = new HashMap<>();
      try{
         repo.updateByItvId(rdto.getItvId(), rdto.getPwd(), rdto.getName(), 
                           rdto.getPhone(), rdto.getEmail(), rdto.getArea(), rdto.getLocation());
         map.put("result", "SUCCESS");
      }
      catch(Exception e){
         System.out.println(e);
         map.put("result", "FAIL");
      }
      return map;
   }

   //로긴
   @PostMapping("/login")
   public InterviewerDTO login(@RequestBody InterviewerDTO rdto) {
      try {
         return modelMapper.map(repo.findByItvIdAndPwd(rdto.getItvId(), rdto.getPwd()), InterviewerDTO.class);
      } catch (Exception e) {
         return null;
      }
   }

   //가입
   @PostMapping("/join")
   public HashMap<String, Object> join(@RequestBody InterviewerDTO rdto) {
      HashMap<String, Object> map = new HashMap<>();
      SimpleDateFormat yyyymmdd = new SimpleDateFormat("yyyyMMdd");
      String dateJoin = yyyymmdd.format(new Date());
      try {
         repo.save(Interviewer.builder()
                              .itvId(rdto.getItvId())
                              .pwd(rdto.getPwd())
                              .name(rdto.getName())
                              .birth(rdto.getBirth())
                              .phone(rdto.getPhone())
                              .email(rdto.getEmail())
                              .area(rdto.getArea())
                              .location(rdto.getLocation())
                              .dateJoin(dateJoin)
                              .build());
         map.put("result", "SUCCESS");
      }catch(Exception e){
         System.out.println("회원가입 error : " + e);
         map.put("result", "FAIL");
     }
     return map;
   }

   // 임시비밀번호발급, 이메일 보내기
   @PutMapping("/sendMail/{itvId}")
   public HashMap<String, Object> sendMail(@PathVariable String itvId){
      HashMap<String, Object> map = new HashMap<>();
      String em = repo.findEmailByItvId(itvId);
      String pwd = UUID.randomUUID().toString().replace("-","").substring(0,10);

      Properties prop = System.getProperties();
      prop.put("mail.smtp.host", "smtp.gmail.com"); 
      prop.put("mail.smtp.auth", "true"); 
      prop.put("mail.smtp.port", 465);
      prop.put("mail.smtp.ssl.enable", "true"); 
      prop.put("mail.smtp.ssl.trust", "smtp.gmail.com");
      
      Session session = Session.getInstance(prop, new Authenticator() {
         protected PasswordAuthentication getPasswordAuthentication(){
            return new PasswordAuthentication("jobalive01@gmail.com", "smingjob1");
         }
      });

      try {
         MimeMessage msg = new MimeMessage(session);
         msg.setFrom(new InternetAddress(em));
         msg.setRecipient(Message.RecipientType.TO, new InternetAddress(em));
         msg.setSubject("job A live 임시 비밀번호 발급");
         msg.setContent("<html><body>아래에 발급된 비밀번호로 로그인 해주세요.<h3>" 
                  + pwd + "</h3></body></html>", "text/html; charset=euc-kr");
         Transport.send(msg);

         repo.updatePwdByItvId(itvId, pwd);

         map.put("result", "SUCCESS");
      } catch (Exception e) {
         System.out.println(e);
         map.put("result", "FAIL");
      }
      return map;
   }
}