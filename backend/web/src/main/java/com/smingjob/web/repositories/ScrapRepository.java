package com.smingjob.web.repositories;

import com.smingjob.web.enttites.Scrap;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ScrapRepository
 */
@Repository
public interface ScrapRepository extends JpaRepository<Scrap, Long>{


    
}