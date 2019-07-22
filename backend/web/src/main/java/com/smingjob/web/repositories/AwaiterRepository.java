package com.smingjob.web.repositories;

import java.util.List;
import java.util.Map;

import com.smingjob.web.enttites.Awaiter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * AwaiterRepository
 */
@Repository
public interface AwaiterRepository extends JpaRepository<Awaiter, Long>{
    
    @Query("SELECT live.corName AS corName, live.startDate AS startDate, "
        + "live.startTime AS startTime, a.result AS result "
        + "FROM Awaiter a JOIN a.interviewer itv JOIN a.alive live  "
        + "WHERE itv.itvSeq = ?1")
    public List<Map<String,Object>> getAliveList(Long itvSeq);
}