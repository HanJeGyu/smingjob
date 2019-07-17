package com.smingjob.web.repositories;

import java.util.Optional;

import com.smingjob.web.enttites.Notice;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;


@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long>{
    public Optional<Notice> findByTitle(String title);

  
}