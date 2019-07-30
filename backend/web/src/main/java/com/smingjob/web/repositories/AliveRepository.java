package com.smingjob.web.repositories;

import com.smingjob.web.enttites.Alive;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface AliveRepository extends JpaRepository<Alive, Long> {

    //JPQL
    @Modifying
    @Transactional
    @Query("UPDATE Alive"
        + "    SET state = ?2 "
        + "  WHERE liveSeq = ?1")
    public void updateState(Long liveSeq, String state);
}