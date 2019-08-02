package com.admin.web.repositories;

import java.util.List;
import java.util.Map;

import com.admin.web.enttites.Awaiter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * AwaiterRepository
 */
@Repository
public interface AwaiterRepository extends JpaRepository<Awaiter, Long> {

    @Query("SELECT itv.itvSeq AS itvSeq, itv.itvId AS itvId, itv.name AS name, itv.phone AS phone, itv.email AS email "
        + "FROM Awaiter a JOIN a.interviewer itv JOIN a.alive live "
        + "WHERE live.liveSeq = ?1")
    public List<Map<String,Object>> findAwaiterList(Long liveSeq);
}