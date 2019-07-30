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
    
    @Column(name="itv_seq") private Long itvSeq; 
    @Column(name="app_state") private String appState;

    @Column(name="notice_seq")private Long noticeSeq;

    @Override
    public String toString(){
        return String.format("지원자 No: %d|n" + "ID: %s", applicantSeq, appState, noticeSeq);
    }

    @Builder
    private Applicant( Long itvSeq, String appState, Long noticeSeq){
        this.itvSeq = itvSeq;
        this.appState = appState;     
        this.noticeSeq = noticeSeq;

    } 

}

