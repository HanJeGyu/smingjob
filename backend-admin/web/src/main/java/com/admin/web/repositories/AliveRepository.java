package com.admin.web.repositories;

import com.admin.web.enttites.Alive;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AliveRepository extends JpaRepository<Alive, Long> {

    
}