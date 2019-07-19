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
@Table(name = "applicant")
public class Applicant implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private Long applicantSeq;
        
    @Column(name="notice_seq") private Long noticeSeq;
    @Column(name="title") private String title;
    @Column(name="cor_name") private String corName;
    @Column(name="itv_seq") private Long itvSeq;
    @Column(name="itv_id") private String itvId;
    @Column(name="name") private String name;
    @Column(name="start_date") private String startDate;
    @Column(name="start_time") private String startTime;
    @Column(name="state") private String state;

    @Override
    public String toString(){
        return String.format("고객정보 No: %d|n" + "ID: %s", applicantSeq, noticeSeq, itvSeq, state);
    }

    @Builder
    private Applicant(Long noticeSeq, Long itvSeq, String state){       
        this.noticeSeq = noticeSeq;
        this.itvSeq = itvSeq;
        this.state = state;
    }

}