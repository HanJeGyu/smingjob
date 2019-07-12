package com.smingjob.web.domain;

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

    private String itvId, pwd, name, birth, phone, email, area, location, dateJoin;
}