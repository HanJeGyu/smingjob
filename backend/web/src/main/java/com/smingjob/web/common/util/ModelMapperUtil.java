package com.smingjob.web.common.util;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * ModelMapperUtil
 */
@Configuration
public class ModelMapperUtil {

    @Bean
    public ModelMapper ModelMapper() {
        return new ModelMapper();
    }
}