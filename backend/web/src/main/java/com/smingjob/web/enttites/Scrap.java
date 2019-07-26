package com.smingjob.web.enttites;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * Scrap
 */
@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@Setter
@ToString
@Table(name = "scrap")
public class Scrap implements Serializable{
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long scrapSeq;

    // @Column(name="itv_seq") private Long itvSeq;
    
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="cor_seq") 
    private Corporation corporation;
    
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="pr_seq") 
    private Pr pr;


    @Column(name="date_scrap") 
    private String dateScrap;
    
}