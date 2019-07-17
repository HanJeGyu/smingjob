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
 * Interviewer
 */
@Entity
@Getter
@Setter
@ToString
@Table(name = "interviewer")
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class Interviewer implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @Override
    public String toString(){
        return String.format("구직자 정보 No: %d|n" + "ID: %s", itvSeq, itvId, pwd,
        name, birth, phone, email, area, location, dateJoin);
    }

    @Builder
    private Interviewer(String itvId, String pwd, String name, String birth,String phone,
    String email,String area,String location, String dateJoin){       
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