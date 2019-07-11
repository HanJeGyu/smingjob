package com.smingjob.web.repositories;

import com.smingjob.web.enttites.Alive;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AliveRepository extends JpaRepository<Alive, Long> {

    
}