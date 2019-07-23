package com.smingjob.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * PrDTO
 */
@Data
@Component
@Lazy
public class ScrapDTO {
    private Long scrapSeq, corSeq, prSeq;
    private String dateScrap;
    
}