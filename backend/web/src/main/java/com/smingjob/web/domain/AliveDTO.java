package com.smingjob.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * AliveDTO
 */
@Data
@Component
@Lazy
public class AliveDTO {
    private Long liveSeq, corSeq, itvSeq;
    private String corName, state, startDate, area, career, itvName, itvPhone;
    
}


