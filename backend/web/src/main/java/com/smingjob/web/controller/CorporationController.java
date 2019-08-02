package com.smingjob.web.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Properties;
import java.util.UUID;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import com.smingjob.web.domain.CorporationDTO;
import com.smingjob.web.enttites.Corporation;
import com.smingjob.web.repositories.CorporationRepository;

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

/**
 * CorporationController
 */
@RestController
@RequestMapping("/corporations")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)

public class CorporationController {

   @Autowired CorporationDTO dto;
   @Autowired CorporationRepository repo;
   @Autowired ModelMapper modelMapper;

   //탈퇴
   @DeleteMapping("/{corSeq}")
   public HashMap<String, Object> deleteById(@PathVariable String corSeq){    
      HashMap<String, Object> map = new HashMap<>();
      try{
         repo.deleteById(Long.parseLong(corSeq));
         map.put("result", "SUCCESS");
      }
      catch(Exception e){
         System.out.println(e);
         map.put("result", "FAIL");
      }
      return map;
   }

   //가입시 ID중복확인
   @GetMapping("/checkId/{corId}")
   public Long checkId(@PathVariable String corId) {
      return repo.countByCorId(corId);
   }

   //기업 마이페이지 정보불러옴
   @GetMapping("/{corId}")
   public CorporationDTO findByCorId(@PathVariable String corId) {
      return modelMapper.map(repo.findByCorId(corId).get(), CorporationDTO.class);
   }

   //정보수정
   @PutMapping("/modify")
   public HashMap<String, String> modify(@RequestBody CorporationDTO rdto) {
      HashMap<String, String> map = new HashMap<>();
      try{
         repo.updateByCorId(rdto.getCorId(), rdto.getPwd(), rdto.getName(), 
                           rdto.getCeoName(), rdto.getArea(), rdto.getPmName(),
                           rdto.getPmPhone(), rdto.getPmEmail(), rdto.getCity(), rdto.getHomepage());
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
   public CorporationDTO login(@RequestBody CorporationDTO rdto) {
      try {
         return modelMapper.map(repo.findByCorIdAndPwd(rdto.getCorId(), rdto.getPwd()), CorporationDTO.class);
      } catch (Exception e) {
         return null;
      }
   }

   //가입
   @PostMapping("/join")
   public HashMap<String, String> join(@RequestBody CorporationDTO rdto) {
      System.out.println("진입확인");
      HashMap<String, String> map = new HashMap<>();
      SimpleDateFormat yyyymmdd = new SimpleDateFormat("yyyyMMdd");
      String dateJoin = yyyymmdd.format(new Date());
      try {
         repo.save(Corporation.builder()
                              .corId(rdto.getCorId())
                              .pwd(rdto.getPwd())
                              .corRegNo(rdto.getCorRegNo())
                              .name(rdto.getName())
                              .ceoName(rdto.getCeoName())
                              .area(rdto.getArea())
                              .pmName(rdto.getPmName())
                              .pmPhone(rdto.getPmPhone())
                              .pmEmail(rdto.getPmEmail())
                              .homepage(rdto.getHomepage())
                              .city(rdto.getCity())
                              .dateJoin(dateJoin)
                              .build());
         map.put("result", "SUCCESS");
         return map;
      }catch(Exception e){
         System.out.println("회원가입 error : " + e);
         map.put("result", "FAIL");
         return map;
     }
   }

   // 임시비밀번호발급, 이메일 보내기
   @PutMapping("/sendMail/{corId}")
   public HashMap<String, Object> sendMail(@PathVariable String corId){
      HashMap<String, Object> map = new HashMap<>();
      String em = repo.findPmEmailByCorId(corId);
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

         repo.updatePwdByCorId(corId, pwd);

         map.put("result", "SUCCESS");
      } catch (Exception e) {
         System.out.println(e);
         map.put("result", "FAIL");
      }
      return map;
   }
}