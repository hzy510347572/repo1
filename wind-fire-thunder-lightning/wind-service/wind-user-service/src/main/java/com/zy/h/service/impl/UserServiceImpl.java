package com.zy.h.service.impl;

import com.zy.h.entity.User;
import com.zy.h.mapper.UserMapper;
import com.zy.h.service.IUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 用户表 服务实现类
 * </p>
 *
 * @author hzy
 * @since 2023-11-27
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {

}
