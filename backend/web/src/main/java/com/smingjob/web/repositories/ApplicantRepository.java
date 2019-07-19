package com.smingjob.web.repositories;

import java.util.List;

import com.smingjob.web.enttites.Applicant;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * ApplicantRepository
 */
@Repository
public interface ApplicantRepository extends JpaRepository<Applicant, Long>{

/*     @Query("SELECT a.state FROM Applicant a JOIN a.notice b ON a.noticeSeq = b.noticeSeq WHERE a.noticeSeq = ?1")
    public List<Applicant> getNoticeList(Long noticeSeq); */
}