package com.smingjob.web.repositories;

import java.util.Optional;
import java.util.List;
import java.util.Map;

import com.smingjob.web.enttites.Notice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long>{
    
    public Optional<Notice> findByNoticeSeq(Long noticeSeq);

    @Query("SELECT n.noticeSeq AS noticeSeq, n.title AS title, n.startDate AS noticeStartDate, "
        + "n.startTime AS noticeStartTime, a.startDate AS aliveStartDate, "
        + "a.startTime AS aliveStartTime, a.state AS state, a.liveSeq AS liveSeq, a.url AS url "
        + "FROM Notice n LEFT JOIN n.alive a "
        + "WHERE n.corporation.corSeq = ?1")
    public List<Map<String, Object>> getNoticeLiveList(Long corSeq);

    @Query("select n from Notice n where n.corName like %?1% or n.title like %?1% or n.tagLocation like %?1% "
         + "or n.tagAttribute like %?1% or n.tagCareer like %?1% or n.career like %?1% or n.area like %?1% "
         + "or state like %?1% or n.content like %?1% ")
    public List<Notice> searchAll(String keyword);
}