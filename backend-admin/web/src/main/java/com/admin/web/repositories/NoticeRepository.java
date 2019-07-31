package com.admin.web.repositories;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.admin.web.enttites.Notice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long>{
    
    public Optional<Notice> findByNoticeSeq(Long noticeSeq);

    @Query(value="SELECT n.notice_seq AS noticeSeq, n.title AS title, n.cor_seq AS corSeq, "
        + "n.cor_name AS corName, n.career AS career, n.area AS area "
        + "FROM notice n "
        + "WHERE NOT EXISTS"
        + "( SELECT notice_seq FROM alive a WHERE n.notice_seq = a.notice_seq ) ", nativeQuery = true)
    public List<Map<String, Object>> noneAliveList();
}