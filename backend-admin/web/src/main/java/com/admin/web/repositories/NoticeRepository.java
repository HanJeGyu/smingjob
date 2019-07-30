package com.admin.web.repositories;

import java.util.Optional;

import com.admin.web.enttites.Notice;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;


@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long>{
    
    public Optional<Notice> findByNoticeSeq(Long noticeSeq);
  
}