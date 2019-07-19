package com.admin.web.enttites;

import java.io.Serializable;
import java.sql.Date;

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

/**
 * Pr
 */

@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Getter
@Setter
@Table(name = "pr")

public class Pr implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long prSeq;
    
    @Column(name="itv_seq") private Long itvSeq;
    @Column(name="phone") private String phone;
    @Column(name="title") private String title;
    @Column(name="content") private String content;
    @Column(name="area") private String area; 
    @Column(name="pr_location") private String prLocation; 
    @Column(name="tag_location") private String tagLocation; 
    @Column(name="tag_attribute") private String tagAttribute; 
    @Column(name="tag_career") private String tagCareer; 
    @Column(name="date_upload") private String dateUpload; 

    @Override
    public String toString(){

        return "Pr :[prSeq:"+prSeq+",itvSeq:" +itvSeq+", phone:"+phone+", title:"+title+", content:"+content+
       ", area:"+area+", prLocation:"+prLocation+", tagLocation:"+tagLocation+", tagAttribute:"+tagAttribute+", tagCareer:"+tagCareer+", dateUpload:"+dateUpload + "]";
    }


    //생성자
    @Builder
    private Pr(Long itvSeq, String phone,
    String title, String content, String area, String prLocation, String tagLocation, String tagAttribute, String tagCareer, String dateUpload){
        this.itvSeq = itvSeq;
        this.phone =phone;
        this.title = title;
        this.content = content;
        this.area = area;
        this.prLocation = prLocation;
        this.tagLocation = tagLocation;
        this.tagAttribute = tagAttribute;
        this.tagCareer = tagCareer;
        this.dateUpload = dateUpload;
    }
    
}