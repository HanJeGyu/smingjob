package com.smingjob.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * CorporationDTO
 */
@Data
@Component
@Lazy
public class CorporationDTO {
    private Long corSeq;
    private String corId, pwd, corRegNo, name, ceoName, area, pmName, pmPhone, pmEmail, homepage, city, dateJoin;
}