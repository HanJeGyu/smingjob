package com.admin.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@Lazy
public class NoticeDTO {
   private Long noticeSeq;     
   private String title,
         corName,
         content1,
         content2,
         content3,
         content4,
         state,
         career,
         area,
         startDate,
         startTime,
         tagLocation,
         tagAttribute,
         tagCareer;

}