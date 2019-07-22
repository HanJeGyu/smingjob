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

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Awaiter
 */
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Getter
@Setter
@Table(name = "awaiter")
public class Awaiter implements Serializable{
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long awaiterSeq;

    @Column(name="result") private String result;

    @ManyToOne
    @JoinColumn(name = "live_seq")
    private Alive alive;

    @ManyToOne
    @JoinColumn(name = "itv_seq")
    private Interviewer interviewer;
}