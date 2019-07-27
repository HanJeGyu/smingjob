package com.admin.web.repositories;

import com.admin.web.enttites.Manager;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ManagerRepository
 */
@Repository
public interface ManagerRepository extends JpaRepository<Manager, Long> {

    public Manager findByManagerIdAndPwd(String managerId, String pwd);
}