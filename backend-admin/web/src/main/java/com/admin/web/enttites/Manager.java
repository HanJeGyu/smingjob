package com.admin.web.enttites;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Manager
 */
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@Setter
@Entity
@Table(name = "manager")
public class Manager implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long managerSeq;

    @Column(name = "manager_id") private String managerId;
    @Column(name = "pwd") private String pwd;
}