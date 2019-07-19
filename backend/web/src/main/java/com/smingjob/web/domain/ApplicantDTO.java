package com.smingjob.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * ApplicantDTO
 */
@Data
@Component
@Lazy
public class ApplicantDTO {
    private Long applicantSeq, noticeSeq, itvSeq;
    private String title, corName, itvId, name, startDate, startTime, state;
}




