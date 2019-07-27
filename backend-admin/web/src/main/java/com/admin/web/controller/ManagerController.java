package com.admin.web.controller;

import com.admin.web.domain.ManagerDTO;
import com.admin.web.repositories.ManagerRepository;

import org.modelmapper.ModelMapper;
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
    @Autowired
    ManagerDTO dto;
    @Autowired
    ModelMapper modelmapper;

    @PostMapping("/login")
    public ManagerDTO login(@RequestBody ManagerDTO rdto) {
        try {
            return modelmapper.map(repo.findByManagerIdAndPwd(rdto.getManagerId(), rdto.getPwd()), ManagerDTO.class);
        } catch (Exception e) {
            return null;
         }
    }
    
}