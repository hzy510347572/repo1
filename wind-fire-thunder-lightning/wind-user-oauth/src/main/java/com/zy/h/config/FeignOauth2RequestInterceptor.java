package com.zy.h.config;

import com.zy.h.util.JwtToken;
import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

/**
 * @ClassName FeignOauth2RequestInterceptor
 * @Description 在feign的调用过程中添加请求头信息
 * @Author 传智播客
 * @Date 15:35 2020/3/2
 * @Version 2.1
 **/
@Component
public class FeignOauth2RequestInterceptor implements RequestInterceptor {

    /**
     * @author 栗子
     * @Description 将带有权限的token放入到请求头，供feign进行调用
     * @Date 15:36 2020/3/2
     * @param template
     * @return void
     **/
    @Override
    public void apply(RequestTemplate template) {
        // 服务间需要认证，获取请求头相关数据
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (attributes != null){
            HttpServletRequest request = attributes.getRequest();
            // 获取这些头信息
            Enumeration<String> headerNames = request.getHeaderNames();
            if (headerNames != null){
                while (headerNames.hasMoreElements()){
                    String headName = headerNames.nextElement();        // 请求头名称
                    String headerValue = request.getHeader(headName);   // 请求头名称对应的value
                    template.header(headName, headerValue);
                }
            }
        }

        // 将带有权限的token放入到请求头
        String token = JwtToken.adminJwt();
        template.header("Authorization", "bearer " + token);
    }
}
