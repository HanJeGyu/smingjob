package com.admin.web.controller;

import com.admin.web.domain.ManagerDTO;
import com.admin.web.enttites.Manager;
import com.admin.web.repositories.ManagerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


/**
 * ManagerController
 */
@RestController
@RequestMapping("managers")
@CrossOrigin(origins = "http://localhost:3001", maxAge = 3600)
public class ManagerController {

    @Autowired
    ManagerRepository repo;

    //관리자로긴
    @PostMapping("/login")
    public Manager login(@RequestBody ManagerDTO rdto) {
        try {
            return repo.findByManagerIdAndPwd(rdto.getManagerId(), rdto.getPwd());
        } catch (Exception e) {
            return null;
         }
    }
    
}