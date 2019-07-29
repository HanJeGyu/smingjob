package com.smingjob.web.repositories;

import java.util.List;
import java.util.Map;

import com.smingjob.web.enttites.Awaiter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * AwaiterRepository
 */
@Repository
public interface AwaiterRepository extends JpaRepository<Awaiter, Long>{
    
    @Query("SELECT live.corName AS corName, live.startDate AS startDate, "
        + "live.startTime AS startTime, a.result AS result "
        + "FROM Awaiter a JOIN a.interviewer itv JOIN a.alive live  "
        + "WHERE itv.itvSeq = ?1")
    public List<Map<String,Object>> findAliveList(Long itvSeq);

    @Query("SELECT itv.itvSeq AS itvSeq, itv.name AS name, itv.phone AS phone "
        + "FROM Awaiter a JOIN a.interviewer itv JOIN a.alive live  "
        + "WHERE live.liveSeq = ?1")
    public List<Map<String,Object>> findAwaiterList(Long liveSeq);

    @Modifying
    @Transactional
    @Query("UPDATE Awaiter a"
        + "    SET a.result = '연락처열람' "
        + "  WHERE a.alive.liveSeq = ?1"
        + "    AND a.interviewer.itvSeq = ?2")
    public void updateResult(Long liveSeq, Long itvSeq);
}