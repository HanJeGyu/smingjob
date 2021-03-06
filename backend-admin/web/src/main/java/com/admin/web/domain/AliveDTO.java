package com.admin.web.domain;

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
    private Long liveSeq, corSeq, noticeSeq;
    private String corName, state, startDate, startTime, area, career, url;
    
}


