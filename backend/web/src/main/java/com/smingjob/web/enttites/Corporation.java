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
@Table(name = "corporation")
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class Corporation implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long corSeq;

    @Column(name = "cor_id") private String corId;
    @Column(name = "pwd") private String pwd;
    @Column(name = "cor_reg_no") private String corRegNo;
    @Column(name = "name") private String name;
    @Column(name = "ceo_name") private String ceoName;
    @Column(name = "area") private String area;
    @Column(name = "pm_name") private String pmName;
    @Column(name = "pm_phone") private String pmPhone;
    @Column(name = "homepage") private String homepage;
    @Column(name = "city") private String city;
    @Column(name = "date_join") private String dateJoin;

    @Override
    public String toString(){
        return String.format("기업정보 No: %d|n" + "ID: %s", corSeq, corId, pwd,
        corRegNo, name, ceoName, area, pmName, pmPhone, homepage, city, dateJoin);
    }

    @Builder
    private Corporation(String corId,String pwd, String corRegNo, String name, String ceoName,
        String area, String pmName, String pmPhone, String homepage, String city, String dateJoin) {
        this.corId = corId;
        this.pwd = pwd;
        this.corRegNo = corRegNo;
        this.name = name;
        this.ceoName = ceoName;
        this.area = area;
        this.pmName = pmName;
        this.pmPhone = pmPhone;
        this.homepage = homepage;
        this.city = city;
        this.dateJoin = dateJoin;
    }
}