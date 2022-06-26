package com.zy.h;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * 网关服务
 *
 */
@SpringBootApplication(scanBasePackages = {"com.zy.h"})
@EnableEurekaClient
public class GatewayServerApp {
    public static void main( String[] args ) {
        SpringApplication.run(GatewayServerApp.class, args);
    }
}
