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

    private String corId, password, name, ceoName, area, pmName, pmPhone, homepage, address, dateJoin;
}