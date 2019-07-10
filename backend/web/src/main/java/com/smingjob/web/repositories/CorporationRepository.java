package com.smingjob.web.repositories;

import com.smingjob.web.enttites.Corporation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * CorporationRepository
 */
@Repository
public interface CorporationRepository extends JpaRepository<Corporation, Long>{

    public Corporation findByCorId(String corId);
}