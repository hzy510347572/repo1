package com.zy.h;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
@MapperScan("com.zy.h")
public class UserServerApp {

    public static void main(String[] args) {
        SpringApplication.run(UserServerApp.class, args);
    }
}
