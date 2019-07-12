package com.smingjob.web.enttites;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * Corporation
 */
@Entity
@Getter
@Setter
@ToString
@Table(name = "Corporation")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Corporation implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long corSeq;

    @Column(name = "cor_id") private String corId;
    @Column(name = "pwd") private String pwd;
    @Column(name = "name") private String name;
    @Column(name = "ceo_name") private String ceoName;
    @Column(name = "area") private String area;
    @Column(name = "pm_name") private String pmName;
    @Column(name = "pm_phone") private String pmPhone;
    @Column(name = "homepage") private String homepage;
    @Column(name = "address") private String address;
    @Column(name = "date_join") private String dateJoin;

    @Builder
    private Corporation(String corId,String pwd,String name, String ceoName,String area,
    String pmName, String pmPhone, String homepage, String address, String dateJoin) {
        this.corId = corId;
        this.pwd = pwd;
        this.name = name;
        this.ceoName = ceoName;
        this.area = area;
        this.pmName = pmName;
        this.pmPhone = pmPhone;
        this.homepage = homepage;
        this.address = address;
        this.dateJoin = dateJoin;
    }
}