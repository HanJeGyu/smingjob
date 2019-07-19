package com.smingjob.web.domain;

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
         content,
         state,
         career,
         area,
         startDate,
         startTime,
         tagLocation,
         tagAttribute,
         tagCareer;

}