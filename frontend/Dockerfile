FROM node:14.8.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get upgrade -y && \ 
    yarn global add @vue/cli && \
    yarn global add @vue/cli-init 

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
ENV HOST 0.0.0.0
EXPOSE 3000
