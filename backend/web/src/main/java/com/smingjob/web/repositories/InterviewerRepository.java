package com.smingjob.web.repositories;

import java.util.Optional;

import com.smingjob.web.enttites.Interviewer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * InterviewerRepository
 */
@Repository
public interface InterviewerRepository extends JpaRepository<Interviewer, Long>{

    public Optional<Interviewer> findByItvId(String itvId);
    public Optional<Interviewer> findByItvSeq(Long itvSeq);
    public Interviewer findByItvIdAndPwd(String itvId, String pwd);
    public Long countByItvId(String itvId);

    //JPQL
    @Modifying
    @Transactional
    @Query("UPDATE Interviewer"
        + "    SET pwd = ?2, "
        + "        name = ?3, "
        + "        phone = ?4, "
        + "        email = ?5, "
        + "        area = ?6, "
        + "        location = ?7 "
        + "  WHERE itvId = ?1")
    public void updateByItvId(String itvId, String pwd, String name, String phone, 
                                String email, String area, String location);

}