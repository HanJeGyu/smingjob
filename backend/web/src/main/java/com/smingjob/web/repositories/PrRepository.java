package com.smingjob.web.repositories;

import com.smingjob.web.enttites.Pr;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrRepository extends JpaRepository<Pr, Long>{

}