package com.zy.h;

import com.zy.h.config.CustomUserAuthenticationConverter;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.cloud.bootstrap.encrypt.KeyProperties;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.client.JdbcClientDetailsService;
import org.springframework.security.oauth2.provider.token.DefaultAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.KeyStoreKeyFactory;

import javax.sql.DataSource;
import java.security.KeyPair;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients(basePackages = {"com.zy.h"})
@MapperScan("com.zy.h")
public class OAuthServiceApp {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private CustomUserAuthenticationConverter customUserAuthenticationConverter;

    @Autowired
    private KeyProperties keyProperties;


    public static void main(String[] args) {
        SpringApplication.run(OAuthServiceApp.class, args);
    }


    //读取密钥的配置
    @Bean("keyProp")
    public KeyProperties keyProperties(){
        return new KeyProperties();
    }


    //客户端配置
    @Bean
    public ClientDetailsService clientDetails() {
        return new JdbcClientDetailsService(dataSource);
    }


    /****
     * JWT令牌转换器
     * @return
     */
    @Bean
    public JwtAccessTokenConverter jwtAccessTokenConverter() {
        JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
        KeyPair keyPair = new KeyStoreKeyFactory(
                keyProperties.getKeyStore().getLocation(),                          //证书路径 changgou.jks
                keyProperties.getKeyStore().getSecret().toCharArray())              //证书秘钥 changgouapp
                .getKeyPair(
                        keyProperties.getKeyStore().getAlias(),                     //证书别名 changgou
                        keyProperties.getKeyStore().getPassword().toCharArray());   //证书密码 changgou
        converter.setKeyPair(keyPair);
        //配置自定义的CustomUserAuthenticationConverter
        DefaultAccessTokenConverter accessTokenConverter = (DefaultAccessTokenConverter) converter.getAccessTokenConverter();
        accessTokenConverter.setUserTokenConverter(customUserAuthenticationConverter);
        return converter;
    }


}
