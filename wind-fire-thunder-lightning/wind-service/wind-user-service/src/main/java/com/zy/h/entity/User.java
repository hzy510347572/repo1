package com.zy.h.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.time.LocalDateTime;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * <p>
 * 用户表
 * </p>
 *
 * @author hzy
 * @since 2023-11-27
 */
@Data
@TableName("tb_user")
@ApiModel(value = "User对象", description = "用户表")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("用户名")
    private String username;

    @ApiModelProperty("密码，加密存储")
    private String password;

    @ApiModelProperty("注册手机号")
    private String phone;

    @ApiModelProperty("注册邮箱")
    private String email;

    @ApiModelProperty("创建时间")
    private LocalDateTime created;

    @ApiModelProperty("修改时间")
    private LocalDateTime updated;

    @ApiModelProperty("会员来源：1:PC，2：H5，3：Android，4：IOS")
    private String sourceType;

    @ApiModelProperty("昵称")
    private String nickName;

    @ApiModelProperty("真实姓名")
    private String name;

    @ApiModelProperty("使用状态（1正常 0非正常）")
    private String status;

    @ApiModelProperty("头像地址")
    private String headPic;

    @ApiModelProperty("QQ号码")
    private String qq;

    @ApiModelProperty("手机是否验证 （0否  1是）")
    private String isMobileCheck;

    @ApiModelProperty("邮箱是否检测（0否  1是）")
    private String isEmailCheck;

    @ApiModelProperty("性别，1男，0女")
    private String sex;

    @ApiModelProperty("会员等级")
    private Integer userLevel;

    @ApiModelProperty("积分")
    private Integer points;

    @ApiModelProperty("经验值")
    private Integer experienceValue;

    @ApiModelProperty("出生年月日")
    private LocalDateTime birthday;

    @ApiModelProperty("最后登录时间")
    private LocalDateTime lastLoginTime;


}
