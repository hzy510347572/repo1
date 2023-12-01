## AdoptOpenJDK 停止发布 OpenJDK 二进制，而 Eclipse Temurin 是它的延伸，提供更好的稳定性
FROM eclipse-temurin:8-jre

## 创建目录，并使用它作为工作目录
RUN mkdir -p /jpack/wind-eureka   ##在镜像中执行命令
WORKDIR /jpack/wind-eureka

##把宿主机中的文件copy 到容器中
COPY ./target/wind-eureka.jar app.jar

## 设置 TZ 时区
## 设置 JAVA_OPTS 环境变量，可通过 docker run -e "JAVA_OPTS=" 进行覆盖
ENV TZ=Asia/Shanghai JAVA_OPTS="-Xms512m -Xmx512m"

## 暴露后端项目的 23100 端口
EXPOSE 23100

## 启动后端项目
CMD java ${JAVA_OPTS} -Djava.security.egd=file:/dev/./urandom -jar app.jar