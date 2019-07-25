package com.smingjob.web.repositories;

import com.smingjob.web.enttites.Scrap;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * ScrapRepository
 */
@Repository
public interface ScrapRepository extends JpaRepository<Scrap, Long>{

    @Query("SELECT COUNT(*) FROM Scrap WHERE cor_seq = ?1 AND pr_seq = ?2")
    public String checkCount(String corSeq, String prSeq);
    
}