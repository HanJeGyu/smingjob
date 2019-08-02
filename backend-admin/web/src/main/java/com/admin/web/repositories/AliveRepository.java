package com.admin.web.repositories;

import javax.transaction.Transactional;

import com.admin.web.enttites.Alive;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AliveRepository extends JpaRepository<Alive, Long> {

    public Alive findByNoticeSeq(Long noticeSeq);

    // JPQL
    @Modifying
    @Transactional
    @Query("UPDATE Alive" + "    SET state = ?2 " + "  WHERE liveSeq = ?1")
    public void updateState(Long liveSeq, String state);
}