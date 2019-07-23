package com.admin.web.repositories;

import java.util.List;
import java.util.Map;

import com.admin.web.domain.ApplicantDTO;
import com.admin.web.domain.InterviewerDTO;
import com.admin.web.enttites.Applicant;
import com.admin.web.enttites.Interviewer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * ApplicantRepository
 */
@Repository
public interface ApplicantRepository extends JpaRepository<Applicant, Long>{

   /*  @Query("SELECT n.title as title, n.corName as corName, "
        + "n.startDate as startDate, n.startTime as startTime, a.appState as state "
        + "FROM Applicant a JOIN a.notice n "
        + "WHERE a.itvSeq = ?1")
    public List<Map<String,Object>> getNoticeList(Long itvSeq); */

    @Query("select i.name, i.email, i.phone, i.birth,i.location,i.area, a.appState "
        +"from Applicant a join Interviewer i "
        +"where a.itvSeq = i.itvSeq and a.noticeSeq=?1" )
    public List<Applicant> getApplicantList(Long noticeSeq);

}