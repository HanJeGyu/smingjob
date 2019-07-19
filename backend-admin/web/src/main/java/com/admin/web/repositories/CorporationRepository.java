package com.admin.web.repositories;

import java.util.Optional;

import javax.transaction.Transactional;

import com.admin.web.enttites.Corporation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * CorporationRepository
 */
@Repository
public interface CorporationRepository extends JpaRepository<Corporation, Long>{

    public Optional<Corporation> findByCorId(String corId);
    public Corporation findByCorIdAndPwd(String corId, String pwd);

    @Modifying
    @Transactional
    @Query("UPDATE Corporation"
        + "    SET pwd = ?2, "
        + "        name = ?3, "
        + "        ceoName = ?4, "
        + "        area = ?5, "
        + "        pmName = ?6, "
        + "        pmPhone = ?7, "
        + "        city = ?8, "
        + "        homepage = ?9 "
        + "  WHERE corId = ?1")
    public void updateByCorId(String corId, String pwd, String name, 
                            String ceoName, String area, String pmName, 
                            String pmPhone, String city, String homepage);
}