package com.admin.web.repositories;

import java.util.List;
import java.util.Map;

import com.admin.web.enttites.Pr;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PrRepository extends JpaRepository<Pr, Long>{
    /* 
    @Query("SELECT n.title as title, n.corName as corName, "
        + "n.startDate as startDate, n.startTime as startTime, a.state as state "
        + "FROM Applicant a JOIN a.notice n "
        + "WHERE a.itvSeq = ?1") */

    @Query("SELECT i.itvId, p.phone, p.title, p.content, p.dateUpload"
        + "FROM  Pr p JOIN p.interviewer i")    
    public List<Map<String, Object>> getPrList();
}