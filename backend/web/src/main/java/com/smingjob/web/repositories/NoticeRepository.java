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
    /* public Optional<Notice> findByTitle(String title); */
    public Optional<Notice> findByNoticeSeq(Long noticeSeq);

    @Query("SELECT n.title AS title, n.startDate AS noticeStartDate, "
        + "n.startTime AS noticeStartTime, a.startDate AS aliveStartDate, "
        + "a.startTime AS aliveStartTime, a.state AS state "
        + "FROM Notice n JOIN n.alive a "
        + "WHERE a.corSeq = ?1")
    public List<Map<String, Object>> getNoticeLiveList(Long corSeq);
}