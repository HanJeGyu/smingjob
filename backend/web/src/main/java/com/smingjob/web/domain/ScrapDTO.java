package com.smingjob.web.domain;
import com.smingjob.web.enttites.Corporation;
import com.smingjob.web.enttites.Pr;

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