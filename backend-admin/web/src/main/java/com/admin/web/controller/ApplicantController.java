package com.admin.web.controller;

import java.util.List;
import java.util.Map;

import com.admin.web.repositories.ApplicantRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/applicants")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class ApplicantController {

    @Autowired
    ApplicantRepository repo;
    @Autowired
    ModelMapper modelMapper;

    /* 개인회원 마이페이지 지원현황 */
    @GetMapping("/noticeList/{itvSeq}")
    public List<Map<String,Object>> noticeList(@PathVariable String itvSeq) {
        return repo.getNoticeList(Long.parseLong(itvSeq));
    }


}