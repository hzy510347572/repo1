package com.zy.h.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

import javax.annotation.Resource;
import javax.sql.DataSource;
import java.security.KeyPair;

@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

    /**
     * 数据源，用于从数据库获取数据进行认证操作，测试可以从内存中获取
     */
    @Autowired
    private DataSource dataSource;
    /**
     * jwt令牌转换器
     */
    @Autowired
    private JwtAccessTokenConverter jwtAccessTokenConverter;
    /**
     * SpringSecurity 用户自定义授权认证类
     */
    @Autowired
    private UserDetailsService userDetailsService;
    /**
     * 授权认证管理器
     */
    @Autowired
    private AuthenticationManager authenticationManager;
    /**
     * 令牌持久化存储接口
     */

//    private TokenStore tokenStore;

//    @Autowired
//    private CustomUserAuthenticationConverter customUserAuthenticationConverter;

    @Autowired
    private ClientDetailsService clientDetailsService;

    /***
     * 客户端信息配置
     * @param clients
     * @throws Exception
     */
    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        // 指定加载的客户端id（硬编码了）
//        clients.inMemory()
//                .withClient("myself")          //客户端id
//                .secret("myself")                      //秘钥
//                .redirectUris("http://localhost")       //重定向地址
//                .accessTokenValiditySeconds(7200)          //访问令牌有效期
//                .refreshTokenValiditySeconds(7200)         //刷新令牌有效期
//                .authorizedGrantTypes(
//                        "authorization_code",          //根据授权码生成令牌
//                        "client_credentials",          //客户端认证
//                        "refresh_token",                //刷新令牌
//                        "password")                     //密码方式认证
//                .scopes("app");                         //客户端范围，名称自定义，必填

        // 动态从数据库中加载客户端信息
        clients.jdbc(dataSource)            // 加载数据源的配置
                .clients(clientDetailsService);  // 加载客户端配置
    }

    /***
     * 授权服务器端点配置
     * @param endpoints
     * @throws Exception
     */
    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints.accessTokenConverter(jwtAccessTokenConverter)
                .authenticationManager(authenticationManager)//认证管理器
                .tokenStore(new JwtTokenStore(jwtAccessTokenConverter))                       //令牌存储
                .userDetailsService(userDetailsService);     //用户信息service
    }

    /***
     * 授权服务器的安全配置
     * @param oauthServer
     * @throws Exception
     */
    @Override
    public void configure(AuthorizationServerSecurityConfigurer oauthServer) throws Exception {
        oauthServer.allowFormAuthenticationForClients()
                .passwordEncoder(new BCryptPasswordEncoder())
                .tokenKeyAccess("permitAll()")
                .checkTokenAccess("isAuthenticated()");
    }






}
