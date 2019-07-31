package com.admin.web.repositories;

import com.admin.web.enttites.Awaiter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * AwaiterRepository
 */
@Repository
public interface AwaiterRepository extends JpaRepository<Awaiter, Long> {

}