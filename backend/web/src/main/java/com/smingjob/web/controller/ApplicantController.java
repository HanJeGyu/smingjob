package com.smingjob.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.smingjob.web.domain.ApplicantDTO;
import com.smingjob.web.repositories.ApplicantRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * ApplicantController
 */
@RestController
@RequestMapping("/applicant")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class ApplicantController {

    @Autowired
    ApplicantDTO dto;
    @Autowired
    ApplicantRepository repo;
    @Autowired
    ModelMapper modelMapper;

/*     @GetMapping("/noticeList")
    public String noticeList(@RequestBody ApplicantDTO rdto) {
        repo.getNoticeList(Long.parseLong("1"));
        return "1";
    } */
}