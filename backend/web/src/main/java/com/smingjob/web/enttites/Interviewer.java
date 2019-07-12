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
import lombok.ToString;

/**
 * Interviewer
 */
@Entity
@Getter
@ToString
@Table(name = "Interviewer")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Interviewer implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long itvSeq;

    @Column(name = "itv_id") private String itvId;
    @Column(name = "pwd") private String pwd;
    @Column(name = "name") private String name;
    @Column(name = "birth") private String birth;
    @Column(name = "phone") private String phone;
    @Column(name = "email") private String email;
    @Column(name = "area") private String area;
    @Column(name = "location") private String location;
    @Column(name = "date_join") private String dateJoin;

    @Builder
    private Interviewer(String itvId, String pwd, String name, String birth,String phone,
    String email,String area,String location,String dateJoin){       
        this.itvId = itvId;
        this.pwd = pwd;        
        this.name = name;
        this.birth = birth;
        this.phone = phone;
        this.email = email;
        this.area = area;
        this.location = location;
        this.dateJoin = dateJoin;
        }
}