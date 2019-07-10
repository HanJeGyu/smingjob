package com.smingjob.web.repositories;

import com.smingjob.web.enttites.Interviewer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * InterviewerRepository
 */
@Repository
public interface InterviewerRepository extends JpaRepository<Interviewer, Long>{

    
}