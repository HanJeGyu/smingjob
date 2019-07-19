package com.admin.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * InterviewerDTO
 */
@Data
@Component
@Lazy
public class InterviewerDTO {
    private Long itvSeq;
    private String itvId, pwd, name, birth, phone, email, area, location, dateJoin;
}