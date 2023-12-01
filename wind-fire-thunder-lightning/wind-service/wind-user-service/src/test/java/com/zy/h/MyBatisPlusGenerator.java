package com.zy.h;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.generator.FastAutoGenerator;
import com.baomidou.mybatisplus.generator.config.DataSourceConfig;
import com.baomidou.mybatisplus.generator.config.OutputFile;
import com.baomidou.mybatisplus.generator.config.rules.DateType;
import com.baomidou.mybatisplus.generator.fill.Column;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@RunWith(SpringRunner.class)
public class MyBatisPlusGenerator {



    @Test
    public void testMyBatisPlusGenerator() throws ClassNotFoundException, InstantiationException, IllegalAccessException {
//        Class<?> aClass = Class.forName("com.mysql.cj.jdbc.Driver");
//        Driver o = (Driver) aClass.newInstance();

        DriverManagerDataSource driverManagerDataSource = new DriverManagerDataSource();
        driverManagerDataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        driverManagerDataSource.setUrl("jdbc:mysql://192.168.213.131:33306/wind_hzy");
        driverManagerDataSource.setUsername("root");
        driverManagerDataSource.setPassword("123456");

        DataSourceConfig.Builder dataSourceConfigBuilder = new DataSourceConfig.Builder(driverManagerDataSource);
//        DataSourceConfig.Builder dataSourceConfigBuilder = new DataSourceConfig.Builder("jdbc:mysql://192.168.213.131:33306/wind_hzy", "root", "123456");
        FastAutoGenerator.create(dataSourceConfigBuilder)
                // 全局配置
//                .globalConfig((scanner, builder) -> builder.author(scanner.apply("请输入作者名称？")).fileOverride())
                .globalConfig((scanner, builder) -> builder.author("hzy")
                        .fileOverride()
                        .outputDir("D:\\GitRepository\\repo1\\wind-fire-thunder-lightning\\wind-service\\wind-user-service\\src\\main\\java")
                        .enableSwagger()
                        .dateType(DateType.TIME_PACK)
                        .commentDate("yyyy-MM-dd"))
                // 包配置
//                .packageConfig((scanner, builder) -> builder.parent(scanner.apply("请输入包名？")))
                .packageConfig((scanner, builder) -> builder.parent("com.zy.h")
                        .entity("entity")
                        .service("service")
                        .serviceImpl("service.impl")
                        .mapper("mapper")
                        .xml("mapper.xml")
                        .controller("controller")
                        .other("other"))
                // 策略配置
                .strategyConfig((scanner, builder) -> builder.addTablePrefix("tb_").addInclude(getTables(scanner.apply("请输入表名，多个英文逗号分隔？所有输入 all")))
                        .controllerBuilder().enableRestStyle().enableHyphenStyle()
                        .entityBuilder().enableLombok().addTableFills(
                                new Column("create_time", FieldFill.INSERT)
                        ).build())
                /*
                    模板引擎配置，默认 Velocity 可选模板引擎 Beetl 或 Freemarker
                   .templateEngine(new BeetlTemplateEngine())
                   .templateEngine(new FreemarkerTemplateEngine())
                 */
                .execute();

    }
    // 处理 all 情况
    protected List<String> getTables (String tables){
        return "all".equals(tables) ? Collections.emptyList() : Arrays.asList(tables.split(","));
    }
}
