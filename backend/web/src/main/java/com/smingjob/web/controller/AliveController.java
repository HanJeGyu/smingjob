package com.smingjob.web.controller;

import com.smingjob.web.domain.AliveDTO;
import com.smingjob.web.repositories.AliveRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AliveController {

    @Autowired AliveDTO dto;
    @Autowired AliveRepository repo;
    @Autowired ModelMapper modelMapper;

    @GetMapping("/{id}")
	public AliveDTO findById(@PathVariable String id) {
        return null;
    }

}