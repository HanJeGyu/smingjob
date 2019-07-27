package com.smingjob.web.repositories;

import java.util.List;
import java.util.Map;

import com.smingjob.web.enttites.Pr;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PrRepository extends JpaRepository<Pr, Long> {

    public List<Pr> findByItvSeq(Long itvSeq);

    @Query("select p from Pr p where p.title like %?1% or p.content like %?1% or p.name like %?1% "
            + "or p.prLocation like %?1%  or p.tagLocation like %?1% or p.tagAttribute like %?1% "
            + "or p.tagCareer like %?1% or p.area like %?1%")
    public List<Pr> searchAll(String keyword);

    @Query("SELECT p.title as title, p.dateUpload as dateUpload, p.prSeq as prSeq ,(SELECT COUNT(s) FROM p.scraps s) AS count FROM Pr p WHERE p.itvSeq = ?1")
    public List<Map<String, Object>> findAllAndCount(Long itvSeq);

    @Query("select p.prSeq as prSeq, p.name as name, p.title as title, s.dateScrap as dateScrap, s.scrapSeq as scrapSeq from Pr p join p.scraps s where s.corporation.corSeq = ?1")
    public List<Map<String, Object>> corFindAllById(Long corSeq);

}