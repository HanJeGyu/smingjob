package com.admin.web.repositories;

import java.util.List;
import java.util.Map;

import com.admin.web.enttites.Pr;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PrRepository extends JpaRepository<Pr, Long>{
 
    @Query("SELECT i.itvId AS itvId, p.phone AS phone, p.title AS title, p.content AS content, p.dateUpload AS dateUpload "
        + "FROM Pr p JOIN p.interviewer i")
    public List<Map<String, Object>> getPrList();
}