package com.admin.web.enttites;

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

/**
 * Alive
 */

@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Getter
@Setter
@Table(name = "alive")

public class Alive implements Serializable {
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long liveSeq;

    @Column(name="cor_seq") private Long corSeq;
    @Column(name="cor_name") private String corName;
    @Column(name="notice_seq") private Long noticeSeq;
    @Column(name="area") private String area; 
    @Column(name="career") private String career; 
    @Column(name="itv_seq") private Long itvSeq; 
    @Column(name="itv_name") private String itvName; 
    @Column(name="itv_phone") private String itvPhone; 
    @Column(name="start_date") private String startDate;
    @Column(name="start_time") private String startTime;
    @Column(name="state") private String state;
    @Column(name="url") private String url;

    @Override
    public String toString(){
        return "Alive :[live_seq:" + liveSeq + ",cor_seq:" + corSeq + ", cor_name:" + corName + ",notice_seq" + noticeSeq + ", state:" + state
        + ", start_date:" + startDate+ ", start_time" + startTime + ", area:" + area + ", career:" + career 
        + ", itv_seq:" + itvSeq + ", itv_name:" + itvName + ", itv_phone:" + itvPhone + ", url:" + url + "]";
    }


    //생성자
    @Builder
    private Alive(Long corSeq, String corName, Long noticeSeq, String state, String startDate, String startTime,
                 String area, String career, Long itvSeq, String itvName, String itvPhone, String url){
        this.corSeq = corSeq;
        this.corName =corName;
        this.noticeSeq = noticeSeq;
        this.state = state;
        this.startDate = startDate;
        this.startTime = startTime;
        this.area = area;
        this.career = career;
        this.itvSeq = itvSeq;
        this.itvName = itvName;
        this.itvPhone = itvPhone;
        this.url = url;
    }
    
}