package com.admin.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * ApplicantDTO
 */
@Data
@Lazy
@Component
public class ApplicantDTO {

    private Long applicantSeq, itvSeq, noticeSeq;
    private String appState;
}