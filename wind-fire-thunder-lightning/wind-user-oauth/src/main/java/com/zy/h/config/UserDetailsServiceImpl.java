package com.zy.h.config;

import com.zy.h.service.UserFeign;
import com.zy.h.util.UserJwt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.oauth2.provider.ClientDetails;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

/*****
 * 自定义授权认证类
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    ClientDetailsService clientDetailsService;

    @Autowired(required = false)
    private UserFeign userFeign;

    /****
     * 自定义授权认证
     * @param username
     * @return
     * @throws UsernameNotFoundException
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //取出身份，如果身份为空说明没有认证
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        //没有认证统一采用httpbasic认证，httpbasic中存储了client_id和client_secret，开始认证client_id和client_secret
        if(authentication==null){
            ClientDetails clientDetails = clientDetailsService.loadClientByClientId(username);
            if(clientDetails!=null){
                //秘钥
                String clientSecret = clientDetails.getClientSecret();
                //静态方式
//                return new User(username,new BCryptPasswordEncoder().encode(clientSecret), AuthorityUtils.commaSeparatedStringToAuthorityList(""));
                // 数据库查找方式
                return new User(username,clientSecret, AuthorityUtils.commaSeparatedStringToAuthorityList(""));
            }
        }

        if (StringUtils.isEmpty(username)) {
            return null;
        }

        // 根据用户名查询用户信息
        String pwd = userFeign.findById(username).getData().getPassword();
//        String pwd = new BCryptPasswordEncoder().encode("szitheima");
//        String pwd = new BCryptPasswordEncoder().encode(password);
        //创建User对象
        String permissions = "goods_list,seckill_list"; // 用户的权限（从数据库中查询）
        UserJwt userDetails = new UserJwt(username,pwd,AuthorityUtils.commaSeparatedStringToAuthorityList(permissions));
        return userDetails;
    }
}
