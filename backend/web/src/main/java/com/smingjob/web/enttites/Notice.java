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


@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@Setter
@ToString
@Table(name = "notices")
public class Notice implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy =GenerationType.AUTO)
    private Long noticeSeq;
        
    @Column(name="wtd_title") private String title;
    @Column(name="name") private String name;
    @Column(name="content1") private String content1;
    @Column(name="content2") private String content2;
    @Column(name="content3") private String content3;
    @Column(name="content4") private String content4;
    @Column(name="state")private String state;
    @Column(name="career")private String career ;
    @Column(name="area")private String area;
    @Column(name="start_date")private String startDate;
    @Column(name="last_date")private String lastDate;
    @Column(name="tag_location")private String tag_location;
    @Column(name="tag_attribute")private String tag_attribute ;
    @Column(name="tag_career")private String tag_career;
    
    @Override
    public String toString(){
        return String.format("고객정보 No: %d|n" + "ID: %s", noticeSeq, title,name,
        content1,content2,content3,content4,state,career,area,startDate,lastDate,
        tag_location,tag_attribute,tag_career);
    }

    @Builder
    private Notice(String title, String name, String content1, String content2,String content3,
    String content4,String state,String career,String area,String startDate,String lastDate,
    String tag_location,String tag_attribute,String tag_career){       
        this.title = title;
        this.name = name;        
        this.content1 = content1;
        this.content2 = content2;
        this.content3 = content3;
        this.content4 = content4;
        this.state = state;
        this.career = career;
        this.area = area;
        this.startDate = startDate;
        this.lastDate = lastDate;       
        this.tag_location = tag_location;
        this.tag_attribute = tag_attribute;
        this.tag_career = tag_career;
        }

}