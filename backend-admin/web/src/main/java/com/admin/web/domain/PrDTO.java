package com.admin.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * PrDTO
 */
@Data
@Component
@Lazy
public class PrDTO {
    private Long prSeq, itvSeq;
    private String phone, title, content, area, tagLocation, tagAttribute, tagCareer, dateUpload;
    
}