package com.smingjob.web.controller;

import com.smingjob.web.domain.PrDTO;
import com.smingjob.web.repositories.PrRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PrController {
    @Autowired PrDTO dto;
    @Autowired PrRepository repo;
    @Autowired ModelMapper modelMapper;

    @GetMapping("/{id}")
	public PrDTO findById(@PathVariable String id) {
        return null;
    }
    
}
