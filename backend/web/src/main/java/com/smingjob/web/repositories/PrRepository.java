package com.smingjob.web.repositories;

import java.util.List;

import com.smingjob.web.enttites.Pr;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PrRepository extends JpaRepository<Pr, Long>{

    public List<Pr> findByItvSeq(Long itvSeq);

    @Query("select p from Pr p where p.title like %?1% or p.content like %?1% or p.name like %?1% "    
         + "or p.prLocation like %?1%  or p.tagLocation like %?1% or p.tagAttribute like %?1% "
        + "or p.tagCareer like %?1% or p.area like %?1%" ) 
    public List<Pr> searchAll(String keyword);
}