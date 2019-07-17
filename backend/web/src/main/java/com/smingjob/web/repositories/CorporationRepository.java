package com.smingjob.web.repositories;

import java.util.Optional;

import com.smingjob.web.enttites.Corporation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * CorporationRepository
 */
@Repository
public interface CorporationRepository extends JpaRepository<Corporation, Long>{

    public Optional<Corporation> findByCorId(String corId);
    public Corporation findByCorIdAndPwd(String corId, String pwd);
}