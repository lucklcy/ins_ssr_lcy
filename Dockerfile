FROM keymetrics/pm2:latest-stretch

RUN mkdir -p /www/ins_ssr_lcy
WORKDIR /www/ins_ssr_lcy
COPY . .
# 暴露容器端口
EXPOSE 9080
# 启动node应用
CMD ["pm2-docker", "start", "pm2.config.js"]