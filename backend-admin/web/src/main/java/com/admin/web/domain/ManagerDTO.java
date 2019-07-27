package com.admin.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * ManagerDTO
 */
@Data
@Lazy
@Component
public class ManagerDTO {

    private Long managerSeq;
    private String managerId, pwd;
}