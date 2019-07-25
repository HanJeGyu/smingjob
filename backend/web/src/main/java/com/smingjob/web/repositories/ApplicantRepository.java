package com.smingjob.web.repositories;

import java.util.List;
import java.util.Map;

import com.smingjob.web.enttites.Applicant;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * ApplicantRepository
 */
@Repository
public interface ApplicantRepository extends JpaRepository<Applicant, Long>{

     /*  @Query("SELECT n.title as title, n.corName as corName, "
        + "n.startDate as startDate, n.startTime as startTime, a.appState as state "
        + "FROM Applicant a JOIN a.notice n "
        + "WHERE a.itvSeq = ?1
        and a.notice.noitceSeq = ?2")
    public List<Map<String,Object>> getNoticeList(Long itvSeq);  */

    @Query("select count(a) from Applicant a where a.itvSeq =?1 and a.notice.noticeSeq =?2")
    public String countApply(Long itvSeq, Long noticeSeq);
}