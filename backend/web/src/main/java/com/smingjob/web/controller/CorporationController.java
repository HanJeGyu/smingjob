package com.smingjob.web.controller;

import com.smingjob.web.domain.CorporationDTO;
import com.smingjob.web.repositories.CorporationRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * CorporationController
 */
@RestController
public class CorporationController {

    @Autowired CorporationDTO corDTO;
    @Autowired CorporationRepository corRep;
    @Autowired ModelMapper modelMapper;

    @GetMapping("/{corId}")
	public CorporationDTO findBySeekerId(@PathVariable String corId){
        return modelMapper.map(corRep.findByCorId(corId), CorporationDTO.class);
    }

}