package com.smingjob.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * AwaiterDTO
 */
@Data
@Lazy
@Component
public class AwaiterDTO {

    private Long awaiterSeq, liveSeq, itvSeq;
    private String result;
}