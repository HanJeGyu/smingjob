package com.admin.web.repositories;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.admin.web.enttites.Applicant;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * ApplicantRepository
 */
@Repository
public interface ApplicantRepository extends JpaRepository<Applicant, Long>{

    public Optional<Applicant> findByApplicantSeq(Long applicantSeq);

    @Query("select i.name as name , i.birth as birth, i.phone as phone, i.email as email, "
    +"i.area as area, i.location as location, i.itvSeq as itvSeq, a.appState as appState, a.applicantSeq as applicantSeq "
    +"from Applicant a , Interviewer i "
    +"where a.itvSeq = i.itvSeq and a.noticeSeq=?1" )
    public List<Map<String,Object>> getApplicantList(Long noticeSeq);

    @Query("SELECT a.itvSeq AS itvSeq "
        + "FROM Applicant a "
        + "WHERE a.noticeSeq = ?1 "
        + "AND a.appState = '승인'")
    public List<Map<String, Object>> getAliveCandidate(Long noticeSeq);

}