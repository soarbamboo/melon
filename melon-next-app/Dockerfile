FROM node:16-alpine

RUN  mkdir -p /home/melon-next-app

WORKDIR /home/melon-next-app

COPY  . /home/melon-next-app
COPY package.json /home/melon-next-app/
COPY yarn.lock /home/melon-next-app/

RUN apk update && apk upgrade && apk add --no-cache git 

RUN npm install -g yarn  --force && yarn config set registry https://registry.npm.taobao.org && yarn  && yarn build

EXPOSE 8091

CMD [ "yarn", "start" ]